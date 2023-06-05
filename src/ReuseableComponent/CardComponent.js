//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters';

// create a component
const CardComponent = ({
    off_img,
    logo_img,
    zimo_img,
    card_img,
    card_view_style = {},
    card_top_view_style = {},
    off_img_style = {},
    logo_img_style = {},
    zimo_img_view_style = {},
    zimo_img_style = {},
    card_img_view_style = {},
    card_img_style = {},
}) => {
    return (
        <View
            style={card_view_style}
        >
            <View style={card_top_view_style}>
                {off_img && <Image source={off_img} style={off_img_style} />}
                {logo_img && <Image source={logo_img} style={logo_img_style} />}
                {/* <Image source={off_img} style={off_img_style} />
                <Image source={logo_img} style={logo_img_style} /> */}
            </View>

            <View style={zimo_img_view_style}>
                <Image source={zimo_img} style={zimo_img_style} />
            </View>

            <View style={card_img_view_style}>
                <Image source={card_img} style={card_img_style} />
            </View>

        </View>
    );
};

// define your styles
const styles = StyleSheet.create({

});

//make this component available to the app
export default CardComponent;
