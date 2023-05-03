//import liraries
import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, } from 'react-native';
import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters';
import MembershipData from './MembershipData';
import styles from './styles';

// create a component
const MembershipCard = ({ showModal }) => {
    const renderItem = (item, index) => {
        return (
            <View style={styles.Card_Container} key={index}>
                <Text style={styles.Card_Discount_Text}>{item.discountText}</Text>

                <Image source={item.img} style={styles.Card_image} />

                <Text style={styles.Card_Price}>{item.price}</Text>
                <TouchableOpacity onPress={() => showModal(item)}>
                    <Text style={styles.Card_btn_Text}>{item.btnText}</Text>
                </TouchableOpacity>

            </View>
        )
    }
    return (

        <View style={styles.container}>

            <View style={styles.Header_view}>
                <Image source={require('../../Assets/arrow.png')} tintColor="black" style={{ marginLeft: moderateScale(25), }} />
                <Image source={require('../../Assets/logo_zimo.png')} tintColor="black" />
                <Image source={require('../../Assets/bag.png')} style={{ marginRight: moderateScale(25), }} />
            </View>
            <Image source={require('../../Assets/img_right.png')} style={styles.bg_img_right} />
            {/* <Text style={styles.bg_text}>MEMBERSHIP</Text> */}
            <Image source={require('../../Assets/img_left.png')} style={styles.bg_img_left} />

            <View style={styles.text_view}>
                <Text style={styles.text}>MEMBERSHIP</Text>
            </View>

            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <View
                    style={{
                        marginVertical: moderateVerticalScale(30),
                    }}
                >
                    <View style={styles.select_text_view}>
                        <Text style={styles.select_text}>SELECT YOUR MEMBERSHIP</Text>
                    </View>
                    {
                        MembershipData.map(renderItem)
                    }
                </View>
            </ScrollView>

            <View style={styles.line}></View>
        </View>
    );
};

// define your styles


//make this component available to the app
export default MembershipCard;
