import React, { Component } from 'react'
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
import icons from '@assets/icons'
import { connect } from 'react-redux'

class Profile extends Component {
    constructor() {
        super();
        this.state = {
            textValue: '',
            modalVisible: '',
            refInputs: React.createRef(['']),
            bottomSheetModalRef: React.createRef(null),
            snapPoints: ['25%', '50%', '75'],
            claims: [],
            secretInfos: []
        }
    }

    componentDidMount() {
        this.props.navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity onPress={() => this.state.bottomSheetModalRef.current?.present()}>
                    <Image source={icons.threeLine} style={styles.icon}/>
                </TouchableOpacity>
            ),
        })
    }

    async updateProfile() {

    }

    async cancel () {

    }

    async addClaim () {
        this.state.claims.push(
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

    render() {
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
                                this.state.secretInfos.map(item => (
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
                        visible={this.state.modalVisible}
                        onRequestClose={() => {
                            Alert.alert('Modal has been closed.');
                            setModalVisible(!this.state.modalVisible);
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
    
                                    {this.state.claims}
                                    <Pressable onPress={this.addClaim}>
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
                    ref={this.state.bottomSheetModalRef}
                    index={2}
                    snapPoints={this.state.snapPoints}>
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
                                this.state.bottomSheetModalRef.current?.dismiss()
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
}

export default connect(
    state => ({

    }),
    dispatch => ({
        
    })
)(Profile)