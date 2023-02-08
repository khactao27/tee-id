import {
    TouchableOpacity,
    SafeAreaView,
    Text,
    View,
    ScrollView,
    TextInput
} from 'react-native'
import { useState, useEffect } from 'react'
// import { Spacer } from '@components'

import styles from './styles'

const devices = ["iPhone", "iPad", "AirPod"]

const Devices = ({ navigator }) => {
    return (
        <SafeAreaView style={styles.container}>

            <TextInput placeholder='Hellllo'/>

            <ScrollView>

                {devices.length ? devices.map(
                    device => (
                        <TouchableOpacity id={device}>
                            {/* <Spacer/> */}
                            <View>
                                <Text>{device}</Text>
                                <Text>{device}</Text>
                                <Text>{device}</Text>
                                <Text>{device}</Text>
                            </View>
                        </TouchableOpacity>
                    )
                ) : (<Text>Tài khoản chưa chia sẻ thông tin với nền tảng nào</Text>)}

            </ScrollView>
        </SafeAreaView>
    )
}

export { Devices }