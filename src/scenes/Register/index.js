import images from '@assets/images'
import { useState } from 'react'
import { SafeAreaView, Text, Button, ScrollView, Image, View, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native'
import DatePicker from 'react-native-date-picker'
import SelectDropdown from 'react-native-select-dropdown'
import styles from './styles'

export const Register = ({ navigation }) => {

    const [nick, setNick] = useState('')
    const [address, setAddress] = useState('')
    const [email, setEmail] = useState('')
    const [gender, setGender] = useState(0)
    const [birthday, setBirthday] = useState('')
    const [website, setWebsite] = useState('')
    const [locale, setLocale] = useState('')
    const [privateKey, setPrivateKey] = useState('')
    const [loading, setLoading] = useState(false)
    const [errorText, setErrorText] = useState('')
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)

    const locales = ['English', 'Vietnamese', 'Japanese']

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Image source={images.logo}
                    style={{
                        width: '50%',
                        height: 100,
                        resizeMode: 'contain',
                        margin: 30
                    }}
                />
            </View>
            <ScrollView keyboardShouldPersistTaps='handled'
                contentContainerStyle={{
                    justifyContent: 'center',
                    alignContent: 'center'
                }}>
                <KeyboardAvoidingView enabled>
                    <View style={styles.section}>
                        <TextInput style={styles.input}
                            onChangeText={(nick) => setNick(nick)}
                            placeholder='Enter your nick name'
                            underlineColorAndroid='#f000'
                            placeholderTextColor='#8b9cbb5'
                            blurOnSubmit={false}
                        />
                    </View>

                    <View style={styles.section}>
                        <TextInput style={styles.input}
                            onChangeText={(email) => setEmail(email)}
                            placeholder='Enter your email'
                            underlineColorAndroid='#f000'
                            placeholderTextColor='#8b9cbb5'
                            keyboardType='email-address'
                            blurOnSubmit={false}
                        />
                    </View>

                    <View style={styles.section}>
                        <TextInput style={styles.input}
                            onChangeText={(website) => setWebsite(website)}
                            placeholder='Enter your website'
                            blurOnSubmit={false}
                        />
                    </View>

                    <View style={styles.section}>
                        <TextInput style={styles.input}
                            onChangeText={(locale) => setLocale(locale)}
                            placeholder='Enter your locale'
                            blurOnSubmit={false}
                        />
                    </View>

                    <View style={styles.section}>
                        <TextInput style={styles.input}
                            onChangeText={(address) => setLocale(address)}
                            placeholder='Enter your address'
                            blurOnSubmit={false}
                        />
                    </View>

                    <View style={styles.section}>
                        <SelectDropdown
                            data={locales}
                            onSelect={(selectedItem, index) => {

                            }}
                            buttonTextAfterSelection={(selectedItem, index) => {
                                // text represented after item is selected
                                // if data array is an array of objects then return selectedItem.property to render after item is selected
                                return selectedItem
                            }}
                            rowTextForSelection={(item, index) => {
                                // text represented for each item in dropdown
                                // if data array is an array of objects then return item.property to represent item in dropdown
                                return item
                            }}
                        />
                    </View>

                    <View style={styles.section}>
                        <Button style={styles.button} title="Open" onPress={() => setOpen(true)} />
                        <DatePicker
                            modal
                            open={open}
                            date={date}
                            onConfirm={(date) => {
                                setOpen(false)
                                setDate(date)
                            }}
                            onCancel={() => {
                                setOpen(false)
                            }}
                        />

                    </View>
                </KeyboardAvoidingView>
            </ScrollView>
            {errorText != '' ? (
                <Text style={styles.errorText}>
                    {errorText}
                </Text>
            ) : null}

            <TouchableOpacity style={styles.button}
                activeOpacity={0.5}
                onPress={() => { }}>
                <Text style={styles.buttonText}>REGISTER</Text>
            </TouchableOpacity>

            <Text
                style={styles.loginText}
                onPress={() => navigation.navigate('Login')}>
                Already Account ? Login
            </Text>
        </SafeAreaView>
    )
}