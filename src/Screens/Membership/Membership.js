import React, { useEffect,useState } from 'react';
import { View, StyleSheet, Modal, } from 'react-native';
import MembershipModal from './MembershipModal';
import MembershipDetails from './MembershipDetails';
import MembershipCard from './MembershipCards';
import Orientation from 'react-native-orientation-locker';



const Membership = () => {
    useEffect(() => {
        Orientation.lockToPortrait(); // Locks the orientation to portrait when the component is mounted

        return () => {
            Orientation.unlockAllOrientations(); // Unlocks all orientations when the component is unmounted
        };
    }, []);
    
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
