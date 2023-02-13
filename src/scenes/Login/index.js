import { KeyboardAvoidingView, ImageBackground, TouchableOpacity, SafeAreaView, ScrollView, Image, Text, TextInput, View } from 'react-native'
import styles from './styles'
import icons from '@assets/icons'
import images from '@assets/images'
import { useState } from 'react'

const Login = ({ navigation }) => {

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flex: 1 }}>
                <View style={styles.header}>
                    <ImageBackground source={images.illustration} style={{
                        flex: 1,
                        alignItems: 'center',
                        flexDirection: 'column-reverse'
                    }} resizeMode='cover'>
                        <View>
                            <Text>Wellcome To</Text>
                            <Text> Tee ID</Text>
                            <Text>Best app for Info Security</Text>
                            <Text>Join For Free</Text>
                        </View>
                    </ImageBackground>
                </View>

                <View style={styles.body}>
                    <View style={styles.buttonBox}>
                        <TouchableOpacity style={styles.qrCodeBtn}>
                            <Image source={icons.carbonQRCode} />
                            <Text style={{
                                paddingLeft: '5%',
                                fontStyle: 'normal',
                                fontWeight: 700,
                                color: '#567DF4'
                            }}>QR Code</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.navSignUpBtn}
                            onPress={() => navigation.navigate('Register')}
                        >
                            <Text style={{
                                fontStyle: 'normal',
                                fontWeight: 700,
                                color: '#FFFFFF',
                                paddingRight: '5%'
                            }}>Sign up </Text>
                            <Image source={icons.directionIcon} />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.footer}>
                    <Text style={{
                        fontStyle: 'normal',
                        fontWeight: 400,
                        color: '#1B1D28'
                    }}>Licensed by @Linsuu</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

export { Login }