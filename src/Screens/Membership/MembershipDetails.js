//import liraries
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Modal } from 'react-native';
import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters';
import MembershipCancel from './MembershipCancel';
import styles from './styles';
import CardComponent from '../../ReuseableComponent/CardComponent';


// create a component
const MembershipDetails = ({ modalitem, changeState }) => {
    console.log('changeState', changeState);
    const [cancelModal, setcancelModal] = useState(false)
    return (
        <View style={styles.signup_container}>
            <View style={styles.Header_view}>
                <TouchableOpacity onPress={() => { changeState(false) }}>
                    <Image source={require('../../Assets/arrow.png')} tintColor="black" style={{ marginLeft: moderateScale(25), }} />
                </TouchableOpacity>
                <Image source={require('../../Assets/logo_zimo.png')} tintColor="black" />
                <Image source={require('../../Assets/bag.png')} style={{ marginRight: moderateScale(25), }} />
            </View>

            <Image source={modalitem.id === 1 ? require('../../Assets/ten.png') : require('../../Assets/twenty.png')} style={styles.bg_detail_img_left} />
            <View style={styles.line}></View>

            <ScrollView showsVerticalScrollIndicator={false} >
                <View style={styles.text_view}>
                    <Text style={{
                        letterSpacing: 1,
                        fontFamily: 'Lato-Regular',
                        fontSize: scale(18),
                        color: modalitem.id === 1 ? "#BE9F56" : '#DEDDDB',
                    }}>{modalitem.title} MEMBERSHIP</Text>
                </View>
                <View style={styles.signup_card_view}>
                    <View>
                    <CardComponent
                                    // off_img={modalitem.number_img}
                                    logo_img={modalitem.logo_img}
                                    zimo_img={modalitem.zimo_img}
                                    card_img={modalitem.card_img}
                                    card_view_style={styles.detail_card_view_style}
                                    card_top_view_style={styles.detail_card_top_view_style}
                                    // off_img_style={modalitem.id == 1 ? styles.detail_off_10img_style : styles.detail_off_20img_style}
                                    logo_img_style={styles.detail_logo_img_style}
                                    zimo_img_view_style={styles.detail_zimo_img_view_style}
                                    zimo_img_style={styles.detail_zimo_img_style}
                                    card_img_view_style={styles.detail_card_img_view_style}
                                    card_img_style={styles.detail_card_img_style}
                                />
                        {/* <Image source={modalitem.detail_img} style={styles.signup_card_img} /> */}
                    </View>
                    <View>
                        <Text style={{
                            letterSpacing: 2,
                            fontFamily: 'Lato-Regular',
                            fontSize: scale(32),
                            color: modalitem.id === 1 ? "rgba(190,159,86,.3)" : '#DEDDDB',
                        }}>{modalitem.title}</Text>
                        <Image style={[styles.signup_card_img_2,
                        { tintColor: modalitem.id === 1 ? "#BE9F56" : '#C1BFBC' }]} source={require('../../Assets/card.png')} />
                        <Text style={{
                            letterSpacing: 2,
                            alignSelf: 'flex-end',
                            fontFamily: 'Lato-Regular',
                            fontSize: scale(16),
                            color: modalitem.id === 1 ? "rgba(190,159,86,.3)" : '#DEDDDB',
                            marginTop: moderateVerticalScale(6.5),
                            marginRight: moderateScale(-7),
                        }}>{modalitem.title} MEMBER</Text>
                    </View>

                </View>

                {
                    modalitem.id === 1 ?
                        <View style={styles.modal_detail_text_view}>
                            <View>
                                <Text
                                    style={styles.paragraph_text}
                                >Look forward to a higher level of benefits and more premium
                                    services with your Gold Membership.
                                </Text>
                                <Text
                                    style={styles.paragraph_text}>You have access to all ZIMO benefits and promotions. You will
                                    receive significant discounts and offers throughout your
                                    Membership.

                                </Text>
                                <Text
                                    style={styles.paragraph_text}
                                >In addition to great offers and promotions, there's plenty to
                                    look forward to as an ZIMO Gold Member.
                                </Text>
                                <Text
                                    style={styles.paragraph_text}
                                >
                                    You can take advantage of your Gold Member Services with
                                    your exclusive 10% off ALL Ticket Entry purchases.

                                </Text>
                            </View>
                            <View style={{ marginTop: moderateVerticalScale(25), }}>
                                <Text
                                    style={styles.paragraph_text}
                                >As a Gold Member you receive an exclusive 10% off ALL
                                    Ticket Entry purchases.
                                </Text>
                                <Text
                                    style={styles.paragraph_text}
                                >You can use your exclusive 10% off for all categories worldwide.
                                    There are no limitations. Your shopping bag will automatically
                                    apply your exclusive Gold Member discount prior to checkout
                                </Text>
                            </View>
                            <View style={{ marginTop: moderateVerticalScale(25), }}>
                                <Text
                                    style={styles.paragraph_text}
                                >You will receive special Gold Member-only offers. Browse
                                    special offers available only to you (Gold Member).

                                </Text>
                                <Text
                                    style={styles.paragraph_text}
                                >On this page we will display a selection of current promotions
                                    relating to your tier (Gold), or country, so you can see the
                                    offers most relevant to you at a glance.

                                </Text>
                                <Text
                                    style={styles.paragraph_text}
                                >You will receive VIP access to exclusive listings, events, and
                                    promotions. As a Gold Member, you will receive emails on the
                                    latest and most desirable listings.
                                </Text>
                            </View>
                        </View>
                        :
                        <View style={styles.modal_detail_text_view}>
                            <View>
                                <Text
                                    style={styles.paragraph_text}
                                >Our highest tier Platinum Card and our most popular with
                                    advantages carefully designed to make your every visit
                                    unforgettable.
                                </Text>
                                <Text
                                    style={styles.paragraph_text}
                                > You have access to all ZIMO benefits and promotions. You will
                                    receive significant discounts and offers throughout your
                                    Membership.

                                </Text>
                                <Text
                                    style={styles.paragraph_text}
                                >The Platinum Membership is for the ultimate ZIMO User.
                                </Text>
                                <Text
                                    style={styles.paragraph_text}
                                >As a Platinum Member you get to enjoy all the benefits of
                                    a Gold Membership as well as complimentary access for you
                                    on all ZIMO VIP listings. Your Platinum Membership will provide
                                    full access to all of ZIMO benefits and promotions.
                                </Text>
                                <Text
                                    style={styles.paragraph_text}
                                >You can take advantage of your Platinum Member Services with
                                    your exclusive 20% off ALL Ticket Entry purchases.
                                </Text>
                            </View>
                            <View style={{ marginTop: moderateVerticalScale(25), }}>
                                <Text
                                    style={styles.paragraph_text}
                                >As a Platinum Member you receive an exclusive 20% off ALL
                                    Ticket Entry purchases.


                                </Text>
                                <Text
                                    style={styles.paragraph_text}
                                >You can use your exclusive 20% off for all categories worldwide.
                                    There are no limitations. Your shopping bag will automatically
                                    apply your exclusive Gold Member discount prior to checkout.
                                </Text>
                            </View>
                            <View style={{ marginTop: moderateVerticalScale(25), }}>
                                <Text
                                    style={styles.paragraph_text}
                                >You will receive special Platinum Member-only offers. Browse
                                    special offers available only to you (Platinum Member).
                                </Text>
                                <Text
                                    style={styles.paragraph_text}
                                >On this page we will display a selection of current promotions
                                    relating to your tier (Platinum), or country, so you can see the
                                    offers most relevant to you at a glance.
                                </Text>
                                <Text
                                    style={styles.paragraph_text}
                                >You will receive VIP access to exclusive listings, events, and
                                    promotions. As a Platinum Member, you will receive emails on
                                    the latest and most desirable listings.
                                </Text>
                                <Text
                                    style={styles.paragraph_text}
                                >In addition to great offers and promotions, you have  unrivalled
                                    and unlimited access to all exclusive parts to ZIMO.
                                </Text>
                            </View>
                        </View>
                }
                <View style={{ width: moderateScale(290), backgroundColor: 'grey', height: 1, alignSelf: 'center', marginTop: moderateVerticalScale(25), marginBottom: moderateVerticalScale(19), }}></View>

                <View >
                    <Text style={styles.promtion_text}>CURRENT PROMOTIONS AND OFFERS</Text>
                </View>
                <View style={styles.cancel_btn}>
                    <TouchableOpacity onPress={() => { setcancelModal(true) }}>
                        <Text style={{
                            alignSelf: 'center',
                            fontSize: scale(8),
                            fontFamily: 'Lato-Regular',
                            color: 'black',
                        }}>CANCEL MEMBERSHIP</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            <View>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={cancelModal}
                    onRequestClose={() => {
                        setcancelModal(!cancelModal);
                    }}
                >
                    <MembershipCancel modalitem={modalitem} setcancelModal={setcancelModal} />
                </Modal>

            </View>
        </View>
    );
};

// define your styles


//make this component available to the app
export default MembershipDetails;
