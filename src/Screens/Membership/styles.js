import { StyleSheet } from 'react-native';
import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters';

export default styles = StyleSheet.create({
    // MemberShip Card Style
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
        width: moderateScale(311),
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
        backgroundColor: "#000000",
        width: moderateScale(10),
        height: moderateVerticalScale(371),
        borderTopRightRadius: moderateScale(15),
        borderBottomRightRadius: moderateScale(15),
    },

    // Membership Modal Style
    centeredView: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,.8)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        flex: .9,
        width: moderateScale(325),
        borderRadius: moderateScale(325 / 15),
        backgroundColor: '#8F8F8F',
        borderWidth: 1,
    },
    modal_cross: {
        width: 20,
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    header_content: {
        fontFamily: 'Lato-Regular',
        fontSize: scale(12),
        marginLeft: moderateScale(25),
        color: '#fff'
    },
    modal_header_view: {
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    image_view: {
        marginTop: moderateVerticalScale(10),
        alignItems: 'center',
    },
    image: {
        width: moderateScale(189),
        height: moderateVerticalScale(200),
        borderRadius: moderateScale(189 / 12),
    },
    modal_text_view: {
        width: '70%',
        alignSelf: 'center',
    },
    modal_paragraph_text: {
        letterSpacing: 0.5,
        alignSelf: 'center',
        textAlign: 'center',
        marginTop: moderateVerticalScale(10),
        fontFamily: 'Lato-Regular',
        fontSize: scale(7),
        color: '#fff'
    },
    off_view: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
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
    modal_logo: {
        alignItems: 'center',
        marginTop: moderateVerticalScale(211),
        marginBottom: moderateVerticalScale(32),
    },
    
    // Membership Detail Style
        signup_container: {
            flex: 1,
            backgroundColor: 'white',
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
        signup_card_view: {
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
        },
        signup_card_img: {
            width: moderateScale(142),
            height: moderateVerticalScale(150),
            marginTop: moderateVerticalScale(28),
            borderRadius: moderateVerticalScale(142 / 15),
    
        },
        signup_card_img_2: {
            width: moderateScale(143),
            height: moderateVerticalScale(42),
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
        modal_text_view: {
            marginTop: moderateVerticalScale(20),
            width: '60%',
            alignSelf: 'center',
        },
        paragraph_text: {
            letterSpacing: 0.5,
            alignSelf: 'center',
            textAlign: 'center',
            marginTop: moderateVerticalScale(10),
            fontFamily: 'Lato-Regular',
            fontSize: scale(7),
            color: '#000'
        },
        promtion_text: {
            alignSelf: 'center',
            letterSpacing: 0.5,
            fontSize: scale(8),
            fontFamily: 'Lato-Regular',
            color: 'black',
        },
        cancel_btn: {
            alignSelf: 'center',
            width: moderateScale(98),
            marginTop: moderateVerticalScale(395),
            marginBottom: moderateVerticalScale(43),
    
        },
    

    // Membership Cancel Style
    centeredView: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,.8)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modal_cancel_View: {
        flex: .9,
        width: moderateScale(325),
        borderRadius: moderateScale(325 / 15),
        backgroundColor: '#8F8F8F',
        borderWidth: 1,
    },
    modal_cancel_header_view: {
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
    },
    cross: {
        width: 20,
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: moderateScale(20),
    },
    Top_text: {
        fontFamily: 'Lato-Regular',
        fontSize: scale(12),
        marginLeft: moderateScale(60),
        color: '#fff',
    },
    image_view: {
        marginTop: moderateVerticalScale(11),
        alignItems: 'center',
    },
    image: {
        width: moderateScale(189),
        height: moderateVerticalScale(200),
        borderRadius: moderateScale(189 / 12),
    },
    modal_text_view: {
        width: '75%',
        alignSelf: 'center',
    },
    header_text: {
        textAlign: 'center',
        marginTop: moderateVerticalScale(9.2),
        fontFamily: 'Lato-Regular',
        fontSize: scale(8),
        color: '#fff'
    },
    content_text_view: {
        height: moderateVerticalScale(280),
        justifyContent: 'space-evenly',
    },
    content_text: {
        textAlign: 'center',
        marginTop: moderateVerticalScale(10),
        fontFamily: 'Lato-Regular',
        fontSize: scale(5),
        letterSpacing: 1,
        color: '#fff',
    },
    Cancel_line: {
        width: moderateScale(290),
        height: 1,
        backgroundColor: 'white',
        alignSelf: 'center',
        marginTop: moderateVerticalScale(25),
        marginBottom: moderateVerticalScale(19),
    },
    keep_btn_text: {
        textAlign: 'center',
        fontFamily: 'Lato-Regular',
        color: '#fff'
    },
    cancel_btn_text: {
        textAlign: 'center',
        fontFamily: 'Lato-Regular',
        color: '#000'
    },
    logo_view: {
        alignItems: 'center',
        marginTop: moderateVerticalScale(84),
        marginBottom: moderateVerticalScale(29.2),
    },
    off_view: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: moderateVerticalScale(45),
    },
    off_card_img: {
        width: moderateScale(142),
        height: moderateVerticalScale(150),
        borderTopRightRadius: moderateScale(10),
        borderTopLeftRadius: moderateScale(10),
    },
    losing_perks_View: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    losing_perks_text: {
        letterSpacing: 0.5,
        marginTop: moderateVerticalScale(10),
        fontFamily: 'Lato-Regular',
        fontSize: scale(5),
        color: '#fff'
    },

});