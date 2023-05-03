import React, { useState } from 'react';
import { View, StyleSheet,  Modal, } from 'react-native';
import MembershipModal from './MembershipModal';
import MembershipDetails from './MembershipDetails';
import MembershipCard from './MembershipCards';



const Membership = () => {
    const [modalVisible, setModalVisible] = useState(false)
    const [modalitem, setModalitem] = useState([])
    const [Detail, setDetail] = useState(false)


    const showModal = (item) => {
        setModalVisible(true)
        setModalitem(item)
    }

    // console.log('item', modalitem);
    return (
        <>

            {
                Detail ?
                    <MembershipDetails modalitem={modalitem} changeState={setDetail} />
                    :
                    <MembershipCard showModal={showModal} />
            }
            <View>
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





export default Membership;
