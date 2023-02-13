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

export const Register = ({ navigation }) => {

    const [toggleCheckBox, setToggleCheckBox] = useState(false)

    const signUp = async () => {

    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <ImageBackground
                    source={images.illustrationRegister}
                    style={{
                        flex: 1,
                        alignItems: 'center',
                        flexDirection: 'column-reverse'
                    }} resizeMode='cover'>
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
                    <Text>Sign up with your infomation of fill form to continue</Text>
                </View>
                <ScrollView>
                    <View>
                        <View style={styles.inputBox}>
                            <Text>Icon</Text>
                            <TextInput placeholder='Email' />
                        </View>

                        <View style={styles.inputBox}>
                            <Text>Icon</Text>
                            <TextInput placeholder='Name' />
                        </View>

                        <View style={styles.inputBox}>
                            <Text>Icon</Text>
                            <Text>Gender</Text>
                        </View>

                        <View style={styles.inputBox}>
                            <Text>Icon</Text>
                            <TextInput placeholder='Address' />
                        </View>

                        <View style={styles.inputBox}>
                            <Text>Icon: </Text>
                            <TextInput placeholder='Date of birth' />
                        </View>
                    </View>
                </ScrollView>
                <View style={styles.inputBox}>
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