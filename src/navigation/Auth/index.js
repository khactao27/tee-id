import React, { Component } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Login } from '@scenes/Login'
import { Register } from '@scenes/Register'

const Stack = createNativeStackNavigator()

class AuthStack extends Component {
    render() {
        return (
            <Stack.Navigator initialRouteName='Login'>
                <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
                <Stack.Screen name='Register' component={Register} options={{ headerShown: false }} />
            </Stack.Navigator>
        )
    }
}

export { AuthStack }