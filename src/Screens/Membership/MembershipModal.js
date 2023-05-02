//import liraries
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Modal, ScrollView, TouchableOpacity, Image } from 'react-native';
import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters';


// create a component
const MembershipModal = ({ modalitem, setModalVisible, setDetail }) => {
    // const {modalVisible , props?.modalitem} = props
    // console.log('props.modalitem',props.modalitem);

    return (
        <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <View style={styles.modal_header_view}>
                    <TouchableOpacity style={{ width: 20, height: 20, justifyContent: 'center', alignItems: 'center', }} onPress={() => setModalVisible(false)}>
                        <Image source={require('../../Assets/cross.png')} />
                    </TouchableOpacity>
                    <Text style={{
                        fontFamily: 'Lato-Regular',
                        fontSize: scale(12),
                        marginLeft: moderateScale(25),
                        color: '#fff'
                    }}>{modalitem.title} MEMBERSHIP</Text>
                    <Text style={{
                        fontFamily: 'Lato-Regular',
                        fontSize: scale(6),
                        color: '#000'
                    }}>LEARN MORE</Text>
                </View>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                >
                    <View>
                        <View style={styles.image_view}>
                            <Image source={modalitem.img} style={styles.image} />
                        </View>

                        <View>
                            <Text
                                style={{
                                    textAlign: 'center',
                                    marginTop: moderateVerticalScale(19),
                                    fontFamily: 'Lato-Regular',
                                    fontSize: scale(8),
                                    color: '#000'
                                }}
                            >ZIMO {modalitem.title} CARD</Text>
                        </View>

                        <View style={styles.modal_text_view}>
                            <Text
                                style={{
                                    // width: '85%',
                                    alignSelf: 'center',
                                    textAlign: 'center',
                                    marginTop: moderateVerticalScale(10),
                                    fontFamily: 'Lato-Regular',
                                    fontSize: scale(6),
                                    color: '#fff'
                                }}
                            >Look forward to a higher level of benefits and more premium
                                services with a Gold Membership.
                            </Text>
                            <Text
                                style={{
                                    width: '72%',
                                    alignSelf: 'center',
                                    textAlign: 'center',
                                    fontSize: scale(6),
                                    fontFamily: 'Lato-Regular',
                                    marginTop: moderateVerticalScale(10),
                                    color: '#fff'
                                }}
                            >As a Gold Member you have access to all ZIMO benefits and
                                promotions. As an ZIMO Member, you receive significant
                                discounts and offers throughout your Membership. And our
                                Gold Card Membership provides 10% off on all Ticket Entry
                                purchases.</Text>
                        </View>
                        <View>
                            <Text
                                style={{
                                    textAlign: 'center',
                                    marginTop: moderateVerticalScale(19),
                                    fontFamily: 'Lato-Regular',
                                    fontSize: scale(8),
                                    color: '#000'
                                }}
                            >MEMBERSHIP BENEFITS</Text>
                        </View>

                        <View style={styles.modal_text_view}>
                            <Text
                                style={{
                                    // width: '85%',
                                    alignSelf: 'center',
                                    textAlign: 'center',
                                    marginTop: moderateVerticalScale(10),
                                    fontFamily: 'Lato-Regular',
                                    fontSize: scale(7),
                                    color: '#fff'
                                }}
                            >In addition to great offers and promotions, there's plenty to
                                look forward to as an ZIMO Gold Member.
                            </Text>
                            <Text
                                style={{
                                    // width: '75%',
                                    alignSelf: 'center',
                                    textAlign: 'center',
                                    marginTop: moderateVerticalScale(10),
                                    fontFamily: 'Lato-Regular',
                                    fontSize: scale(7),
                                    color: '#fff'
                                }}
                            >As soon as you join, you can take advantage of our Gold
                                Member Services with your exclusive 10% off ALL Ticket Entry
                                purchases.

                            </Text>
                            <Text
                                style={{
                                    // width: '75%',
                                    alignSelf: 'center',
                                    textAlign: 'center',
                                    marginTop: moderateVerticalScale(10),
                                    fontFamily: 'Lato-Regular',
                                    fontSize: scale(7),
                                    color: '#fff'
                                }}
                            >As a Gold Member you have access to all ZIMO benefits and
                                promotions. As an ZIMO Member, you receive significant
                                discounts and offers throughout your Membership. And our
                                Gold Card Membership provides 10% off on all Ticket Entry
                                purchases.</Text>
                            <Text
                                style={{
                                    // width: '75%',
                                    alignSelf: 'center',
                                    textAlign: 'center',
                                    marginTop: moderateVerticalScale(10),
                                    fontFamily: 'Lato-Regular',
                                    fontSize: scale(7),
                                    color: '#fff'
                                }}
                            >Receive special Gold Member-only offers. Browse special offers
                                available only to ZIMO Gold Members. Your Membership
                                account page also displays a selection of current promotions
                                relating to your tier (Gold), or country, so you can see the
                                offers most relevant to you at a glance.
                            </Text>
                            <Text
                                style={{
                                    // width: '75%',
                                    alignSelf: 'center',
                                    textAlign: 'center',
                                    marginTop: moderateVerticalScale(10),
                                    fontFamily: 'Lato-Regular',
                                    fontSize: scale(7),
                                    color: '#fff'
                                }}
                            >You will receive VIP access to exclusive listings, events, and
                                promotions. As an Member, you will receive emails on the
                                latest and most desirable listings.

                            </Text>
                            <Text
                                style={{
                                    // width: '75%',
                                    alignSelf: 'center',
                                    textAlign: 'center',
                                    marginTop: moderateVerticalScale(10),
                                    fontFamily: 'Lato-Regular',
                                    fontSize: scale(7),
                                    color: '#fff'
                                }}
                            >Your ZIMO Gold Membership cost is only £19.90 per month.
                            </Text>
                        </View>

                        <View style={styles.off_view}>
                            <View >
                                <Image source={modalitem.off_img} style={{
                                    width: modalitem.id === 1 ? moderateScale(130) : moderateScale(144),
                                    height: moderateVerticalScale(128),
                                }} />
                            </View>
                            <View>
                                <Image source={modalitem.img} style={styles.off_card_img} />
                                <TouchableOpacity style={styles.off_card_btn} onPress={() => { return (setDetail(true), setModalVisible(false)) }}>
                                    <Text style={{ color: modalitem.id == 1 ? '#BE9F56' : 'white', fontFamily: 'Lato-Regular', fontSize: scale(14), }}>SIGN UP</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={{ alignItems: 'center', marginTop: moderateVerticalScale(211), marginBottom: moderateVerticalScale(32), }}>
                            <Image source={require('../../Assets/Zimo.png')} />
                        </View>
                    </View>
                </ScrollView>

            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,.8)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        // justifyContent: 'space-between',
        // height: moderateVerticalScale(300),
        flex: .9,
        width: moderateScale(325),
        borderRadius: moderateScale(325 / 15),
        backgroundColor: '#8F8F8F',
        borderWidth: 1,
    },
    modal_header_view: {
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        // marginTop: moderateVerticalScale(20),
        // marginBottom: moderateVerticalScale(31),
    },
    image_view: {
        marginTop: moderateVerticalScale(30),
        alignItems: 'center',
    },
    image: {
        width: moderateScale(189),
        height: moderateVerticalScale(200),
        borderRadius: moderateScale(189 / 12),
    },
    modal_text_view: {
        // backgroundColor: 'red',
        width: '70%',
        alignSelf: 'center',
    },
    off_view: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: moderateVerticalScale(60),
    },
    off_card_img: {
        width: moderateScale(142),
        height: moderateVerticalScale(150),
        borderTopRightRadius: moderateScale(10),
        borderTopLeftRadius: moderateScale(10),
    },
    off_card_btn: {
        backgroundColor: 'black',
        width: moderateScale(142),
        height: moderateVerticalScale(30),
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomRightRadius: moderateScale(10),
        borderBottomLeftRadius: moderateScale(10),
        marginTop: moderateVerticalScale(3),
    },

});

//make this component available to the app
export default MembershipModal;
