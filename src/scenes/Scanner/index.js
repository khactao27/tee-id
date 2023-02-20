import { SafeAreaView, TouchableOpacity, View, Text, ImageBackground, Alert, Image } from "react-native"
import { useState } from "react"

import QRCodeScanner from "react-native-qrcode-scanner"
import styles from "./styles"
import icons from '@assets/icons'
import images from '@assets/images'

export const Scanner = () => {
    const [scanner, setScanner] = useState(false)
    const [scanResult, setScanResult] = useState(false)

    const onSuccess = (e) => {
        console.log(e.data)
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>

            </View>
            <View style={styles.card}>
                <Image source={icons.camera} />
                <Text>Please move your camera over the QR Code</Text>
                <Image source={images.qrCode} />
                <TouchableOpacity >
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        borderRadius: 10,
                        borderWidth: 2,
                        borderColor: 'black'
                    }}>
                        <Image source={icons.camera} />
                        <Text>Scan</Text>
                    </View>

                </TouchableOpacity>
            </View>

            <View style={styles.bottomContent}>

            </View>
        </SafeAreaView>
    )
}
