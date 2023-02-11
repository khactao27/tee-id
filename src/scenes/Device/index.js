import {
    TouchableOpacity,
    SafeAreaView,
    Text,
    View,
    ScrollView,
    Image,
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
                                style={styles.deviceItem}
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
            </SafeAreaView>
            <BottomSheetModal
                ref={bottomSheetModalRef}
                index={1}
                snapPoints={snapPoints}
                onChange={handleSheetChanges}
            >
                <View style={styles.modalBottom}>
                    <View style={styles.modalBottomHeader}>
                        <Text>
                            Thông tin yêu cầu truy cập
                        </Text>
                    </View>
                    <View style={styles.modalBottomBody}>
                        <ScrollView>
                            <View style={styles.modalBodyRow}>
                                <Text>Tên thiết bị: </Text>
                                <Text>Iphone XS Max</Text>
                            </View>

                            <View style={styles.modalBodyRow}>
                                <Text>Thời gian yêu cầu: </Text>
                                <Text>12h00</Text>
                            </View>

                            <View style={styles.modalBodyRow}>
                                <Text>Loại thiết bị: </Text>
                                <Text>Browser</Text>
                            </View>

                            <View style={styles.modalBodyRow}>
                                <Text>Ứng dụng yêu cầu: </Text>
                                <Text>Wallet Token</Text>
                            </View>

                            <View style={styles.modalBodyRow}>
                                <Text>Trạng thái:</Text>
                                <Text>Đã cấp quyền</Text>
                            </View>

                            <View style={styles.modalBodyRow}>
                                <Text>Hiệu lực: Từ ngày - ngày: </Text>
                            </View>

                            <View style={styles.modalBodyRow}>
                                <Text>Vị trí thiết bị.</Text>
                            </View>
                        </ScrollView>
                    </View>
                    <View style={styles.modalBottomFoot}>
                        <TouchableOpacity
                            style={{ flex: 1, alignContent: 'center' }}
                            onPress={allowAccess}>
                            <Text>Cho phep</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={{ flex: 1 }}
                            onPress={rejectAccess}
                        >
                            <Text>Tu choi</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </BottomSheetModal>
        </>

    )
}

export { Devices }