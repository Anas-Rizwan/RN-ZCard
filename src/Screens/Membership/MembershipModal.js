//import liraries
import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters';
import styles from './styles';

// create a component
const MembershipModal = ({ modalitem, setModalVisible, setDetail }) => {


    return (
        <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <View style={styles.modal_header_view}>
                    <TouchableOpacity style={styles.modal_cross} onPress={() => setModalVisible(false)}>
                        <Image source={require('../../Assets/cross.png')} />
                    </TouchableOpacity>
                    <Text style={styles.header_content}>{modalitem.title} MEMBERSHIP</Text>
                    <Text style={{
                        fontFamily: 'Lato-Regular',
                        fontSize: scale(6),
                        color: '#404040'
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
                            <Text style={styles.modal_paragraph_text}>Look forward to a higher level of benefits and more premium
                                services with a Gold Membership.
                            </Text>
                            <Text style={styles.modal_paragraph_text}>As a Gold Member you have access to all ZIMO benefits and
                                promotions. As an ZIMO Member, you receive significant
                                discounts and offers throughout your Membership. And our
                                Gold Card Membership provides 10% off on all Ticket Entry
                                purchases.</Text>
                        </View>
                        <View>
                            <Text style={{
                                textAlign: 'center',
                                marginTop: moderateVerticalScale(19),
                                fontFamily: 'Lato-Regular',
                                fontSize: scale(8),
                                color: '#000'
                            }}
                            >MEMBERSHIP BENEFITS</Text>
                        </View>

                        <View style={styles.modal_text_view}>
                            <Text style={styles.modal_paragraph_text}>In addition to great offers and promotions, there's plenty to
                                look forward to as an ZIMO Gold Member.
                            </Text>
                            <Text style={styles.modal_paragraph_text}>As soon as you join, you can take advantage of our Gold
                                Member Services with your exclusive 10% off ALL Ticket Entry
                                purchases.

                            </Text>
                            <Text style={styles.modal_paragraph_text}>As a Gold Member you have access to all ZIMO benefits and
                                promotions. As an ZIMO Member, you receive significant
                                discounts and offers throughout your Membership. And our
                                Gold Card Membership provides 10% off on all Ticket Entry
                                purchases.</Text>
                            <Text style={styles.modal_paragraph_text}>Receive special Gold Member-only offers. Browse special offers
                                available only to ZIMO Gold Members. Your Membership
                                account page also displays a selection of current promotions
                                relating to your tier (Gold), or country, so you can see the
                                offers most relevant to you at a glance.
                            </Text>
                            <Text style={styles.modal_paragraph_text}>You will receive VIP access to exclusive listings, events, and
                                promotions. As an Member, you will receive emails on the
                                latest and most desirable listings.

                            </Text>
                            <Text
                                style={styles.modal_paragraph_text}
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

                        <View style={styles.modal_logo}>
                            <Image source={require('../../Assets/Zimo.png')} />
                        </View>
                    </View>
                </ScrollView>

            </View>
        </View>
    );
};

// define your styles


//make this component available to the app
export default MembershipModal;
