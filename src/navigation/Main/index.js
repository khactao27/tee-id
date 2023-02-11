import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Home } from '@scenes/Home'
import { Profile } from '@scenes/Profile'
import { Devices } from '@scenes/Device'
import { QRCode } from '@scenes/QRCode'
import { Button, Image } from 'react-native'
import icons from '@assets/icons'
import { MaterialIcon } from '@components/Icon'
import { Notification } from '@scenes/Notification'


const Tab = createBottomTabNavigator()

const MainTab = () => {
    return (
        <Tab.Navigator initialRouteName='Home'
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    // change icon nav bar
                    if (route.name === 'Home') {
                        return <Image source={icons.home} style={{width: 30, height: 30}}/>
                    } else if (route.name === 'Profile') {

                        return focused ? <Image source={icons.userFocus} style={{width: 30, height: 30}}/> : <Image source={icons.user} style={{width: 30, height: 30}}/>
                    } else if (route.name === 'QRCode') {
                        return <Image source={icons.qrCode} style={{width: 30, height: 30}}/>
                    } else if (route.name === 'Notification') {
                        return <Image source={icons.bell} style={{width: 30, height: 30}}/>
                    }
                    else {
                        return <Image source={icons.searchSymbol} style={{width: 30, height: 30}}/>
                    }

                    // You can return any component that you like here!
                    // return <Ionicons name={iconName} size={size} color={color} />;
                    // return <Image source={icons.home} style={{width: 30, height: 30}}/>
                    // return <MaterialIcon name={iconName} size='extraLarge' color={color} />
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray'
            })}>
            <Tab.Screen options={{ title: 'Home' }} name="Home" component={Home} />
            <Tab.Screen options={{ title: 'Search', headerTitle: 'Yêu cầu truy cập', headerShown: true }} name="Devices" component={Devices} />
            <Tab.Screen options={{ title: 'QRCode' }} name="QRCode" component={QRCode} />
            <Tab.Screen options={{ title: "Notification", tabBarBadge: 3 }} name="Notification" component={Notification} />
            <Tab.Screen
                options={{
                    headerTitle: 'Dương Khắc Tạo',
                    headerShown: true
                }}
                name='Profile'
                component={Profile}
            />
            {/* <Tab.Screen options={{ title: "Settings" }} name="Settings" component={Settings} /> */}
        </Tab.Navigator>
    )
}

export { MainTab }
