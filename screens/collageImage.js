import React, { useState, useEffect, useRef } from 'react'
import { StyleSheet, ScrollView, Text, View, Dimensions, Image, TouchableOpacity } from 'react-native'
import { PhotoGrid } from 'react-native-photo-grid-frame';
import Icon from "react-native-vector-icons/MaterialIcons";
import { captureScreen, ViewShot } from "react-native-view-shot";
import RNFS from "react-native-fs";
import CameraRoll from "@react-native-community/cameraroll"
import ImageEditing from './ImageEditing';
function CollageImage({ route, navigation }) {
    const [pathimg, setPath] = useState([])
    const [done, setDone] = useState(false)

    useEffect(() => {
        getimagepath()
    }, [])
    const getimagepath = () => {
        var data = []
        route.params.images.map((image) => {
            data.push({ url: image.path })
        })
        setPath(data)
        setDone(true)
    }
    return (
        <>
        {
            done ==true ? 
            <ImageEditing
                propsimage={pathimg.length ? pathimg : pathimg} 
                propNavigation= {navigation.navigate}/>
                : 
                null
        }
            
        </>
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
