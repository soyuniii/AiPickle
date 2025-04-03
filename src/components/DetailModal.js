import React from 'react';
import { Modal, View, Text, StyleSheet, TouchableOpacity,Image } from 'react-native';

const DetailModal = ({ visible, onClose }) => {
    return (

        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
            backdropColor={0.5}
        >

            <View style={styles.modalContainer}>
                <View style={styles.modalBox}>
                    <View style={styles.headerBox}>
                    <Text style={styles.modalTitle}>과목 상세 정보</Text>
                    <TouchableOpacity style={styles.button} onPress={onClose}>
                    <Image source={require('../../assets/images/x.png')} style={ {width: 30, height: 30} } resizeMode="contain"/>
                    </TouchableOpacity>
                </View>

                <View style={styles.modalContent}>
                <Text style={styles.category}>시간표</Text>
                <Text style={styles.category}>강의실</Text>
                <Text style={styles.category}>강의정보</Text>
                </View>
                    

                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalBox: {
        backgroundColor: '#fff',
        borderRadius: 10,
        width: '100%',
        height: '60%',
        alignItems: 'center',
    },
    headerBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: '#B0B0B0',
        width: '100%',
        padding: 15,
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 5,
    },
    modalContent:{
        padding: 30,
    },
    category: {
        fontSize: 16,
        marginBottom: 10,
    },
    modalText: {
        fontSize: 16,
        marginBottom: 10,
    },
});

export default DetailModal;