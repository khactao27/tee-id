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
import { MaterialIcon } from '@components/Icon'

import { useState, useRef, useMemo, useEffect } from 'react'
import styles from './styles'
import images from '@assets/images'

export const Profile = ({ navigation }) => {

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity onPress={handlePresentModalPress}>
                    <MaterialIcon
                        name='menu'
                        size='extraLarge'
                        color='black'
                    />
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

    return (
        <>
            <SafeAreaView style={styles.container}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ padding: 10 }}>
                        <Image source={images.tee} style={styles.Image} />
                        <Text style={{ flex: 1, fontSize: 20 }}>Nick Name</Text>
                    </View>
                    <View>
                        <View>
                            <Text style={styles.TextStyles}>Tao</Text>
                            <Text style={styles.TextStyles}>gender: Nam</Text>
                            <Text style={styles.TextStyles}>birthday: 20183825</Text>
                        </View>
                    </View>
                </View>
                <View style={{ padding: 10 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text>Tổng tài sản: </Text>
                        <Text>ETH: 10.12</Text>
                    </View>
                </View>
                <View style={{
                    backgroundColor: '#b3f0ff',
                    alignContent: 'center',
                    alignItems: 'center',
                    margin: 10,
                    padding: 5,
                    borderRadius: 10
                }}>
                    <TouchableOpacity
                        onPress={() => setModalVisible(true)}
                    >
                        <Text>Edit Profile</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ padding: 15 }}>
                    <Text>Thông tin bí mật: (được mã hoá)</Text>
                    <ScrollView>
                        <View>
                            <View style={{ flexDirection: 'row', backgroundColor: '#f2f2f2', paddingTop: 15, paddingBottom: 15 }}>
                                <Text>ID: </Text>
                                <Text>122338778</Text>
                            </View>
                            <View style={{ flexDirection: 'row', backgroundColor: '#f2f2f2', paddingTop: 15, paddingBottom: 15 }}>
                                <Text>LicenseCode: </Text>
                                <Text>Vietnamese</Text>
                            </View>

                            <View style={{ flexDirection: 'row', backgroundColor: '#f2f2f2', paddingTop: 15, paddingBottom: 15 }}>
                                <Text>LicenseCode: </Text>
                                <Text>Vietnamese</Text>
                            </View>

                            <View style={{ flexDirection: 'row', backgroundColor: '#f2f2f2', paddingTop: 15, paddingBottom: 15 }}>
                                <Text>LicenseCode: </Text>
                                <Text>Vietnamese</Text>
                            </View>

                            <View style={{ flexDirection: 'row', backgroundColor: '#f2f2f2', paddingTop: 15, paddingBottom: 15 }}>
                                <Text>LicenseCode: </Text>
                                <Text>Vietnamese</Text>
                            </View>

                            <View style={{ flexDirection: 'row', backgroundColor: '#f2f2f2', paddingTop: 15, paddingBottom: 15 }}>
                                <Text>LicenseCode: </Text>
                                <Text>Vietnamese</Text>
                            </View>

                            <View style={{ flexDirection: 'row', backgroundColor: '#f2f2f2', paddingTop: 15, paddingBottom: 15 }}>
                                <Text>LicenseCode: </Text>
                                <Text>Vietnamese</Text>
                            </View>

                            <View style={{ flexDirection: 'row', backgroundColor: '#f2f2f2', paddingTop: 15, paddingBottom: 15 }}>
                                <Text>LicenseCode: </Text>
                                <Text>Vietnamese</Text>
                            </View>

                            <View style={{ flexDirection: 'row', backgroundColor: '#f2f2f2', paddingTop: 15, paddingBottom: 15 }}>
                                <Text>LicenseCode: </Text>
                                <Text>Vietnamese</Text>
                            </View>
                        </View>
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
                            <View>
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
                            <Text>Icon</Text>
                            <Text>Setting</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={styles.rowBottomSheet}>
                            <Text>IconQR</Text>
                            <Text>QR Code</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={styles.rowBottomSheet}>
                            <Text>IconQR</Text>
                            <Text>Your Activity</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={styles.rowBottomSheet}>
                            <Text>IconQR</Text>
                            <Text>Privacy & Security</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={styles.rowBottomSheet}>
                            <Text>Icon Logout: </Text>
                            <Text>Logout</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={styles.rowBottomSheet}>
                            <Text>Icon Logout: </Text>
                            <Text>Switch appearance</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={styles.rowBottomSheet}>
                            <Text>IconQR</Text>
                            <Text>Cancel</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </BottomSheetModal>
        </>
    )
}