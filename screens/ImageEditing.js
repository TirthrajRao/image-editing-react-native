import ViewShot from "react-native-view-shot";
import React, { Component } from 'react'
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native'
import RNFS from "react-native-fs";
import CameraRoll from "@react-native-community/cameraroll"
import { PhotoGrid } from 'react-native-photo-grid-frame';
import Icon from "react-native-vector-icons/MaterialIcons";
import { RNPhotoEditor } from 'react-native-photo-editor'

class ImageEditing extends Component {

    constructor(props) {
        super(props);
        this.state = {
            img: []
        };
    }

    componentDidMount() {

        this.setState({ img: this.props.propsimage })
    }


    snapshot() {

        this.refs.viewShot.capture().then(res => {
            console.log("do something with ", res);

            CameraRoll.saveToCameraRoll(res)
                .then((path) => {
                    console.log(res.split('/')[8])
                    let name = res.split('/')[8]
                    this.moveFile(path, name)
                })
                .catch(err => console.log('err:', err))
        });
    }
    moveFile = (uri, filename) => {
        const realPath = '/storage/emulated/0/DCIM/' + filename;
        const destPath = `/storage/emulated/0/Meme Generator/` + filename;
        console.log(realPath, ">>>>>>>>>>>>>>>", destPath)
        RNFS.moveFile(realPath, destPath)
            .then(success => {
                console.log("file moved!");
               this.onPressImage(destPath)


            })
            .catch(err => {
                console.log("Error: " + err.message);
            });
    };
     onPressImage = (imagepath) => {
        RNPhotoEditor.Edit({
            path: imagepath,
            stickers: [
                'sticker0', 'sticker1', 'sticker2', 'sticker3', 'sticker4', 'sticker5',
                'sticker6', 'sticker7', 'sticker8', 'sticker9', 'sticker10', 'sticker11',
                'sticker12', 'sticker13', 'sticker14', 'sticker15', 'sticker16', 'sticker17',
                'sticker18', 'sticker19', 'sticker20', 'sticker21', 'sticker22', 'sticker23',
                'sticker24', 'sticker25', 'sticker26', 'sticker27', 'sticker28', 'sticker29',
                'sticker30', 'sticker32', 'sticker33', 'sticker34', 'sticker35', 'sticker36',
                'sticker37', 'sticker38', 'sticker39', 'sticker40', 'sticker41', 'sticker42',
                'sticker43', 'sticker45'
            ],
            colors: undefined,
            onDone: (res) => {
                console.log('on done', res);
                this.props.propNavigation('FilterImage', { imagepath: "file://" + res })
                // navigation.navigate('FilterImage', { imagepath: "file://" + res })
            },
            onCancel: () => {
                console.log('on cancel');
            },
        });
    }
    render() {
        return (
            <>
                <ScrollView>
                    <ViewShot ref="viewShot" options={{ format: "jpg", quality: 0.9 }}>
                        <PhotoGrid PhotosList={this.state.img ? this.state.img : null} borderRadius={10} />
                    </ViewShot>
                </ScrollView>
                <View style={styles.myButton}>
                    <Icon
                        name={'get-app'}
                        size={30}
                        color="#fff"
                        onPress={() => this.snapshot()}
                    />
                </View>
            </>
        );
    }
}
export default ImageEditing;

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // flexDirection:'row'
        backgroundColor: 'pink'

    },
    myButton: {
        height: 60,
        width: 60,  //The Width must be the same as the height
        borderRadius: 400, //Then Make the Border Radius twice the size of width or Height   
        backgroundColor: 'purple',
        justifyContent: 'center',
        alignItems: 'center',
        right: 20,
        bottom: 20,
        position: 'absolute'

    }

})

{/* <View style={styles.container}>
<View style={{ backgroundColor: 'white', flex: 1, flexDirection: 'row' }}>
    <ViewShot ref="viewShot" options={{ format: "jpg", quality: 0.9 }}>
        <PhotoGrid PhotosList={this.state.img ? this.state.img : null} borderRadius={10} />
    </ViewShot>
</View>
<View style={styles.myButton}>
    <Icon
        name={'get-app'}
        size={30}
        color="#fff"
        onPress={() => this.snapshot()}
    />
</View>

</View> */}