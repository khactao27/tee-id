import React, { Component } from 'react'
import { Text, ActivityIndicator, Image } from "react-native";
import { SafeAreaView } from "react-native";
import styles from "./styles";
import images from '@assets/images'
import { connect } from 'react-redux'
import { loadUser } from './actions'

class Splash extends Component {

    constructor() {
        super();
        this.state = {
            animating: true
        };
      }

    componentDidMount() {
        setTimeout(() => {
            this.props.navigation.replace('Auth')
        }, 3000)
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Image source={images.logo}
                    style={{ width: '90%', resizeMode: 'contain', margin: 30 }} />
                <ActivityIndicator
                    animating={this.state.animating}
                    color="#FFFFFF"
                    size="large"
                    style={styles.activityIndicator}
                />
            </SafeAreaView>
        )
    }
}

export default connect(
    state => ({
        splash: state.splash
    }),
    dispatch => ({
        load: (appStore) => dispatch(loadUser(appStore))
    })
)(Splash)