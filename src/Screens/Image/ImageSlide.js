import React, { useState } from 'react'
import { Dimensions, FlatList, Text, TouchableOpacity, View, Image, ScrollView, ImageBackground } from 'react-native'
import ImageData from './ImageData'
import ImageItem from './ImageItem'
import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters';
// import style from './style';
import styles from './style'
import { FlatListSlider } from 'react-native-flatlist-slider';
// import SwiperFlatList from 'react-native-swiper-flatlist';
import Swiper from 'react-native-swiper'

// style

const { height, width } = Dimensions.get('window');
const ImageSlide = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleIndexChanged = (index) => {
        setActiveIndex(index);
    }
    return (
        <View style={styles.container}>
            <View style={styles.Header_view}>
                <Image source={require('../../Assets/arrow.png')} tintColor="black" style={{ marginLeft: moderateScale(25), width: moderateScale(14), height: moderateVerticalScale(10), }} />
                <Image source={require('../../Assets/logo_zimo.png')} tintColor="black" style={{ width: moderateScale(85), height: moderateVerticalScale(22), }} />
                <Image source={require('../../Assets/bag.png')} style={{ marginRight: moderateScale(25), width: moderateScale(16), height: moderateVerticalScale(20), }} />
            </View>
            <View>
                <Text style={{
                    fontFamily: 'Lato-Regular',
                    fontSize: scale(18),
                    marginTop: moderateVerticalScale(9),
                    marginBottom: moderateVerticalScale(24),
                    marginLeft: moderateScale(25),
                    color: '#BE9F56',
                }}>JUST FOR ME</Text>
            </View>
            <Image source={require('../../Assets/img_right.png')} style={styles.bg_img_right} />
            {/* <Text style={styles.bg_text}>MEMBERSHIP</Text> */}
            <Image source={require('../../Assets/img_left.png')} style={styles.bg_img_left} />
            {/* <ScrollView>
                {
                    ImageData.map((val, i) => {
                        // console.log(currentIndex);
                        return (
                            <>
                                <View
                                    key={val.id}
                                    style={{
                                        marginVertical: 20,
                                    }}>
                                    <View >
                                        <FlatListSlider
                                            data={val.newData}
                                            timer={2000}
                                            // autoscroll={false}
                                            loop={false}
                                            component={<ImageItem />}
                                            indicatorContainerStyle={{ position: 'absolute', bottom: 30, right: 30, marginBottom: moderateVerticalScale(10), }}
                                            indicatorActiveColor={'#BE9F56'}
                                            indicatorInActiveColor={'gray'}
                                            indicatorActiveWidth={30}
                                            animation
                                            indicatorStyle={{
                                                width: 28,
                                                height: 2,
                                                // marginLeft: moderateScale(30),
                                            }}
                                        />

                                    </View>
                                    <TouchableOpacity activeOpacity={.85} onPress={() => alert(i)}>
                                        <View style={styles.bottom_btn_view}>
                                            <View style={styles.btn_view}>
                                                <Text style={styles.btn_text}>£25.00 GBP</Text>
                                                <Text style={styles.btn_text}>BUY ENTRY NOW</Text>
                                            </View>
                                            <Text style={styles.btn_end_text}>#ZM7861234567</Text>

                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </>
                        )
                    })
                }
            </ScrollView> */}
            {/* <ScrollView>
                {ImageData.map((val, i) => {
                    return (
                        <View key={i}>
                            <FlatListSlider
                                data={val.newData}
                                timer={2000}
                                loop={false}
                                component={<ImageItem />}
                                indicatorContainerStyle={{
                                    position: 'absolute',
                                    bottom: 30,
                                    right: 30,
                                    marginBottom: moderateVerticalScale(10),
                                }}
                                indicatorActiveColor={'#BE9F56'}
                                indicatorInActiveColor={'gray'}
                                indicatorActiveWidth={30}
                                animation
                                indicatorStyle={{
                                    width: 28,
                                    height: 2,
                                }}
                            />
                            <TouchableOpacity activeOpacity={.85} onPress={() => alert(i)}>
                                <View style={styles.bottom_btn_view}>
                                    <View style={styles.btn_view}>
                                        <Text style={styles.btn_text}>£25.00 GBP</Text>
                                        <Text style={styles.btn_text}>BUY ENTRY NOW</Text>
                                    </View>
                                    <Text style={styles.btn_end_text}>#ZM7861234567</Text>

                                </View>
                            </TouchableOpacity>
                        </View>
                    );
                })}
            </ScrollView> */}
            {/* <ScrollView>
                {ImageData.map((val, i) => {
                    return (
                        <View key={val.id}>
                            <View style={styles.cardContainer}>
                                <Text style={styles.cardTitle}>{val.title}</Text>
                                <Text style={styles.cardDescription}>{val.description}</Text>
                            </View>

                            <View style={styles.imageSliderContainer}>
                                <FlatListSlider
                                    data={val.newData}
                                    timer={2000}
                                    loop={false}
                                    component={<ImageItem />}
                                    indicatorContainerStyle={styles.indicatorContainer}
                                    indicatorActiveColor={'#BE9F56'}
                                    indicatorInActiveColor={'gray'}
                                    indicatorActiveWidth={30}
                                    indicatorInActiveWidth={30}
                                    currentIndex={currentIndex}
                                    onPress={handleSwipe}
                                />
                            </View>

                            <TouchableOpacity activeOpacity={0.85} onPress={() => alert(i)}>
                                <View style={styles.buttonContainer}>
                                    <Text style={styles.buttonText}>BUY NOW</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    );
                })}
            </ScrollView> */}
            <ScrollView
                showsVerticalScrollIndicator={false}
                nestedScrollEnabled={true}
                contentContainerStyle={{ flexGrow: 1 }}
                style={styles.ScrollView}
            >
                {ImageData.map((Justforyouitem, index) => {
                    // const isIdIncluded = Favourites.includes(Justforyouitem?.id);
                    return (
                        <TouchableOpacity
                            key={Justforyouitem.id}
                            style={{
                                alignSelf: 'center',
                                width: '98%',
                                marginVertical: '2%',
                                backgroundColor: 'green'
                            }}
                        >
                            <View style={styles.swipperview2}>
                                <Swiper
                                    autoplay={true}
                                    showsPagination={true}
                                    loop={false}
                                    autoplayTimeout={2}
                                    showsButtons={false}
                                    onIndexChanged={handleIndexChanged}
                                    index={activeIndex}
                                    activeDotStyle={styles.MobileEndingSoonactiveDot}
                                    dotStyle={styles.MobileEndingSoonDot}
                                >
                                    {Justforyouitem.newData.map((image, imgIndex) => (
                                        <ImageItem item={image} />
                                    ))}
                                </Swiper>
                            </View>
                        </TouchableOpacity>
                    );
                })}
                <View style={{ marginBottom: '15%' }}></View>
            </ScrollView>
            {/* <ScrollView>
                {
                    ImageData.map((value, index) => {
                        return (
                            value.newData.map((item, index) => {
                                return (
                                    <View>
                                        <Swiper style={styles.wrapper} showsButtons={true}>
                                            <ImageItem item={item} />
                                           
                                        </Swiper>
                                        <TouchableOpacity activeOpacity={.85} onPress={() => alert(index)} >
                                            <View style={styles.bottom_btn_view}>
                                                <View style={styles.btn_view}>
                                                    <Text style={styles.btn_text}>£25.00 GBP</Text>
                                                    <Text style={styles.btn_text}>BUY ENTRY NOW</Text>
                                                </View>
                                                <Text style={styles.btn_end_text}>#ZM7861234567</Text>

                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                )
                            })
                        )
                    })
                }
            </ScrollView> */}
            {/* <FlatListSlider
                data={ImageData}
                timer={5000}
                autoscroll={false}
                loop={false}
                component={<ImageItem />}
                indicatorContainerStyle={{ position: 'absolute', bottom: 30, right: 30, marginBottom: moderateVerticalScale(10), }}
                indicatorActiveColor={'#BE9F56'}
                indicatorInActiveColor={'gray'}
                indicatorActiveWidth={30}
                animation
                indicatorStyle={{
                    width: 28,
                    height: 2,
                    // marginLeft: moderateScale(30),
                }}
            /> */}

            {/* <FlatListSlider
                    data={ImageData}
                    width={275}
                    // timer={5000}
                    autoscroll={false}
                    loop={false}
                    timer={0}
                    component={<ImageItem />}
                    // onPress={item => alert(JSON.stringify(item))}
                    indicatorActiveWidth={40}
                    contentContainerStyle={{ paddingHorizontal: 16 }}
                    // showPagination
                /> */}
            {/* <SwiperFlatList
                    // autoplay
                    // autoplayDelay={2}
                    // autoplayLoop
                    // index={2}
                    data={ImageData}
                    renderItem={({ item }) => <ImageItem item={item} currentIndex={currentIndex} />}
                // renderItem={({ item }) => (
                //     <View style={[styles.child, { backgroundColor: item }]}>
                //         <Text style={styles.text}>{item}</Text>
                //     </View>
                // )}
                /> */}
            {/* <FlatList
                    data={ImageData}
                    renderItem={({ item }) => <ImageItem item={item} currentIndex={currentIndex} />}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                    onScroll={e => {
                        const x = e.nativeEvent.contentOffset.x;
                        console.log((x / width).toFixed(0));
                        setCurrentIndex((x / width).toFixed(0));
                    }}
                /> */}

            {/* <TouchableOpacity activeOpacity={.85} onPress={() => alert(index)} >
                <View style={styles.bottom_btn_view}>
                    <View style={styles.btn_view}>
                        <Text style={styles.btn_text}>£25.00 GBP</Text>
                        <Text style={styles.btn_text}>BUY ENTRY NOW</Text>
                    </View>
                    <Text style={styles.btn_end_text}>#ZM7861234567</Text>

                </View>
            </TouchableOpacity> */}
            {/* <View >
                <FlatList
                    data={ImageData}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item, index }) => {
                        console.log('currentIndex', currentIndex);
                        return (
                            <> */}
            {/* <View style={{
                                    // marginVertical: moderateVerticalScale(70),
                                    marginTop: moderateVerticalScale(31),
                                    // marginBottom: moderateVerticalScale(70),
                                    // backgroundColor: 'green',
                                }}> */}

            {/* <View > */}
            {/* <FlatListSlider
                                            data={item.newData}
                                            timer={2000}
                                            loop={false}
                                            component={<ImageItem />}
                                            indicatorContainerStyle={{ position: 'absolute', bottom: 30 }}
                                            indicatorActiveColor={'#BE9F56'}
                                            indicatorInActiveColor={'gray'}
                                            indicatorActiveWidth={30}
                                            indicatorInActiveWidth={30}
                                            animation
                                        // onPress={item => alert(JSON.stringify(item))}
                                        // indicatorActiveWidth={40}
                                        // contentContainerStyle={{ paddingHorizontal: 16 }}
                                        // showPagination
                                        /> */}
            {/* <FlatList

                                            data={item.newData}
                                            renderItem={({ item }) => <ImageItem item={item} currentIndex={currentIndex} />}
                                            horizontal
                                            showsHorizontalScrollIndicator={false}
                                            pagingEnabled
                                            onScroll={e => {
                                                const x = e.nativeEvent.contentOffset.x;
                                                console.log((x / width).toFixed(0));
                                                setCurrentIndex((x / width).toFixed(0));
                                            }}
                                        /> */}
            {/* </View> */}
            {/* <TouchableOpacity activeOpacity={.85} onPress={() => alert(index)} >
                                        <View style={styles.bottom_btn_view}>
                                            <View style={styles.btn_view}>
                                                <Text style={styles.btn_text}>£25.00 GBP</Text>
                                                <Text style={styles.btn_text}>BUY ENTRY NOW</Text>
                                            </View>
                                            <Text style={styles.btn_end_text}>#ZM7861234567</Text>

                                        </View>
                                    </TouchableOpacity> */}
            {/* </View> */}
            {/* 
                            </>
                        )
                    }}
                />
            </View> */}

            {/* <ScrollView>
                <View style={{
                    marginTop: moderateVerticalScale(37),
                    // marginBottom: moderateVerticalScale(54),
                    // marginLeft: moderateScale(25),
                    // color:'#BE9F56',
                }}>
                    <FlatList
                        data={ImageData}
                        renderItem={({ item }) => <ImageItem item={item} currentIndex={currentIndex} />}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        pagingEnabled
                        onScroll={e => {
                            const x = e.nativeEvent.contentOffset.x;
                            console.log((x / width).toFixed(0));
                            setCurrentIndex((x / width).toFixed(0));
                        }}
                    />
                </View>
                <TouchableOpacity activeOpacity={.85}  onPress={()=>{alert(currentIndex)}}>
                    <View style={styles.bottom_btn_view}>
                        <View style={styles.btn_view}>
                            <Text style={styles.btn_text}>£25.00 GBP</Text>
                            <Text style={styles.btn_text}>BUY ENTRY NOW</Text>
                        </View>
                        <Text style={styles.btn_end_text}>#ZM7861234567</Text>

                    </View>
                </TouchableOpacity>
                <View style={{
                    marginTop: moderateVerticalScale(37),
                    // marginBottom: moderateVerticalScale(54),
                    // marginLeft: moderateScale(25),
                    // color:'#BE9F56',
                }}>
                    <FlatList
                        data={ImageData}
                        renderItem={({ item }) => <ImageItem item={item} currentIndex={currentIndex} />}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        pagingEnabled
                        onScroll={e => {
                            const x = e.nativeEvent.contentOffset.x;
                            console.log((x / width).toFixed(0));
                            setCurrentIndex((x / width).toFixed(0));
                        }}
                    />
                </View>
                <TouchableOpacity activeOpacity={.85} onPress={()=>{alert(currentIndex)}}>
                    <View style={styles.bottom_btn_view}>
                        <View style={styles.btn_view}>
                            <Text style={styles.btn_text}>£25.00 GBP</Text>
                            <Text style={styles.btn_text}>BUY ENTRY NOW</Text>
                        </View>
                        <Text style={styles.btn_end_text}>#ZM7861234567</Text>

                    </View>
                </TouchableOpacity>
            </ScrollView > */}

            <View style={styles.line}></View>
        </View >
    )
}

export default ImageSlide

