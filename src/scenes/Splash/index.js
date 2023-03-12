import React, { Component } from 'react'
import { Text, ActivityIndicator, Image } from "react-native";
import { SafeAreaView } from "react-native";
import styles from "./styles";
import images from '@assets/images'
import { connect } from 'react-redux'
import { loadUser } from './actions'

export class Splash extends Component {

    constructor() {
        super();
        this.state = {
            animating: true,
        };
      }

    componentDidMount() {
        console.log('splash', this.props.splasher)
        // setTimeout(() => {
        //     this.props.navigation.replace('Auth')
        // }, 3000)
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                {console.log(this.props.splasher)}
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

const mapStateToProps = state => ({
    splasher: state.splash
});

export default connect(
    mapStateToProps,
    dispatch => ({
        load: (appStore) => dispatch(loadUser(appStore))
    })
)(Splash)