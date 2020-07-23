import React, { useState } from 'react'
import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity } from 'react-native'
const HEIGHT = Dimensions.get("screen").height;
const WIDTH = Dimensions.get("screen").width;
import Icon from "react-native-vector-icons/MaterialIcons";
import Picker from "react-native-image-picker";
import { RNPhotoEditor } from 'react-native-photo-editor'
import ImagePicker from 'react-native-image-crop-picker';

function Dashboard({ navigation }) {

    const pickImage = (type) => {

        let options = {
            title: "MEME Generator",
            takePhotoButtonTitle: "Camera",
            chooseFromLibraryButtonTitle: "Gallery",
            cancelButtonTitle: "cancel",
            quality: 0.5,
            mediaType: "photo",
            maxWidth: 2000,
            noData: true,
            maxHeight: 2000,
            dateFormat: "yyyy-MM-dd HH:mm:ss",
            allowsEditing: false
        };
        Picker.showImagePicker(options, response => {
            if (response.didCancel) {
                console.log("User cancelled photo picker");
            } else if (response.error) {
                console.log("ImagePickerManager Error: ", response.error);
            } else if (response.customButton) {
            } else {
                const uri = response.uri;
                console.log(response.path, uri)
                onPressImage(response.path)

            }
        });
    };

    const onPressImage = (imagepath) => {
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
                navigation.navigate('FilterImage', { imagepath: "file://" + res })
            },
            onCancel: () => {
                console.log('on cancel');
            },
        });
    }
    const pickMultipleImage = () => {
        ImagePicker.openPicker({
            multiple: true,
            // maxFiles:5
        }).then(images => {
            navigation.navigate('Collage', { images: images })
        });
    }
    return (
        <View style={styles.container}>
            <View style={{ flex: 6, flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <Image source={require('../assets/logo.png')} style={{ width: 250, height: 250, borderRadius: 20 }}></Image>
            </View>

            <View style={{ flex: 3, flexDirection: 'row', marginTop: 35 }}>
                <TouchableOpacity onPress={() => pickImage("memeimage")}
                    style={{ flex: 6, alignItems: 'center' }}>
                    <Icon
                        name="add-a-photo"
                        color="#606060"
                        size={80}
                        style={styles.icon}

                    />
                    <Text style={styles.text}>Add Image</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Saved Image')}
                    style={{ flex: 6, alignItems: 'center' }}>
                    <Icon
                        name="collections"
                        color="#606060"
                        size={80}
                        style={styles.icon}
                    />
                    <Text style={styles.text}>Saved Image</Text>
                </TouchableOpacity>
            </View>

            <View style={{ flex: 3, flexDirection: 'row', marginTop: 35 }}>
                <TouchableOpacity onPress={() => pickMultipleImage()}
                    style={{ flex: 6, alignItems: 'center' }}>
                    <Icon
                        name="grid-on"
                        color="#606060"
                        size={80}
                        style={styles.icon}

                    />
                    <Text style={styles.text}>Collage</Text>
                </TouchableOpacity>

            </View>



        </View>
    )
}
export default Dashboard;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    icon: {
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",

    },
    viewStyle: {
        flexDirection: 'column',
        borderColor: '#b3b3b3',
        borderRadius: 2,
        borderWidth: 2,
        margin: 20,
        flex: 6,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 20,
        color: '#606060',
        fontWeight: 'bold'
    }
})
