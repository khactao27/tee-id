import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Home } from '@scenes/Home'
import { Profile } from '@scenes/Profile'
import { Settings } from '@scenes/Settings'
import { QRCode } from '@scenes/QRCode'
import { Notification } from '@scenes/Notification'


const Tab = createBottomTabNavigator()

const MainTab = () => {
    return (
        <Tab.Navigator initialRouteName='Home'>
            <Tab.Screen options={{ title: 'Home' }} name="Home" component={Home} />
            <Tab.Screen options={{ title: 'QRCode' }} name="QRCode" component={QRCode} />
            <Tab.Screen options={{ title: "Notification" }} name="Notification" component={Notification} />
            <Tab.Screen options={{ title: "Profile" }} name="Profile" component={Profile} />
            <Tab.Screen options={{ title: "Settings" }} name="Settings" component={Settings} />
        </Tab.Navigator>
    )
}

export { MainTab }
