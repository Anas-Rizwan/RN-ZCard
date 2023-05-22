//import liraries
import { CameraRoll } from '@react-native-camera-roll/camera-roll';
import React, { useEffect, useState } from 'react';
import {
    View, Text, StyleSheet, TouchableOpacity, Image, Platform, PermissionsAndroid, FlatList
} from 'react-native';
import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters';
import ImagePicker from 'react-native-image-crop-picker'

// create a component
const ImagePick = () => {

    const [value, setvalue] = useState([])
    const [image, setimage] = useState([])

    useEffect(() => {
        hasAndroidPermission()
    }, [])
    // useEffect(() => {
    //     console.log("value wala chala");

    // }, [value])

    const hasAndroidPermission = async () => {
        const permission = Platform.Version >= 33 ? PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES : PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE;

        const hasPermission = await PermissionsAndroid.check(permission);
        if (hasPermission) {
            return true;
        }

        const status = await PermissionsAndroid.request(permission);
        return status === 'granted';
    }
    const OpenImagePicker = async () => {
        let imageList = []

        ImagePicker.openPicker({
            multiple: true,
            waitAnimationEnd: false,
            includeExif: true,
            forceJpg: true,
            compressImageQuality: 0.8,
            mediaType: 'photo',
            includeBase64: true
        })
            .then((response) => {
                response.map(image => {
                    imageList.push({
                        filename: image.filename,
                        path: image.path,
                        data: image.data
                    })
                })
                // setimage([...imageList])
                setimage((preValue) => {
                    return [...preValue, ...imageList];
                }
                )
                // console.log(response);
            })
            .catch(err => {
                console.log("Error", err.message);
            })
    }
    // const handleButtonPress = () => {
    //     CameraRoll.getPhotos({
    //         first: 3,
    //         assetType: 'Photos',
    //     })
    //         .then(r => {
    //             console.log(JSON.stringify(r.edges));
    //             setimage(r.edges);
    //         })
    //         .catch((err) => {
    //             console.log("Error", err.message);
    //         });
    //     setshow(false)
    // };
    return (
        <View style={styles.container}>
            <TouchableOpacity activeOpacity={0.8} style={styles.btn_view} onPress={() => OpenImagePicker()}>
                <Text style={styles.btn_text}>Pick Image</Text>
            </TouchableOpacity>

            <FlatList
                data={image}
                showsVerticalScrollIndicator={false}
                renderItem={({ item, index }) => {
                    // console.log("item", item);
                    return (
                    
                            index % 2 != 0 ?
                            < View >
                                <Image source={{ uri: item.path }} style={styles.single_img} />
                            </View>
                            :
                            <View style={styles.double_img_view}>
                                <Image source={{ uri: item.path }} style={styles.double_img} />
                                <Image source={{ uri: item.path }} style={styles.double_img} />
                            </View>
                     
                    )
                }}
            />


        </View >
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    btn_view: {
        backgroundColor: 'red',
        alignItems: 'center',
        width: '70%',
        alignSelf: 'center',
        padding: moderateVerticalScale(15),
        borderRadius: moderateVerticalScale(25),
        marginVertical: moderateVerticalScale(20),
    },
    btn_text: {
        color: 'white',
        fontSize: scale(14),
        fontFamily: 'Lato-Regular',
    },
    single_img: {
        alignSelf: 'center',
        width: moderateScale(320),
        height: moderateVerticalScale(200),
        borderRadius: moderateVerticalScale(10),
        marginBottom: moderateVerticalScale(10),
    },
    double_img_view: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginVertical: moderateVerticalScale(10),
    },
    double_img: {
        marginHorizontal: moderateScale(10),
        alignSelf: 'center',
        width: moderateScale(150),
        height: moderateVerticalScale(200),
        borderRadius: moderateVerticalScale(10),
    },
});

//make this component available to the app
export default ImagePick;
