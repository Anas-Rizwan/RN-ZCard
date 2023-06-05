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
        top: moderateVerticalScale(135),
        left: moderateScale(57),
        fontFamily: 'Lato-Regular',
        fontSize: scale(42),
        color: "rgba(0,0,0,.06)",
        alignSelf: 'center',
        letterSpacing: 2,
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
        width: moderateScale(300),
        height: moderateVerticalScale(330),
        borderRadius: moderateVerticalScale(331 / 20),
    },
    card_view_style: {
        backgroundColor: 'black',
        width: moderateScale(300),
        height: moderateVerticalScale(340),
        borderRadius: moderateVerticalScale(331 / 15),
    },
    card_top_view_style: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        // alignItems: 'center',
    },
    off_10img_style: {
        marginTop: moderateVerticalScale(14),
        tintColor: 'white',
        width: moderateScale(51),
        height: moderateVerticalScale(76),
        marginLeft: moderateScale(14),
    },
    off_20img_style: {
        marginTop: moderateVerticalScale(14),
        tintColor: 'white',
        width: moderateScale(55),
        height: moderateVerticalScale(73.5),
        marginLeft: moderateScale(14),
    },
    logo_img_style: {

        marginTop: moderateVerticalScale(21),
        width: moderateScale(106),
        height: moderateVerticalScale(26),
        marginRight: moderateScale(21.5),
    },
    zimo_img_view_style: {
        alignSelf: 'center',
        marginTop: moderateVerticalScale(30.7),
    },
    zimo_img_style: {
        width: moderateScale(200),
        height: moderateVerticalScale(107),
    },
    card_img_view_style: {
        marginTop: moderateVerticalScale(9.7),
    },
    card_img_style: {
        width: moderateScale(300),
        height: moderateVerticalScale(61),
    },
    Card_Discount_Text: {
        color: "#000000",
        fontFamily: 'Lato-Regular',
        fontSize: scale(12),
        marginBottom: moderateVerticalScale(17),
        letterSpacing: 1,
    },
    Card_Price: {
        letterSpacing: 1,
        fontFamily: 'Lato-Regular',
        fontSize: scale(12),
        marginTop: moderateVerticalScale(19),
        color: "#000000",
    },
    Card_btn_Text: {
        marginTop: moderateVerticalScale(13),
        letterSpacing: 1,
        fontFamily: 'Lato-Regular',
        fontSize: scale(12),
        color: "#000000",
        marginBottom: moderateVerticalScale(35),

    },
    line: {
        position: 'absolute',
        top: '25%',
        backgroundColor: "#000000",
        width: moderateScale(8),
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
        flex: .935,
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
        letterSpacing: 1,
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
    modal_card_view_style: {
        backgroundColor: 'black',
        width: moderateScale(170),
        height: moderateVerticalScale(195),
        borderRadius: moderateVerticalScale(170 / 10),
    },
    modal_card_top_view_style: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        // alignItems: 'center',
    },
    modal_off_10img_style: {
        marginTop: moderateVerticalScale(8),
        tintColor: 'white',
        width: moderateScale(29),
        height: moderateVerticalScale(27),
        marginLeft: moderateScale(8),
    },
    modal_off_20img_style: {
        marginTop: moderateVerticalScale(8),
        tintColor: 'white',
        width: moderateScale(33),
        height: moderateVerticalScale(27),
        marginLeft: moderateScale(8),
    },
    modal_logo_img_style: {
        marginTop: moderateVerticalScale(12),
        width: moderateScale(61),
        height: moderateVerticalScale(16),
        marginRight: moderateScale(12.5),
    },
    modal_zimo_img_view_style: {
        alignSelf: 'center',
        marginTop: moderateVerticalScale(30.7),
    },
    modal_zimo_img_style: {
        width: moderateScale(117),
        height: moderateVerticalScale(61),
    },
    modal_card_img_view_style: {
        marginTop: moderateVerticalScale(9.7),
    },
    modal_card_img_style: {
        width: moderateScale(170),
        height: moderateVerticalScale(35.5),
    },
    // image_view: {
    //     marginTop: moderateVerticalScale(10),
    //     alignItems: 'center',
    // },
    // image: {
    //     width: moderateScale(189),
    //     height: moderateVerticalScale(200),
    //     borderRadius: moderateScale(189 / 12),
    // },
    modal_text_view: {
        width: moderateScale(245),
        alignSelf: 'center',
    },
    modal_paragraph_text: {
        letterSpacing: .5,
        alignItems: 'flex-start',
        textAlign: 'center',
        marginTop: moderateVerticalScale(10),
        fontFamily: 'Lato-Regular',
        fontSize: scale(6),
        textTransform: 'uppercase',
        color: '#fff'
    },
    off_view: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginTop: moderateVerticalScale(60),
    },
    modal_bottom_card_view_style: {
        backgroundColor: 'black',
        width: moderateScale(142),
        height: moderateVerticalScale(150),
        borderTopLeftRadius: moderateVerticalScale(190 / 15),
        borderTopRightRadius: moderateVerticalScale(190 / 15),
    },
    modal_bottom_card_top_view_style: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    
    },
    modal_bottom_logo_img_style: {

        marginTop: moderateVerticalScale(9),
        width: moderateScale(45),
        height: moderateVerticalScale(11),
        marginRight: moderateScale(9),
    },
    modal_bottom_zimo_img_view_style: {
        alignSelf: 'center',
        marginTop: moderateVerticalScale(30.7),
    },
    modal_bottom_zimo_img_style: {
        width: moderateScale(86),
        height: moderateVerticalScale(46),
    },
    modal_bottom_card_img_view_style: {
        marginTop: moderateVerticalScale(9.7),
    },
    modal_bottom_card_img_style: {
        width: moderateScale(142),
        height: moderateVerticalScale(29.5),
    },
    // off_card_img: {
    //     width: moderateScale(142),
    //     height: moderateVerticalScale(150),
    //     borderTopRightRadius: moderateScale(10),
    //     borderTopLeftRadius: moderateScale(10),
    // },
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
        marginTop: moderateVerticalScale(20),
    },
    detail_card_view_style: {
        backgroundColor: 'black',
        width: moderateScale(125),
        height: moderateVerticalScale(145),
        borderRadius: moderateVerticalScale(125 / 10),
    },
    detail_card_top_view_style: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        // justifyContent: 'space-between',
        // alignItems: 'center',
    },
    detail_logo_img_style: {
        marginTop: moderateVerticalScale(9),
        width: moderateScale(45),
        height: moderateVerticalScale(11),
        marginRight: moderateScale(9),
    },
    detail_zimo_img_view_style: {
        alignSelf: 'center',
        marginTop: moderateVerticalScale(30.7),
    },
    detail_zimo_img_style: {
        width: moderateScale(89),
        height: moderateVerticalScale(50),
    },
    detail_card_img_view_style: {
        marginTop: moderateVerticalScale(9.7),
    },
    detail_card_img_style: {
        width: moderateScale(125),
        height: moderateVerticalScale(26.5),
    },
    // signup_card_img: {
    //     width: moderateScale(112),
    //     height: moderateVerticalScale(120),
    //     marginTop: moderateVerticalScale(28),
    //     borderRadius: moderateVerticalScale(142 / 15),

    // },
    signup_card_img_2: {
        width: moderateScale(153),
        height: moderateVerticalScale(42),
    },
    bg_detail_img_left: {
        position: 'absolute',
        left: 20,
        width: moderateScale(160),
        height: moderateVerticalScale(160),
        bottom: moderateVerticalScale(60),
        tintColor: 'rgba(0,0,0,.15)'

    },
    modal_detail_text_view: {
        marginTop: moderateVerticalScale(20),
        width: moderateScale(224),
        alignSelf: 'center',
    },
    paragraph_text: {
        textTransform: 'uppercase',
        letterSpacing: 0.5,
        alignSelf: 'center',
        textAlign: 'center',
        marginTop: moderateVerticalScale(10),
        fontFamily: 'Lato-Regular',
        fontSize: scale(6),
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
        letterSpacing: 1,
        fontFamily: 'Lato-Regular',
        fontSize: scale(12),
        marginLeft: moderateScale(55),
        color: '#fff',
    },
    cancel_card_view_style: {
        backgroundColor: 'black',
        width: moderateScale(189),
        height: moderateVerticalScale(200),
        borderRadius: moderateVerticalScale(170 / 15),
    },
    cancel_card_top_view_style: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        // alignItems: 'center',
    },
    cancel_off_10img_style: {
        marginTop: moderateVerticalScale(8),
        tintColor: 'white',
        width: moderateScale(29),
        height: moderateVerticalScale(27),
        marginLeft: moderateScale(8),
    },
    cancel_off_20img_style: {
        marginTop: moderateVerticalScale(8),
        tintColor: 'white',
        width: moderateScale(33),
        height: moderateVerticalScale(27),
        marginLeft: moderateScale(8),
    },
    cancel_logo_img_style: {
        marginTop: moderateVerticalScale(12),
        width: moderateScale(61),
        height: moderateVerticalScale(16),
        marginRight: moderateScale(12.5),
    },
    cancel_zimo_img_view_style: {
        alignSelf: 'center',
        marginTop: moderateVerticalScale(30.7),
    },
    cancel_zimo_img_style: {
        width: moderateScale(119),
        height: moderateVerticalScale(67),
    },
    cancel_card_img_view_style: {
        marginTop: moderateVerticalScale(9.7),
    },
    cancel_card_img_style: {
        width: moderateScale(189),
        height: moderateVerticalScale(39.5),
    },
    image_view:{
        alignItems: 'center',
        marginTop: moderateVerticalScale(11),
    },
    // image: {
    //     width: moderateScale(165),
    //     height: moderateVerticalScale(180),
    //     borderRadius: moderateScale(189 / 12),
    // },
    modal_cancel_text_view: {
        width: moderateScale(230),
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
        fontSize: scale(6),
        letterSpacing: 0.5,
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
        letterSpacing: 0.5,
        color: '#fff'
    },
    cancel_btn_text: {
        letterSpacing: 0.5,
        textAlign: 'center',
        fontFamily: 'Lato-Regular',
        color: '#000'
    },
    logo_view: {
        alignItems: 'center',
        marginTop: moderateVerticalScale(84),
        marginBottom: moderateVerticalScale(29.2),
    },
    btn_view: {
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
        fontSize: scale(5.5),
        color: '#fff'
    },

});