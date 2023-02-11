import {
    TouchableOpacity,
    SafeAreaView,
    Text,
    View,
    ScrollView,
    TextInput,
    Image,
    Modal,
    Pressable
} from 'react-native'
import { useState, useEffect, useMemo, useRef, useCallback } from 'react'
import images from '@assets/images'
import { BottomSheetModal } from '@gorhom/bottom-sheet'

import styles from './styles'

const devices = ["iPhone", "iPad", "AirPod"]

const Devices = ({ navigation }) => {

    const [modalVisible, setModalVisible] = useState(false)
    const bottomSheetModalRef = useRef(null)
    const snapPoints = useMemo(() => ['25%', '70%'], [])

    const handlePresentModalPress = useCallback(() => {
        bottomSheetModalRef.current?.present()
    })

    const handleSheetChanges = useCallback((index) => {
        console.log('handleSheetChanges', index)
    }, [])

    const allowAccess = async () => {
        console.log('allow')
    }

    const rejectAccess = async () => {
        console.log('reject')
    }

    return (
        <>
            <SafeAreaView style={styles.container}>

                <ScrollView style={{ padding: 10 }}>
                    {devices.length ? devices.map(
                        device => (
                            <TouchableOpacity
                                id={device}
                                style={{
                                    padding: 20,
                                    backgroundColor: '#ffddcc',
                                    borderRadius: 10
                                }}
                                onPress={handlePresentModalPress}>
                                {/* <Spacer/> */}
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Image source={images.logo} style={{ width: 50, height: 50 }} />

                                    <View>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Text>{device}</Text>
                                            <Text>...</Text>
                                        </View>
                                        <Text>Thời gian yêu cầu: 12h00 12/03/2023</Text>
                                        <Text>Loại thiết bị: Iphone4 - browser</Text>
                                        <Text>Ứng dụng yêu cầu: Wallet token</Text>
                                        <Text>Trạng thái: đã phân quyền</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )
                    ) : (<Text>Tài khoản chưa chia sẻ thông tin với nền tảng nào</Text>)}

                </ScrollView>

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                        setModalVisible(!modalVisible);
                    }}>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <View style={{ flexDirection: 'row-reverse', justifyContent: 'flex-end' }}>
                                <TouchableOpacity
                                    onPress={() => setModalVisible(!modalVisible)}
                                >
                                    <Text>X</Text>
                                </TouchableOpacity>
                            </View>
                            <Text style={styles.modalText}>Yêu cầu chia sẻ thông tin</Text>
                            <View>
                                <Text>Tên thiết bị: Ipad</Text>
                                <Text>Thời gian yêu cầu: </Text>
                                <Text>Location: </Text>
                                <Text>Trang thai: Cho phep</Text>
                                <Text>Ung dung yeu cau</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Pressable
                                    style={[styles.button, styles.buttonClose]}
                                    onPress={() => allowAccess()}>
                                    <Text style={styles.textStyle}>Cho phép</Text>
                                </Pressable>

                                <Pressable
                                    style={[styles.button, styles.buttonClose]}
                                    onPress={() => rejectAccess()}>
                                    <Text style={styles.textStyle}>Từ chối</Text>
                                </Pressable>
                            </View>
                        </View>
                    </View>
                </Modal>
            </SafeAreaView>
            <BottomSheetModal
                ref={bottomSheetModalRef}
                index={1}
                snapPoints={snapPoints}
                onChange={handleSheetChanges}
            >
                <View style={styles.contentContainer}>
                    <Text>Hello BottomSheetModal</Text>
                </View>
            </BottomSheetModal>
        </>

    )
}

export { Devices }