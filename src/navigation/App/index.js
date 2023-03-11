import { connect } from 'react-redux'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { AuthStack } from '../Auth'
import { MainTab } from '../Main'
import { Splash } from '@scenes/Splash'

const Stack = createNativeStackNavigator();

const Navigator = () => {
    return (
        <Stack.Navigator initialRouteName='Splash'>
            <Stack.Screen name='Splash' component={Splash} options={{ headerShown: false }} />
            <Stack.Screen name='Auth' component={AuthStack} options={{ headerShown: false }} />
            <Stack.Screen name='MainTab' component={MainTab} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}
export default connect(state => ({ state }))(Navigator)