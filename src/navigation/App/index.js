import { connect } from 'react-redux'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { AuthStack } from '../Auth'
import { MainTab } from '../Main'
import { Splash } from '@scenes/Splash'
import { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import messaging from '@react-native-firebase/messaging'

const Stack = createNativeStackNavigator();

messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log('Message handled in the background!', remoteMessage);
});

const Navigator = () => {
    const navigation = useNavigation();
    const [initialRoute, setInitialRoute] = useState('Splash');
  
    useEffect(() => {
      // Assume a message-notification contains a "type" property in the data payload of the screen to open
  
      messaging().onNotificationOpenedApp(remoteMessage => {
        console.log(
          'Notification caused app to open from background state:',
          remoteMessage.notification,
        );
        navigation.navigate('Devices');
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
            setInitialRoute('MainTab'); // e.g. "Settings"
          }
        });
    }, []);

    return (
        <Stack.Navigator initialRouteName={initialRoute}>
            <Stack.Screen name='Splash' component={Splash} options={{ headerShown: false }} />
            <Stack.Screen name='Auth' component={AuthStack} options={{ headerShown: false }} />
            <Stack.Screen name='MainTab' component={MainTab} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

export default connect(state => ({ state }))(Navigator)