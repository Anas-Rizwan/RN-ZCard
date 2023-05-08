//import liraries
import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters';
import styles from './styles';
import CardComponent from '../../ReuseableComponent/CardComponent';

// create a component
const MembershipModal = ({ modalitem, setModalVisible, setDetail }) => {


    return (
        <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <View style={styles.modal_header_view}>
                    <TouchableOpacity style={styles.modal_cross} onPress={() => setModalVisible(false)}>
                        <Image source={require('../../Assets/cross.png')} />
                    </TouchableOpacity>
                    <Text style={styles.header_content}>{modalitem.title}  MEMBERSHIP</Text>
                    <Text style={{
                        letterSpacing: .5,
                        fontFamily: 'Lato-Regular',
                        fontSize: scale(6),
                        color: '#fff'
                    }}>LEARN MORE</Text>
                </View>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                >
                    <View>
                        <View style={styles.image_view}>
                            <CardComponent
                                off_img={modalitem.number_img}
                                logo_img={modalitem.logo_img}
                                zimo_img={modalitem.zimo_img}
                                card_img={modalitem.card_img}
                                card_view_style={styles.modal_card_view_style}
                                card_top_view_style={styles.modal_card_top_view_style}
                                off_img_style={modalitem.id == 1 ? styles.modal_off_10img_style : styles.modal_off_20img_style}
                                logo_img_style={styles.modal_logo_img_style}
                                zimo_img_view_style={styles.modal_zimo_img_view_style}
                                zimo_img_style={styles.modal_zimo_img_style}
                                card_img_view_style={styles.modal_card_img_view_style}
                                card_img_style={styles.modal_card_img_style}
                            />
                            {/* <Image source={modalitem.modal_img} style={styles.image} /> */}
                        </View>

                        <View>
                            <Text
                                style={{
                                    textAlign: 'center',
                                    marginTop: moderateVerticalScale(19),
                                    fontFamily: 'Lato-Regular',
                                    fontSize: scale(8),
                                    color: '#000',
                                    letterSpacing: .5,
                                }}
                            >ZIMO {modalitem.title} CARD</Text>
                        </View>

                        {
                            modalitem.id == 1 ?
                                <>
                                    <View style={styles.modal_text_view}>
                                        <Text style={styles.modal_paragraph_text}>Look forward to a higher level of benefits and more premium
                                            services with a Gold Membership.
                                        </Text>
                                        <Text style={styles.modal_paragraph_text}>As a Gold Member you have access to all ZIMO benefits and
                                            promotions.As an ZIMO Member,you receive significant discounts and offers throughout your Membership. And our Gold Card Membership provides 10% off on all Ticket Entry purchases.</Text>
                                    </View>
                                    <View>
                                        <Text style={{
                                            textAlign: 'center',
                                            marginTop: moderateVerticalScale(19),
                                            fontFamily: 'Lato-Regular',
                                            fontSize: scale(8),
                                            letterSpacing: .5,
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
                                    </View></>
                                :
                                <>
                                    <View style={styles.modal_text_view}>
                                        <Text style={styles.modal_paragraph_text}>Our highest tier Platinum Card and our most popular with
                                            advantages carefully designed to make your every visit
                                            unforgettable
                                        </Text>
                                        <Text style={styles.modal_paragraph_text}>The highest level of benefits and more
                                            premium services than the Gold Card, Our Platinum Membership
                                            is for the ultimate ZIMO User.

                                        </Text>
                                        <Text style={styles.modal_paragraph_text}>As a Platinum Member you get to enjoy all the benefits of
                                            a Gold Membership as well as complimentary access for you
                                            on all ZIMO VIP listings. Your Platinum Membership will provide
                                            full access to all of ZIMO benefits and promotions. As an ZIMO
                                            Member, you receive the ultimate of discounts and offers
                                            throughout your Membership. And our Platinum Card
                                            Membership provides 20% off on all Ticket Entry purchases.</Text>
                                    </View>
                                    <View>
                                        <Text style={{
                                            textAlign: 'center',
                                            marginTop: moderateVerticalScale(19),
                                            fontFamily: 'Lato-Regular',
                                            fontSize: scale(8),
                                            letterSpacing: .5,
                                            color: '#000'
                                        }}
                                        >MEMBERSHIP BENEFITS</Text>
                                    </View>

                                    <View style={styles.modal_text_view}>
                                        <Text style={styles.modal_paragraph_text}>In addition to great offers and promotions, A ZIMO Platinum
                                            Member has unrivalled and unlimited access to all exclusive
                                            parts to ZIMO.
                                        </Text>
                                        <Text style={styles.modal_paragraph_text}>
                                            As soon as you join, you can take advantage of our Platinum
                                            Member Services with your exclusive 20% off ALL Ticket
                                            Entry purchases.
                                        </Text>
                                        <Text style={styles.modal_paragraph_text}>
                                            Receive exclusive Platinum Member-only offers. Browse your
                                            exclusive offers available only to ZIMO Platinum Members.
                                            Your Membership account page also displays all our
                                            exclusive VIP listings and current promotions.</Text>
                                        <Text style={styles.modal_paragraph_text}>You will have VIP access to ALL exclusive listings, events,
                                            and promotions. As an Member, you will receive emails
                                            on the Platinum Member-only listings and the latest and most
                                            desirable listings from around the world.
                                        </Text>
                                        <Text style={styles.modal_paragraph_text}>Your ZIMO Platinum Membership cost is only £29.90 per month.

                                        </Text>

                                    </View></>
                        }


                        <View style={styles.off_view}>
                            <View >
                                <Image source={modalitem.off_img} style={{
                                    width: modalitem.id === 1 ? moderateScale(122) : moderateScale(142),
                                    height: modalitem.id === 1 ? moderateVerticalScale(183) : moderateVerticalScale(189),
                                }} />
                            </View>
                            <View>
                                <CardComponent
                                    // off_img={modalitem.number_img}
                                    logo_img={modalitem.logo_img}
                                    zimo_img={modalitem.zimo_img}
                                    card_img={modalitem.card_img}
                                    card_view_style={styles.modal_bottom_card_view_style}
                                    card_top_view_style={styles.modal_bottom_card_top_view_style}
                                    // off_img_style={modalitem.id == 1 ? styles.modal_bottom_off_10img_style : styles.modal_bottom_off_20img_style}
                                    logo_img_style={styles.modal_bottom_logo_img_style}
                                    zimo_img_view_style={styles.modal_bottom_zimo_img_view_style}
                                    zimo_img_style={styles.modal_bottom_zimo_img_style}
                                    card_img_view_style={styles.modal_bottom_card_img_view_style}
                                    card_img_style={styles.modal_bottom_card_img_style}
                                />
                                {/* <Image source={modalitem.detail_img} style={styles.off_c_bottomard_img} /> */}
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
