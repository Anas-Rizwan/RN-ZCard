//import liraries
import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Linking, Animated, Alert } from 'react-native';
import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters';
import { Camera } from 'react-native-camera-kit';

// create a component
const CodeScanner = () => {
    const [flashlight, setflashlight] = useState(false)
    const [scanned, setScanned] = useState(false);

    const onSuccess = (event) => {
        if (!scanned) {
            setScanned(!scanned);
            Linking.openURL(event.nativeEvent.codeStringValue)
                .catch(err => alert('Invalid QR Code'));
        }

        setTimeout(() => {
            setScanned(false);
            console.log('time scanned');
        }, 2000); // Adjust the delay duration as needed
    
    // setScanned(true);
    console.log('scanned');
};

const fadeopacity = useRef(new Animated.Value(0)).current
useEffect(() => {
    fadeRun()
}, [])

const fadeRun = () => {
    let currentFunction = 1;

    const interval = setInterval(() => {
        if (currentFunction === 1) {
            handlefadein()
            currentFunction = 2;
        } else {
            handlefadeout()
            currentFunction = 1;
        }
    }, 1000); // Change the interval duration as needed

    return () => {
        clearInterval(interval);
    };
}

const handlefadein = () => {
    Animated.timing(fadeopacity, {
        duration: 500,
        toValue: 1,
        delay: 200,
        useNativeDriver: true
    }).start()
}
const handlefadeout = () => {
    Animated.timing(fadeopacity, {
        duration: 500,
        toValue: 0,
        delay: 200,
        useNativeDriver: true
    }).start()
}

const opacitystyle = {
    opacity: fadeopacity
}

function marker(color, size, thickness) {
    return <View style={{ backgroundColor: 'red', width: size, position: 'absolute', zIndex: scale(1), top: moderateVerticalScale(100), left: moderateScale(70) }}>
        <Animated.View style={[opacitystyle, { position: 'absolute', height: 35, width: 35, top: moderateVerticalScale(100), left: 0, borderColor: color, borderTopWidth: thickness, borderLeftWidth: thickness, }]}></Animated.View>
        <Animated.View style={[opacitystyle, { position: 'absolute', height: 35, width: 35, top: moderateVerticalScale(100), right: 0, borderColor: color, borderTopWidth: thickness, borderRightWidth: thickness, }]}></Animated.View>
        <Animated.View style={[opacitystyle, { position: 'absolute', height: 35, width: 35, bottom: moderateVerticalScale(-350), left: 0, borderColor: color, borderBottomWidth: thickness, borderLeftWidth: thickness, }]}></Animated.View>
        <Animated.View style={[opacitystyle, { position: 'absolute', height: 35, width: 35, bottom: moderateVerticalScale(-350), right: 0, borderColor: color, borderBottomWidth: thickness, borderRightWidth: thickness, }]}></Animated.View>
    </View>
}


const toggleFlashlight = () => {
    setflashlight(!flashlight);
};

// const onSuccess = (event) => {
//     Linking.openURL(event.nativeEvent.codeStringValue).catch(err =>
//         console.log('An error occured', err)
//     );

// };
return (
    <View style={styles.container}>
        <View style={styles.Header_view}>

            <Image source={require('../../Assets/arrow.png')} tintColor="white" style={{ marginLeft: moderateScale(25), width: moderateScale(13), height: moderateVerticalScale(10), }} />
            <Image source={require('../../Assets/logo_zimo.png')} tintColor="white" style={{ marginLeft: moderateScale(40), width: moderateScale(81), height: moderateVerticalScale(20), }} />
            <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                <Text style={{ fontFamily: 'Lato-Regular', color: 'white', letterSpacing: 1, }}>LONDON</Text>
                <Image source={require('../../Assets/flag.png')} style={{ marginLeft: moderateScale(8), marginRight: moderateScale(15), width: moderateScale(22), height: moderateVerticalScale(15), }} />
            </View>
        </View>

        <Camera
            style={{ flex: 1 }}
            zoomMode="on" // off/on(default)
            torchMode={flashlight ? 'on' : 'off'} // on/off(default)
            scanBarcode={true} // optional
            // showFrame={true} // Barcode only, optional
            // laserColor='rgba(0,0,0,.0)' // Barcode only, optional
            // frameColor="white" // Barcode only, optional
            onReadCode={onSuccess}
        />

        <View style={styles.Bottom_view}>
            <View style={{ marginLeft: moderateScale(16), width: moderateScale(30), height: moderateVerticalScale(29), }} >
                <Text style={{ fontSize: scale(8), fontFamily: 'Lato-Regular', color: 'white', letterSpacing: 1, }} >SCAN</Text>
                <Text style={{ fontSize: scale(14), fontFamily: 'Lato-Regular', color: 'white', letterSpacing: 1, }}>QR</Text>
                <Text style={{ fontSize: scale(8), fontFamily: 'Lato-Regular', color: 'white', letterSpacing: 1, }}>CODE</Text>
            </View >
            {/* <Image source={require('../../Assets/qr.png')} tintColor="white" /> */}
            <Text style={{ fontFamily: 'Lato-Regular', fontSize: scale(12), color: 'white', letterSpacing: 1, marginRight: moderateScale(18), }}>HISTORY</Text>
            <TouchableOpacity activeOpacity={0.8} onPress={toggleFlashlight}>
                <Image source={require('../../Assets/flashlight.png')} tintColor="white" style={{ marginRight: moderateScale(15), width: moderateScale(12), height: moderateVerticalScale(23), }} />
            </TouchableOpacity>

        </View>

        {
            marker('#BE9F56', '65%', 3)
        }
    </View>
);
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'space-between',
        // alignItems: 'center',
        // backgroundColor: '#2c3e50',
    },
    Header_view: {
        position: 'absolute',
        top: 0,
        zIndex: 1,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: moderateVerticalScale(17),
        // backgroundColor: 'red',
    },
    Bottom_view: {
        // backgroundColor: 'blue',
        width: '100%',
        position: 'absolute',
        bottom: 24,
        // marginBottom: moderateVerticalScale(16),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
});

//make this component available to the app
export default CodeScanner;
