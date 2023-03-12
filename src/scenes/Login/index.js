import React, { Component } from 'react'
import {
    ImageBackground,
    Alert, TouchableOpacity,
    SafeAreaView, 
    Image, Text, View
} from 'react-native'
import styles from './styles'
import messaging from '@react-native-firebase/messaging'
import icons from '@assets/icons'
import images from '@assets/images'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { connect } from 'react-redux'
import { logIn } from './actions'
import { AccountTypes } from '../../services/biz/accounts'

async function requestUserPermission(){
    const authStatus=await messaging.requestPermission();
    const enable=
                authStatus===messaging.AuthorizationStatus.AUTHORIZED||
                authStatus===messaging.AuthorizationStatus.PROVISIONAL;
    if(enable){

    }
}

async function getFcmToken(){
    let fcmToken=await AsyncStorage.getItem("fcmToken");
    console.log(fcmToken,"old token");
    if(!fcmToken){
        try{
            const fcmToken=await messaging.getFcmToken();
            if(fcmToken){
                console.log(fcmToken,"new token")
                await AsyncStorage.setItem("fcmToken",fcmToken);
            }
        }catch(error){
            console.log(error,"token error")
        }
    }

}
 const notificationListener=()=>{
    messaging().onNotificationOpenedApp(remoteMessage => {
        console.log(
          'Notification caused app to open from background state:',
          remoteMessage.notification,
        );
        //navigation.navigate(remoteMessage.data.type);
      });
  
      // Check whether an initial notification is available
      messaging()
        .getInitialNotification()
        .then(remoteMessage => {
          if (remoteMessage) {
            console.log(
              'Notification caused app to open from quit state:',
              remoteMessage.notification,
            );
            //setInitialRoute(remoteMessage.data.type); // e.g. "Settings"
          }
          //setLoading(false);
        });
}

export class Login extends Component {

    async checkToken() {
        requestUserPermission()
        getFcmToken()
        notificationListener()

        const fcmToken = await messaging().getToken()
        console.log(fcmToken)
        if (fcmToken) {
            console.log(fcmToken)
            Alert.alert(fcmToken)
        }
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={{ flex: 1 }}>
                    <View style={styles.header}>
                        <ImageBackground source={images.illustration} style={{
                            flex: 1,
                            paddingLeft: '10%',
                            paddingBottom: '20%',
                            flexDirection: 'column-reverse'
                        }} resizeMode='cover'>
                            <View>
                                <Text style={{
                                    fontStyle: 'normal',
                                    fontWeight: 400,
                                    fontSize: 20,
                                    color: '#22215B'
                                }}>Wellcome To</Text>
    
                                <Text style={{
                                    fontStyle: 'normal',
                                    fontWeight: 700,
                                    fontSize: 38,
                                    color: '#22215B'
                                }}> Tee ID</Text>
    
                                <Text style={{
                                    fontStyle: 'normal',
                                    fontWeight: 400,
                                    fontSize: 14,
                                    color: '#7B7F9E'
                                }}>Best app for Info Security {"\n \n \n"}
                                    Join For Free</Text>
                            </View>
                        </ImageBackground>
                    </View>
    
                    <View style={styles.body}>
                        <View style={styles.buttonBox}>
                            <TouchableOpacity
                                style={styles.qrCodeBtn}
                                onPress={() => {
                                    console.log(this.props.splash)
                                }}
                            >
                                <Image source={icons.carbonQRCode} />
                                <Text style={{
                                    paddingLeft: '5%',
                                    fontStyle: 'normal',
                                    fontWeight: 700,
                                    color: '#567DF4'
                                }}>QR Code</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.navSignUpBtn}
                                onPress={() => this.props.navigation.navigate('MainTab')}
                            >
                                <Text style={{
                                    fontStyle: 'normal',
                                    fontWeight: 700,
                                    color: '#FFFFFF',
                                    paddingRight: '5%'
                                }}>Sign up </Text>
                                <Image source={icons.directionIcon} />
                            </TouchableOpacity>
                        </View>
                    </View>
    
                    <View style={styles.footer}>
                        <Text style={{
                            fontStyle: 'normal',
                            fontWeight: 400,
                            color: '#1B1D28'
                        }}>Licensed by @Linsu</Text>
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}

export default connect(
    state => ({
        splash: state.splash,
        data: state.login,
        appStore: state.appStore
    }),
    dispatch => ({
        login: (appStore, type) => dispatch(logIn(appStore, type))
    })
)(Login)