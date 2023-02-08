import React from 'react'
import { AppRegistry } from 'react-native'
import { Provider } from 'react-redux'
import store from '@store'
import Navigator from '@navigation/App'
import { NavigationContainer } from '@react-navigation/native'

const App = () => {
    return (
        <Provider store={store()}>
            <NavigationContainer>
                <Navigator />
            </NavigationContainer>
            {/* <PushController/> */}
        </Provider>
    )
}

export default () => {
    AppRegistry.registerComponent('TeeID', () => App)
}
