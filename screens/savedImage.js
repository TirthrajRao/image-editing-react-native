import React, { useEffect, useState } from 'react'
import { StyleSheet, FlatList, Image, View, TouchableOpacity } from 'react-native'

import RNFS from "react-native-fs";



function SavedImage({ navigation }) {
    const [image, setImage] = useState([])
    useEffect(() => {
        getSavedImage()
    }, [])

    const getSavedImage = () => {
        let dirs = `/storage/emulated/0/MEME Generator`
        console.log("call Saved Image", dirs)
        RNFS.readDir(dirs)
            .then(allImages => {
                setImage(allImages)
            })
            .catch(err => {
                console.log(err.message, err.code);
            });
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={image}
                renderItem={({ item }) => (
                    <View style={styles.GridViewContainer}>
                        <TouchableOpacity onPress={ () => navigation.navigate('ShowImage',{ImagePath :"file://" + item.path })}>
                            <Image
                                source={{ uri: "file://" + item.path }}
                                style={styles.image}
                            />
                        </TouchableOpacity>
                    </View>
                )}
                numColumns={2}
            />
        </View>
    )

}
export default SavedImage;


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    image: {
        height: "100%",
        borderRadius: 8,
        borderWidth: 0.5,
        borderColor: "#fff"
    },
    GridViewContainer: {
        flex: 1,
        height: 150,
        margin: 5,
        elevation: 5,
        backgroundColor: "#ffffff",
        borderColor: "#fff",
        borderRadius: 8,
        borderWidth: 0.5,
        maxWidth: '48%'
      },
     
})
