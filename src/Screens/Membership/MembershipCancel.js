//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters';
import styles from './styles';

// create a component
const MembershipCancel = ({ modalitem, setcancelModal }) => {
    return (
        <View style={styles.centeredView}>
            <View style={styles.modal_cancel_View}>
                <View style={styles.modal_cancel_header_view}>
                    <TouchableOpacity
                        onPress={() => { setcancelModal(false) }}
                        style={styles.cross}
                    >
                        <Image source={require('../../Assets/cross.png')} />
                    </TouchableOpacity>
                    <Text style={styles.Top_text}>{modalitem.title} MEMBERSHIP</Text>
                    
                </View>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                >


                    <View>
                        <Text
                            style={styles.header_text} >CANCEL MEMBERSHIP</Text>
                    </View>
                    <View>
                        <View style={styles.image_view}>
                            <Image source={modalitem.img} style={styles.image} />
                        </View>
                        <View style={styles.content_text_view}>
                            <View style={styles.modal_text_view}>
                                <Text style={styles.content_text}
                                >FOLLOW THE STEPS TO CANCEL YOUR GOLD MEMBERSHIP
                                </Text>

                            </View>


                            <View style={styles.modal_text_view}>
                                <Text
                                    style={styles.content_text}
                                >YOU WILL NO LONGER BE ABLE TO RECEIVE YOUR EXCLUSIVE 10% DISCOUNT ON ALL YOUR TICKET ENTRY PURCHASES.</Text>
                                <Text
                                    style={styles.content_text}
                                >YOU WILL MISS OUT ON ALL THE PROMOTIONS AND BENEFITS THAT COME
                                    WITH YOUR {modalitem.title} MEMBERSHIP.
                                </Text>
                            </View>
                            <View style={styles.modal_text_view}>
                                <Text
                                    style={styles.content_text}
                                >JUST AS A QUICK REMINDER, CANCELLING YOUR {modalitem.title} MEMBERSHIP MEANS
                                    YOU'LL LOSE ACCESS TO:
                                </Text>
                            </View>

                            <View style={styles.losing_perks_View} >
                                <View>
                                    <Text style={styles.losing_perks_text} >EXCLUSIVE SPECIAL OFFERS </Text>
                                    <Text style={styles.losing_perks_text} >EXCLUSIVE PROMOTIONS </Text>
                                    <Text style={styles.losing_perks_text} >EXCLUSIVE 10% DISCOUNT </Text>
                                    <Text style={styles.losing_perks_text}  >EXCLUSIVE GOLD MEMBER LISTINGS  </Text>
                                    <Text style={styles.losing_perks_text} >EXCLUSIVE EVENTS </Text>
                                </View>
                                <View style={{ marginLeft: moderateScale(15), }}>
                                    <Text style={styles.losing_perks_text} >ANNUAL LISTING DRAWS</Text>
                                    <Text style={styles.losing_perks_text}>MEMBERS ONLY AREA(S)</Text>
                                    <Text style={styles.losing_perks_text} >VIP LISTINGS</Text>
                                    <Text style={styles.losing_perks_text} >MEMBERS LOUNGE</Text>
                                    <Text style={styles.losing_perks_text} >EMAIL ALERTS</Text>
                                </View>



                            </View>

                        </View>

                        <View style={styles.Cancel_line}></View>

                        <Text style={styles.content_text}>ARE YOU SURE YOU WANT TO CANCEL YOUR GOLD MEMBERSHIP?</Text>

                        <View style={styles.off_view}>
                            <TouchableOpacity>
                                <Text style={styles.keep_btn_text}>KEEP</Text>
                                <Text style={[styles.keep_btn_text, { fontSize: scale(8), }]}>MEMBERSHIP</Text>
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <Text style={styles.cancel_btn_text}>CANCEL</Text>
                                <Text style={[styles.cancel_btn_text, { fontSize: scale(8), }]}>MEMBERSHIP</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.logo_view}>
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
export default MembershipCancel;
