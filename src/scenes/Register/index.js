import { useState } from 'react'
import {
    SafeAreaView,
    Text,
    Button,
    ScrollView,
    Image,
    View,
    KeyboardAvoidingView,
    TextInput,
    TouchableOpacity,
    ImageBackground
} from 'react-native'

import CheckBox from '@react-native-community/checkbox';
import DatePicker from 'react-native-date-picker'
import SelectDropdown from 'react-native-select-dropdown'
import styles from './styles'
import images from '@assets/images'
import icons from '@assets/icons'
import { MaterialIcon } from '@components/Icon'

export const Register = ({ navigation }) => {

    const [toggleCheckBox, setToggleCheckBox] = useState(false)

    const signUp = async () => {
        navigation.navigate('MainTab')
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
                            <MaterialIcon
                                name='email'
                                size='extraLarge'
                                color='gray'
                            />
                            <TextInput placeholder='Email' />
                        </View>

                        <View style={styles.inputBox}>
                            <MaterialIcon
                                name='menu'
                                size='extraLarge'
                                color='black'
                            />
                            <TextInput placeholder='Name' />
                        </View>

                        <View style={styles.inputBox}>
                            <MaterialIcon
                                name='menu'
                                size='extraLarge'
                                color='black'
                            />
                            <Text>Gender</Text>
                        </View>

                        <View style={styles.inputBox}>
                            <MaterialIcon
                                name='dns'
                                size='extraLarge'
                                color='black'
                            />
                            <TextInput placeholder='Address' />
                        </View>

                        <View style={styles.inputBox}>
                            <MaterialIcon
                                name='email'
                                size='extraLarge'
                                color='black'
                            />
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