import React, { useState, useEffect, useRef } from 'react'
import { StyleSheet, ScrollView, Text, View, Dimensions, Image, TouchableOpacity } from 'react-native'
import { PhotoGrid } from 'react-native-photo-grid-frame';
import Icon from "react-native-vector-icons/MaterialIcons";
import { captureScreen, ViewShot } from "react-native-view-shot";
import RNFS from "react-native-fs";
import CameraRoll from "@react-native-community/cameraroll"
function CollageImage({ route, navigation }) {
    const [path, setPath] = useState([])
    const viewShot = useRef()


    useEffect(() => {
        getimagepath()
    }, [])
    const getimagepath = () => {
        var data = []
        route.params.images.map((image) => {
            data.push({ url: image.path })
        })
        setPath(data)
    }

    const snapshot = () => {

        setTimeout(() => {
            captureScreen({
                format: "jpg",
                quality: 1
            })
                .then(res => {
                    console.log("save image:", res)
                    CameraRoll.saveToCameraRoll(res)
                        .then((path) => {
                            console.log(res.split('/')[8])
                            let name = res.split('/')[8]
                            moveFile(path, name)
                        })
                        .catch(err => console.log('err:', err))
                })
                .catch(err => {
                    console.error("Oops, snapshot failed", err);
                });
        }, 1000);
    }
    const moveFile = (uri, filename) => {
        const realPath = '/storage/emulated/0/DCIM/' + filename;
        const destPath = `/storage/emulated/0/Meme Generator/` + filename;
        console.log(realPath, ">>>>>>>>>>>>>>>", destPath)
        RNFS.moveFile(realPath, destPath)
            .then(success => {
                console.log("file moved!");
                navigation.navigate('Dashboard')
            })
            .catch(err => {
                console.log("Error: " + err.message);
            });
    };

    return (
        <View style={styles.container}>
            <ViewShot ref={viewShot} >
                <View>
                    <PhotoGrid PhotosList={path ? path : null} borderRadius={10} />
                </View>
            </ViewShot>
            <View style={styles.myButton}>
                <Icon
                    name={'get-app'}
                    size={30}
                    color="#fff"
                    onPress={() => snapshot()}
                />
            </View>

        </View>
    )
}
export default CollageImage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
