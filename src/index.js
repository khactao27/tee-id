import React from 'react'
import { AppRegistry } from 'react-native'
import { Provider } from 'react-redux'
import store from '@store'
import Navigator from '@navigation/App'
import { NavigationContainer } from '@react-navigation/native'
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import { Splash } from './scenes/Splash'

const App = () => {
    return (
        <Provider store={store}>
            <BottomSheetModalProvider>
                <NavigationContainer>
                    <Navigator />
                </NavigationContainer>
            </BottomSheetModalProvider>
        </Provider>
    )
}

export default () => {
    AppRegistry.registerComponent('TeeID', () => App)
}
