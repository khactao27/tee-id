import { 
    Text,
    SafeAreaView,
    View,
    ScrollView,
    TouchableOpacity,
    Image,
    Alert,
    Modal,
    Pressable
} from 'react-native'
import { useEffect, useState } from 'react'
import styles from './styles'
import icons from '@assets/icons'
import messaging from '@react-native-firebase/messaging'
import AsyncStorage from '@react-native-async-storage/async-storage'

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
export const notificationListener=()=>{
    messaging().onNotificationOpenedApp(remoteMessage => {
        console.log(
          'Notification caused app to open from background state:',
          remoteMessage.notification,
        );
        navigation.navigate(remoteMessage.data.type);
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


const data = []
export const Notification = () => {

    const [modalVisible, setModalVisible] = useState(false);
    useEffect(() => {
        const unsubscribe = messaging().onMessage(async remoteMessage => {
          Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
        });
    
        return unsubscribe;
      }, []);
    

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.notificationList}>
                {false ? null : data.map(item =>
                (
                    <TouchableOpacity
                        id={item}
                        style={styles.notificationItem}
                        onPress={() => {setModalVisible(!modalVisible)}}
                    >
                        {/* <View>
                            <Text>{item}</Text>
                        </View> */}
                        <Image source={icons.bell} style={{ height: 80, width: 80 }} />
                    </TouchableOpacity>
                ))}
            </ScrollView>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Notification!</Text>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}>
                            <Text style={styles.textStyle}>Hide Modal</Text>
                        </Pressable>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}>
                            <Text style={styles.textStyle}>Cancel</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </SafeAreaView>
    )
}