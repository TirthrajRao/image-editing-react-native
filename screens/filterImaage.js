import React, { useState, useRef } from 'react'
import { StyleSheet, ScrollView, Text, Alert, View, Platform, PermissionsAndroid, Image, TouchableOpacity } from 'react-native'
import Icon from "react-native-vector-icons/MaterialIcons";
import { captureScreen } from "react-native-view-shot";
import RNFS from "react-native-fs";
import CameraRoll from "@react-native-community/cameraroll"
import { Slider } from 'react-native-elements';

function FilterImage({ route, navigation }) {
    const [id, setId] = useState('')
    const [done, setDone] = useState(false)
    const [opacityval, setOpacityval] = useState('')

    const filterImage = () => {
        if (id == 1) return [styles.ivoryFilter, opacityval !== '' ? { opacity: opacityval } : { opacity: 1 }]
        else if (id == 2) return [styles.mellowFilter, opacityval !== '' ? { opacity: opacityval } : { opacity: 1 }]
        else if (id == 3) return [styles.starkFilter, opacityval !== '' ? { opacity: opacityval } : { opacity: 1 }]
        else if (id == 4) return [styles.charmFilter, opacityval !== '' ? { opacity: opacityval } : { opacity: 1 }]
        else if (id == 5) return [styles.daintyFilter, opacityval !== '' ? { opacity: opacityval } : { opacity: 1 }]
        else if (id == 6) return [styles.breezeFilter, opacityval !== '' ? { opacity: opacityval } : { opacity: 1 }]
        else if (id == 7) return [styles.lucidFilter, opacityval !== '' ? { opacity: opacityval } : { opacity: 1 }]
        else if (id == 8) return [styles.glossyFilter, opacityval !== '' ? { opacity: opacityval } : { opacity: 1 }]
        else if (id == 9) return [styles.candyFilter, opacityval !== '' ? { opacity: opacityval } : { opacity: 1 }]
        else if (id == 10) return [styles.vougeFilter, opacityval !== '' ? { opacity: opacityval } : { opacity: 1 }]
        else if (id == 11) return [styles.fruitFilter, opacityval !== '' ? { opacity: opacityval } : { opacity: 1 }]
        else if (id == 12) return [styles.stageFilter, opacityval !== '' ? { opacity: opacityval } : { opacity: 1 }]
        else return styles.selectImage
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
                setDone(false)
                navigation.navigate('Dashboard')
            })
            .catch(err => {
                console.log("Error: " + err.message);
            });
    };
    const changeValueopacity = (value) => {

        if (id == 1) {
            setOpacityval(value)
            return opacityval
        }
        else if (id == 2) {
            setOpacityval(value)
            return opacityval
        }
        else if (id == 3) {
            setOpacityval(value)
            return opacityval
        }
        else if (id == 4) {
            setOpacityval(value)
            return opacityval
        }
        else if (id == 5) {
            setOpacityval(value)
            return opacityval
        }
        else if (id == 6) {
            setOpacityval(value)
            return opacityval
        }
        else if (id == 7) {
            setOpacityval(value)
            return opacityval
        }
        else if (id == 8) {
            setOpacityval(value)
            return opacityval
        }
        else if (id == 9) {
            setOpacityval(value)
            return opacityval
        }
        else if (id == 10) {
            setOpacityval(value)
            return opacityval
        }
        else if (id == 11) {
            setOpacityval(value)
            return opacityval
        }
        else if (id == 12) {
            setOpacityval(value)
            return opacityval
        }
    }
    return (
        <View style={styles.container}>
            <View style={{ flex: 6, backgroundColor: 'black' }}>
                <Image
                    source={route.params.imagepath ? { uri: route.params.imagepath } : null}
                    style={id == null ? styles.selectImage : filterImage()}
                />
            </View>
            {
                done == false ?
                    <View style={styles.footer}>
                        <View style={{ flex: 1, alignItems: 'stretch', justifyContent: 'center' }}>
                            <Slider
                                maximumValue={1}
                                minimumValue={0}
                                thumbTintColor='#008080'
                                onValueChange={(value) => changeValueopacity(value)}
                            />
                        </View>
                        <View style={{ height: 110, flexDirection: 'row', backgroundColor: '#e7e7e7' }}>
                            <ScrollView horizontal={true}>
                                <>
                                    <View>
                                        <TouchableOpacity onPress={() => [filterImage(), setId()]} style={[styles.filterView, { justifyContent: 'center' }]}>
                                            <Icon
                                                name="done"
                                                color="#606060"
                                                size={25}
                                                style={styles.icon}
                                            />
                                        </TouchableOpacity>
                                        <Text style={styles.filterNameText}>Original</Text>
                                    </View>
                                    <View>
                                        <TouchableOpacity onPress={() => [filterImage(), setId('1')]} style={styles.filterView}>
                                            <Image
                                                source={route.params.imagepath ? { uri: route.params.imagepath } : null}
                                                style={styles.ivoryFilter}
                                            />
                                        </TouchableOpacity>
                                        <Text style={styles.filterNameText}>Ivory</Text>
                                    </View>
                                    <View>
                                        <TouchableOpacity onPress={() => [filterImage(), setId('2')]} style={styles.filterView}>
                                            <Image
                                                source={route.params.imagepath ? { uri: route.params.imagepath } : null}
                                                style={styles.mellowFilter}
                                            />
                                        </TouchableOpacity>
                                        <Text style={styles.filterNameText}>Mellow</Text>
                                    </View>
                                    <View>
                                        <TouchableOpacity onPress={() => [filterImage(), setId('3')]} style={styles.filterView}>
                                            <Image
                                                source={route.params.imagepath ? { uri: route.params.imagepath } : null}
                                                style={styles.starkFilter}
                                            />
                                        </TouchableOpacity>
                                        <Text style={styles.filterNameText}>Stark</Text>
                                    </View>
                                    <View>
                                        <TouchableOpacity onPress={() => [filterImage(), setId('4')]} style={styles.filterView}>
                                            <Image
                                                source={route.params.imagepath ? { uri: route.params.imagepath } : null}
                                                style={styles.charmFilter}
                                            />
                                        </TouchableOpacity>
                                        <Text style={styles.filterNameText}>charm</Text>
                                    </View>
                                    <View>
                                        <TouchableOpacity onPress={() => [filterImage(), setId('5')]} style={styles.filterView}>
                                            <Image
                                                source={route.params.imagepath ? { uri: route.params.imagepath } : null}
                                                style={styles.daintyFilter}
                                            />
                                        </TouchableOpacity>
                                        <Text style={styles.filterNameText}>Dainty</Text>
                                    </View>
                                    <View>
                                        <TouchableOpacity onPress={() => [filterImage(), setId('6')]} style={styles.filterView}>
                                            <Image
                                                source={route.params.imagepath ? { uri: route.params.imagepath } : null}
                                                style={styles.breezeFilter}
                                            />
                                        </TouchableOpacity>
                                        <Text style={styles.filterNameText}>Breeze</Text>
                                    </View>
                                    <View>
                                        <TouchableOpacity onPress={() => [filterImage(), setId('7')]} style={styles.filterView}>
                                            <Image
                                                source={route.params.imagepath ? { uri: route.params.imagepath } : null}
                                                style={styles.lucidFilter}
                                            />
                                        </TouchableOpacity>
                                        <Text style={styles.filterNameText}>Lucid</Text>
                                    </View>

                                    <View>
                                        <TouchableOpacity onPress={() => [filterImage(), setId('8')]} style={styles.filterView}>
                                            <Image
                                                source={route.params.imagepath ? { uri: route.params.imagepath } : null}
                                                style={styles.glossyFilter}
                                            />
                                        </TouchableOpacity>
                                        <Text style={styles.filterNameText}>Glossy</Text>
                                    </View>

                                    <View>
                                        <TouchableOpacity onPress={() => [filterImage(), setId('9')]} style={styles.filterView}>
                                            <Image
                                                source={route.params.imagepath ? { uri: route.params.imagepath } : null}
                                                style={styles.candyFilter}
                                            />
                                        </TouchableOpacity>
                                        <Text style={styles.filterNameText}>Candy</Text>
                                    </View>
                                    <View>
                                        <TouchableOpacity onPress={() => [filterImage(), setId('10')]} style={styles.filterView}>
                                            <Image
                                                source={route.params.imagepath ? { uri: route.params.imagepath } : null}
                                                style={styles.vougeFilter}
                                            />
                                        </TouchableOpacity>
                                        <Text style={styles.filterNameText}>Vouge</Text>
                                    </View>
                                    <View>
                                        <TouchableOpacity onPress={() => [filterImage(), setId('10')]} style={styles.filterView}>
                                            <Image
                                                source={route.params.imagepath ? { uri: route.params.imagepath } : null}
                                                style={styles.naturalFilter}
                                            />
                                        </TouchableOpacity>
                                        <Text style={styles.filterNameText}>Natural</Text>
                                    </View>

                                    <View>
                                        <TouchableOpacity onPress={() => [filterImage(), setId('11')]} style={styles.filterView}>
                                            <Image
                                                source={route.params.imagepath ? { uri: route.params.imagepath } : null}
                                                style={styles.fruitFilter}
                                            />
                                        </TouchableOpacity>
                                        <Text style={styles.filterNameText}>Fruit</Text>
                                    </View>
                                    <View>
                                        <TouchableOpacity onPress={() => [filterImage(), setId('11')]} style={styles.filterView}>
                                            <Image
                                                source={route.params.imagepath ? { uri: route.params.imagepath } : null}
                                                style={styles.stageFilter}
                                            />
                                        </TouchableOpacity>
                                        <Text style={styles.filterNameText}>Stage</Text>
                                    </View>
                                </>
                            </ScrollView>
                        </View>
                        <View style={{ flexDirection: 'row', flex: 1, height: 40, backgroundColor: '#fff', alignItems: 'center' }}>
                            <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
                                <Icon
                                    name="close"
                                    color="#000"
                                    size={25}
                                    style={{ alignSelf: 'flex-end', left: 10, bottom: 1 }}
                                />
                            </TouchableOpacity>
                            <Text style={{ flex: 12, fontWeight: 'bold', fontSize: 20, textAlign: 'center' }}>Filter</Text>
                            <Icon
                                name="get-app"
                                color="#000"
                                size={25}
                                style={{ alignSelf: 'flex-end', right: 10, bottom: 10 }}
                                onPress={() => [snapshot(), setDone(true)]}
                            />
                        </View>
                    </View>
                    : null
            }
        </View>
    );
}

