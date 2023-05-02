import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, FlatList, ImageBackground, ScrollView, Modal, TouchableOpacity, Alert } from 'react-native';
import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters';
import MembershipData from './MembershipData';
import MembershipModal from './MembershipModal';
import MembershipDetails from './MembershipDetails';



const MembershipCard = () => {
    const [modalVisible, setModalVisible] = useState(false)
    const [modalitem, setModalitem] = useState([])
    const [Detail, setDetail] = useState(false)


    const showModal = (item) => {
        console.log(item);
        setModalVisible(true)
        setModalitem(item)
    }
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
    console.log('item', modalitem);
    return (
        <>

            {
                Detail ?
                    <MembershipDetails modalitem={modalitem} changeState={setDetail} />
                    :
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
            }
            <View>
                {/* <MembershipModal modalVisible={modalVisible} modalitem={modalitem} /> */}
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        setModalVisible(!modalVisible);
                    }}
                >
                    <MembershipModal modalitem={modalitem} setModalVisible={setModalVisible} setDetail={setDetail} />
                </Modal>

            </View>
        </>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: '#fff',
    },

    bg_img_right: {
        position: 'absolute',
        width: moderateScale(204),
        height: moderateVerticalScale(100),
        alignSelf: 'flex-end',
        marginTop: moderateVerticalScale(100),
        tintColor: 'rgba(0,0,0,.4)'
    },
    bg_text: {
        position: 'absolute',
        top: moderateVerticalScale(125),
        left: moderateScale(80),
        fontFamily: 'Lato-Regular',
        fontSize: scale(42),
        color: "rgba(0,0,0,.04)",
        alignSelf: 'center',
    },
    bg_img_left: {
        position: 'absolute',
        width: moderateScale(204),
        height: moderateVerticalScale(100),
        bottom: moderateVerticalScale(60),
        tintColor: 'rgba(0,0,0,.4)'
    },
    Header_view: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: moderateVerticalScale(49),
        borderBottomWidth: 0.5,
    },
    text_view: {
        marginLeft: moderateScale(25),
        marginTop: moderateVerticalScale(9),
    },
    text: {
        fontFamily: 'Lato-Regular',
        fontSize: scale(18),
        color: "#BE9F56",
    },
    select_text_view: {
        // marginTop: moderateVerticalScale(21),
        alignItems: 'center',
    },
    select_text: {
        fontFamily: 'Lato-Regular',
        fontSize: scale(14),
        color: "#000000",
    },
    Card_Container: {
        alignItems: 'center',
        marginTop: moderateVerticalScale(22),
        // backgroundColor: 'red',
    },
    Card_image: {
        width: moderateScale(331),
        height: moderateVerticalScale(350),
        borderRadius: moderateVerticalScale(331 / 20),
    },
    Card_Discount_Text: {
        color: "#000000",
        fontFamily: 'Lato-Regular',
        fontSize: scale(12),
        marginBottom: moderateVerticalScale(17),
    },
    Card_Price: {
        fontFamily: 'Lato-Regular',
        fontSize: scale(12),
        marginTop: moderateVerticalScale(8),
        marginBottom: moderateVerticalScale(9),
        color: "#000000",
    },
    Card_btn_Text: {
        fontFamily: 'Lato-Regular',
        fontSize: scale(12),
        color: "#000000",
        marginBottom: moderateVerticalScale(35),

    },
    line: {
        position: 'absolute',
        top: '25%',
        // bottom: moderateVerticalScale(130),
        backgroundColor: "#000000",
        width: moderateScale(10),
        height: moderateVerticalScale(371),
        borderTopRightRadius: moderateScale(15),
        borderBottomRightRadius: moderateScale(15),
    },
});


export default MembershipCard;
