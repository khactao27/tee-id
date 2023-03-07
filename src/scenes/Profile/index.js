import {
    TextInput,
    Text,
    SafeAreaView,
    TouchableOpacity,
    ScrollView,
    View,
    Image,
    Modal,
    Pressable,
    Button
} from 'react-native'

import { BottomSheetModal } from '@gorhom/bottom-sheet'

import { useState, useRef, useMemo, useEffect } from 'react'
import styles from './styles'
import images from '@assets/images'
import icons from '@assets/icons'

export const Profile = ({ navigation }) => {

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity onPress={handlePresentModalPress}>
                    <Image source={icons.threeLine} style={styles.icon}/>
                </TouchableOpacity>
            ),
        })
    })

    const [textValue, setTextValue] = useState('')
    const [modalVisible, setModalVisible] = useState(false)
    const refInputs = useRef([textValue])
    const bottomSheetModalRef = useRef(null)
    const snapPoints = useMemo(() => ['25%', '50%', '75'], [])

    const handlePresentModalPress = async () => {
        bottomSheetModalRef.current?.present()
    };

    const updateProfile = async () => {
        console.log('update profile')
    }

    const cancel = async () => {
        console.log('Huy')
    }

    const claims = [
        <View id='1' style={{ flexDirection: 'row' }}>
            <TextInput
                style={styles.input}
                onChangeText={value => { }}
                placeholder="placeholder"
            />

            <Pressable onPress={() => { }}>
                <Text>X</Text>
            </Pressable>
        </View>
    ]

    const addClaim = () => {
        claims.push(
            <View style={{ flexDirection: 'row' }}>
                <TextInput
                    style={styles.input}
                    onChangeText={value => { }}
                    placeholder="placeholder"
                />

                <Pressable onPress={() => { }}>
                    <Text>X</Text>
                </Pressable>
            </View>
        )
    }

    var secretInfos = [
        {
            field: 'Licences Code',
            value: '122322312'
        },
        {
            field: 'ID card',
            value: '122322312'
        }
    ]

    return (
        <>
            <SafeAreaView style={styles.container}>
                <View style={styles.basicInfo}>
                    <View style={styles.info}>
                        <View style={{ padding: 10, justifyContent: 'center' }}>
                            <Image source={{ uri: 'http://222.255.238.183:8010/uploads/tee-306348862_1180959729511317_2812908560085888436_n-1676240231351.jpg' }} style={styles.Image} />
                        </View>
                        <View>
                            <View>
                                <Text style={styles.basicInfoRow}>Tao D.K</Text>
                                <Text style={styles.basicInfoRow}>Male</Text>
                                <Text style={styles.basicInfoRow}>02/07/2000</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.editButton}>
                        <TouchableOpacity
                            onPress={() => setModalVisible(true)}
                        >
                            <Text>Edit Profile</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.asset}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Tổng tài sản: </Text>
                    <View style={styles.tokens}>
                        <View style={styles.token}>
                            <Text style={{ color: '#12121D', opacity: 1, fontWeight: 'bold' }}>ETH</Text>
                            <Text>{10}</Text>
                        </View>
                    </View>
                </View>
                <View>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Thông tin mật: </Text>
                </View>
                <View style={styles.secretInfo}>
                    <ScrollView >
                        {
                            secretInfos.map(item => (
                                <View>
                                    <View style={styles.secretInfoRow}>
                                        <Text style={{fontWeight: 'bold', fontSize: 20, flex: 1}}>{item.field}</Text>
                                        <Text style={{fontSize: 20, fontWeight: 'bold', flex: 1}}>{item.value}</Text>
                                    </View>
                                </View>
                            ))
                        }
                    </ScrollView>
                </View>

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
                            <View style={{justifyContent: 'flex-end'}}>
                                <TouchableOpacity
                                    onPress={() => setModalVisible(false)}>
                                    <Text>X</Text>
                                </TouchableOpacity>
                            </View>
                            <Text style={{ fontSize: 20, padding: 10 }}>Chỉnh sửa</Text>
                            <ScrollView>
                                <Text>Thông tin cơ bản</Text>
                                <TextInput style={styles.input} placeholder='Nick name' />
                                <TextInput style={styles.input} placeholder='Tên đầy đủ' />
                                <TextInput style={styles.input} placeholder='Giới tính' />
                                <TextInput style={styles.input} placeholder='Ngày sinh' />
                                <TextInput style={styles.input} placeholder='Số điện thoại' />

                                <Text>Thông tin mật</Text>

                                {claims}
                                <Pressable onPress={addClaim}>
                                    <Text>+ Claim</Text>
                                </Pressable>
                            </ScrollView>
                            <View style={{ flexDirection: 'row' }}>
                                <Pressable
                                    style={[styles.button, styles.buttonClose]}
                                    onPress={() => updateProfile()}>
                                    <Text style={styles.textStyle}>Update</Text>
                                </Pressable>
                                <Pressable
                                    style={[styles.button, styles.buttonClose]}
                                    onPress={() => cancel()}>
                                    <Text style={styles.textStyle}>Cancel</Text>
                                </Pressable>
                            </View>
                        </View>
                    </View>
                </Modal>
            </SafeAreaView>
            <BottomSheetModal
                ref={bottomSheetModalRef}
                index={2}
                snapPoints={snapPoints}>
                <View style={styles.bottomSheet}>
                    <TouchableOpacity
                        onPress={() => { }}
                        style={{ flexDirection: 'column' }}>
                        <View style={styles.rowBottomSheet}>
                            <Image source={icons.settings} style={styles.icon} />
                            <Text>Setting</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={styles.rowBottomSheet}>
                            <Image source={icons.qrCode} style={styles.icon} />
                            <Text>QR Code</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={styles.rowBottomSheet}>
                            <Image source={icons.restore} style={styles.icon} />
                            <Text>Your Activity</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={styles.rowBottomSheet}>
                            <Image source={icons.privacy} style={styles.icon} />
                            <Text>Privacy & Security</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={styles.rowBottomSheet}>
                            <Image source={icons.theme} style={styles.icon} />
                            <Text>Switch appearance</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={styles.rowBottomSheet}>
                            <Image source={icons.logout} style={styles.icon} />
                            <Text>Logout</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => {
                            bottomSheetModalRef.current?.dismiss()
                        }}
                    >
                        <View style={styles.rowBottomSheet}>
                            <Image source={icons.cancel} style={styles.icon} />
                            <Text>Cancel</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </BottomSheetModal>
        </>
    )
}