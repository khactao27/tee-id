import React, { Component, useEffect, useState } from 'react'
import { Text, ActivityIndicator, Image } from "react-native";
import { SafeAreaView } from "react-native";
import styles from "./styles";
import images from '@assets/images'
import { connect } from 'react-redux'
import { loadUser } from './actions'
import AsyncStorage from '@react-native-async-storage/async-storage';


const storeData = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, value)
    } catch (e) {
        // saving error
    }
}

const getData = async (key) => {
    try {
        return await AsyncStorage.getItem(key)
    } catch (e) {
        return
    }
}

export const Splash = ({ navigation }) => {

    const [animating, setAnimating] = useState(true)

    const loadUser = async () => {
        console.log('prive', getData('privateKey'))
        setTimeout(() => {
            navigation.replace('Auth')
        }, 3000)
    }

    useEffect(() => {
        loadUser()
    }, [])

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

export default connect(
    state => ({
        splash: state.splash
    }),
    dispatch => ({
        load: (appStore) => dispatch(loadUser(appStore))
    })
)(Splash)