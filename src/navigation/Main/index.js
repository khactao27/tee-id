import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Home } from '@scenes/Home'
import { Profile } from '@scenes/Profile'
import { Devices } from '@scenes/Device'
import { QRCode } from '@scenes/QRCode'
import { Scanner } from '@scenes/Scanner'
import { Button, Image, Text } from 'react-native'
import icons from '@assets/icons'
import { MaterialIcon } from '@components/Icon'
import { Notification } from '@scenes/Notification'


const Tab = createBottomTabNavigator()

const MainTab = () => {
    return (
        <Tab.Navigator initialRouteName='Home'
            screenOptions={({ route }) => ({
                tabBarLabel: () => null,
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    // change icon nav bar
                    if (route.name === 'Home') {
                        return <Image source={ focused ? icons.homeFocus : icons.home } style={{width: 30, height: 30}}/>
                    } else if (route.name === 'Profile') {
                        return <Image source={ focused ? icons.userFocus : icons.user } style={{width: 30, height: 30}}/>
                    } else if (route.name === 'QRCode') {
                        return <Image source={focused ? icons.qrCodeFocus : icons.qrCode} style={{width: 30, height: 30}}/>
                    } else if (route.name === 'Notification') {
                        return <Image source={ focused ? icons.bellFocus : icons.bell} style={{width: 30, height: 30}}/>
                    } else if(route.name === 'Application') {
                        return <Image source={ focused ? icons.applicationFocus : icons.application} style={{width: 30, height: 30}}/>
                    }
                    else {
                        return <Image source={ focused ? icons.searchSymbolFocus : icons.searchSymbol } style={{width: 30, height: 30}}/>
                    }

                    // You can return any component that you like here!
                    // return <Ionicons name={iconName} size={size} color={color} />;
                    // return <Image source={icons.home} style={{width: 30, height: 30}}/>
                    // return <MaterialIcon name={iconName} size='extraLarge' color={color} />
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray'
            })}>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen options={{headerTitle: 'Yêu cầu truy cập', headerShown: true }} name="Devices" component={Devices} />
            <Tab.Screen name="QRCode" options={{headerShown: false }} component={Scanner} />
            <Tab.Screen name="Application" options={{ tabBarBadge: 5 }} component={Notification} />
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
