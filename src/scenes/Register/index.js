import { useState } from 'react'
import {
    SafeAreaView,
    Text,
    ScrollView,
    Image,
    View,
    TextInput,
    TouchableOpacity,
    ImageBackground
} from 'react-native'

import CheckBox from '@react-native-community/checkbox';
import styles from './styles'
import images from '@assets/images'
import icons from '@assets/icons'
import { connect } from 'react-redux'
import  axios from 'axios'

export const Register = ({ navigation }) => {

    const [toggleCheckBox, setToggleCheckBox] = useState(true)
    const [email, setEmail] = useState('')

    const signUp = async () => {
        try {
            const instance = axios.create({
                baseURL: 'http://222.255.238.183:8001',
                timeout: 20000,
                headers: {'Accept': 'application/json'}
              });
            let response = await instance.get('/notifications?email=tao.duongkhac@gmail.com');
            console.log('API', response.data)
            setEmail(JSON.stringify(response.data))
            navigation.navigate('MainTab')
        } catch(e) {
            console.log(e.message)
        }

    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <ImageBackground
                    source={images.illustrationRegister}
                    style={{
                        flex: 1,
                        justifyContent: 'center',
                        paddingLeft: '5%'
                    }} resizeMode='cover'>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Login')}
                    >
                        <Image source={icons.backBtn} style={{ width: 20, height: 20 }} />
                    </TouchableOpacity>
                </ImageBackground>
            </View>
            <View style={styles.body}>
                <View>
                    <Text style={{
                        fontStyle: 'normal',
                        fontWeight: 700,
                        color: '#12121D',
                        fontSize: 28
                    }}>Let's Get Started!</Text>
                    <Text style={{
                        fontStyle: 'normal',
                        fontWeight: 400,
                        fontSize: 14,
                        color: 'rgba(18, 18, 29, 0.6)',
                        paddingTop: '2%'
                    }}>Sign up with your infomation of fill form to continue</Text>
                </View>
                <ScrollView>
                    <View>
                        <View style={styles.inputBox}>
                            <TextInput placeholder='Email' value={email} />
                        </View>

                        <View style={styles.inputBox}>
                            <TextInput placeholder='Name' />
                        </View>

                        <View style={styles.inputBox}>
                            <Text>Gender</Text>
                        </View>

                        <View style={styles.inputBox}>
                            <TextInput placeholder='Address' />
                        </View>

                        <View style={styles.inputBox}>
                            <TextInput placeholder='Date of birth' />
                        </View>
                    </View>
                </ScrollView>
                <View style={{
                    flexDirection: 'row',
                    paddingTop: 16,
                    paddingBottom: 16,
                    alignItems: 'center',
                    gap: 16,
                }}>
                    <CheckBox
                        disabled={false}
                        value={toggleCheckBox}
                        onValueChange={(newValue) => setToggleCheckBox(newValue)}
                    />
                    <Text>By Signing up, you agree to the&nbsp;
                        <Text style={{ fontWeight: 'bold' }}>Terms of Service</Text>
                        &nbsp;and&nbsp;
                        <Text style={{ fontWeight: 'bold' }}>&nbsp;Privacy Policy</Text>
                    </Text>
                </View>
            </View>
            <View style={styles.footer}>
                <TouchableOpacity
                    onPress={signUp}
                    style={styles.signUpBtn}
                >
                    <Text style={{
                        fontStyle: 'normal',
                        fontWeight: 900,
                        color: '#FFFFFF'
                    }}>Sign up</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default connect(
    state => ({
        state
    }),
    dispatch =>({
        dispatch
    })
)(Register)