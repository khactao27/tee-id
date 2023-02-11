import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Home } from '@scenes/Home'
import { Profile } from '@scenes/Profile'
import { Devices } from '@scenes/Device'
import { QRCode } from '@scenes/QRCode'
import { Button } from 'react-native'
// import { Notification } from '@scenes/Notification'


const Tab = createBottomTabNavigator()

const MainTab = () => {
    return (
        <Tab.Navigator initialRouteName='Home'
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = focused
                            ? 'ios-information-circle'
                            : 'ios-information-circle-outline';
                    } else if (route.name === 'Profile') {
                        iconName = focused ? 'ios-list' : 'ios-list-outline';
                    }

                    // You can return any component that you like here!
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray'
            })}>
            <Tab.Screen options={{ tabBarBadge: 3, title: 'Home' }} name="Home" component={Home} />
            <Tab.Screen options={{ title: 'Session', headerTitle: 'Yêu cầu truy cập', headerShown: true }} name="Devices" component={Devices} />
            <Tab.Screen options={{ title: 'QRCode' }} name="QRCode" component={QRCode} />
            {/* <Tab.Screen options={{ title: "Notification" }} name="Notification" component={Notification} /> */}
            <Tab.Screen
                options={{
                    title: 'Profile',
                    headerTitle: 'Dương Khắc Tạo',
                    headerShown: true,
                    headerRight: () => (
                        <Button
                            onPress={() => alert('This is a button!')}
                            title="Info"
                        />
                    ),
                }}
                name="Profile"
                component={Profile}
            />
            {/* <Tab.Screen options={{ title: "Settings" }} name="Settings" component={Settings} /> */}
        </Tab.Navigator>
    )
}

export { MainTab }
