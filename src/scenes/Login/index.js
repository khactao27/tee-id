import { KeyboardAvoidingView, TouchableOpacity, SafeAreaView, ScrollView, Image, Text, TextInput, View } from 'react-native'
import styles from './styles'
import images from '@assets/images'
import { useState } from 'react'

const Login = ({navigation}) => {

    const [UserEmail, setUserEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(true)
    const [ errorText, setErrorText] = useState('')

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                keyboardShouldPersistTaps='handled'
                contentContainerStyle={{
                    flex: 1,
                    justifyContent: 'center',
                    alignContent: 'center',
                }}>
                <View>
                    <KeyboardAvoidingView>
                        <View style={{ alignItems: 'center' }}>
                            <Image source={images.logo}
                                style={{
                                    width: '50%',
                                    height: 100,
                                    resizeMode: 'contain',
                                    margin: 30,
                                }} />
                        </View>
                        <View style={styles.section}>
                            <TextInput style={styles.input}
                                onChangeText={(userEmail) => setUserEmail(userEmail)}
                                placeholder='User Email'
                                placeholderTextColor='#8b9cb5'
                                autoCapitalize='none'
                                returnKeyType='next' />
                        </View>
                        <View style={styles.section}>
                            <TextInput style={styles.input}
                                onChangeText={(password) => setPassword(password)}
                                placeholder='Enter password'
                                placeholderTextColor='#8b9cb5'
                                keyboardType='default'
                                secureTextEntry={true}
                                returnKeyType='next'
                            />
                        </View>

                        {errorText != '' ? (
                            <Text style={styles.errorText}></Text>
                        ) : null}

                        <TouchableOpacity style={styles.button}
                            activeOpacity={0.5}
                            onPress={() => { }}>
                            <Text style={styles.buttonText}>LOGIN</Text>
                        </TouchableOpacity>

                        <Text
                            style={styles.registerText}
                            onPress={() => navigation.navigate('Register')}>
                            New Here ? Register
                        </Text>
                        <Text
                            style={styles.registerText}
                            onPress={() => navigation.navigate('MainTab')}>
                            MainTab
                        </Text>
                    </KeyboardAvoidingView>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export { Login }