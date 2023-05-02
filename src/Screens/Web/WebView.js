//import liraries
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters';
import WebView  from 'react-native-webview';

// create a component
const WebViewComponent = () => {
    const [google, setgoogle] = useState(false)
    const [youtube, setyoutube] = useState(false)

    
    if (google) {
        return (
            <WebView source={{ uri: 'https://www.google.com/' }} style={{ flex: 1 }} />
        )
    }
    else if (youtube) {
        return (
            <WebView source={{ uri: 'https://www.youtube.com/' }} style={{ flex: 1 }} />
        )
    }
return (
    <View style={styles.container}>
        <TouchableOpacity activeOpacity={0.8} onPress={()=>setgoogle(true)} style={styles.btn}>
            <Text style={{color:'white'}}>Go To Google</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8} onPress={()=>setyoutube(true)} style={styles.btn}>
            <Text style={{color:'white'}}>Go To Youtube</Text>
        </TouchableOpacity>
    </View>
);
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        // backgroundColor: '#2c3e50',
    },
    btn:{
        backgroundColor: 'black',
        paddingHorizontal: moderateScale(40),
        paddingVertical: moderateScale(10),
        borderRadius: moderateVerticalScale(20),
    },
});

//make this component available to the app
export default WebViewComponent;
