import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import LogoutPage from '../screens/logout'
import Home from '../screens/home'
import TableScreen from '../screens/tableScreen'
import { Icon } from 'react-native-elements'


const Tab = createBottomTabNavigator()

export default function TabNavigator() {
    return (
        <Tab.Navigator  >
            <Tab.Screen name='Home' options={{tabBarIcon:()=><Icon type='material' name='home'/>}} component={Home} />
            <Tab.Screen name='TableScreen' options={{ tabBarIcon: () => <Icon type='material' name='poll' /> }} component={TableScreen} />
        </Tab.Navigator>
    )
}
