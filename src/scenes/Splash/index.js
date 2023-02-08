import { Text, ActivityIndicator, Image } from "react-native";
import { useState, useEffect } from "react";
import { SafeAreaView } from "react-native";
import styles from "./styles";
import images from '@assets/images'

const Splash = ({ navigation }) => {
    const [ animating, setAnimating ] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Auth')
        }, 5000)
    })

    return (
        <SafeAreaView style={styles.container}>
            <Image source={images.logo}
                style={{ width: '90%', resizeMode: 'contain', margin: 30 }} />
            <ActivityIndicator
                animating={animating}
                color="#FFFFFF"
                size="large"
                style={styles.activityIndicator}
            />
        </SafeAreaView>
    )
}

export { Splash }