export default FilterImage;
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    footer: {
        height: 220,
        paddingHorizontal: 10,
        padding: 5,
        backgroundColor: '#e7e7e7',
    },
    filterView: {
        width: 70,
        backgroundColor: 'white',
        margin: 5,
        borderRadius: 10,
        height: 70
    },
    icon: {
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
    },

    selectImage: {
        resizeMode: 'cover',
        flex: 1,
        borderRadius: 10,

    },
    filterNameText: {
        textAlign: 'center'
    },
    ivoryFilter: {
        resizeMode: 'cover',
        flex: 1,
        backgroundColor: '#fffff0',
        borderRadius: 10
    },
    mellowFilter: {
        resizeMode: 'cover',
        flex: 1,
        backgroundColor: '#f8de7e',
        opacity: 0.8,
        borderRadius: 10
    },
    starkFilter: {
        resizeMode: 'cover',
        flex: 1,
        backgroundColor: '#d2c6b6',
        opacity: 0.8,
        borderRadius: 10
    },
    charmFilter: {
        resizeMode: 'cover',
        flex: 1,
        backgroundColor: '#e68fac',
        opacity: 0.8,
        borderRadius: 10
    },
    daintyFilter: {
        resizeMode: 'cover',
        flex: 1,
        backgroundColor: '#e6f0e4',
        opacity: 0.8,
        borderRadius: 10
    },
    breezeFilter: {
        resizeMode: 'cover',
        flex: 1,
        backgroundColor: '#6eccce',
        opacity: 0.8,
        borderRadius: 10
    },
    lucidFilter: {
        resizeMode: 'cover',
        flex: 1,
        backgroundColor: '#e9d3d4',
        opacity: 0.8,
        borderRadius: 10
    },
    glossyFilter: {
        resizeMode: 'cover',
        flex: 1,
        backgroundColor: '#ab92b3',
        opacity: 0.8,
        borderRadius: 10
    },
    candyFilter: {
        resizeMode: 'cover',
        flex: 1,
        backgroundColor: '#e4717a',
        opacity: 0.8,
        borderRadius: 10
    },
    vougeFilter: {
        resizeMode: 'cover',
        flex: 1,
        backgroundColor: '#cb9554',
        opacity: 0.8,
        borderRadius: 10
    },
    naturalFilter: {
        resizeMode: 'cover',
        flex: 1,
        backgroundColor: '#ae4a60',
        opacity: 0.8,
        borderRadius: 10
    },
    fruitFilter: {
        resizeMode: 'cover',
        flex: 1,
        backgroundColor: '#d36480',
        opacity: 0.8,
        borderRadius: 10
    },
    stageFilter: {
        resizeMode: 'cover',
        flex: 1,
        backgroundColor: '#e25749',
        opacity: 0.8,
        borderRadius: 10
    }
})