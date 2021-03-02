import React from 'react'
import { createDrawerNavigator,  } from "@react-navigation/drawer";
import TabNavigator from './tabNavigator';
import LogoutPage from '../screens/logout';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { Icon } from 'react-native-elements';

const Drawer = createDrawerNavigator()

export default function DrawerNavigator() {
    return (
        <Drawer.Navigator screenOptions={{
            headerShown: true,
            headerTitleAlign: 'center',
            headerRight: () => <Icon type='material' name='notifications' />,
            headerStyle: { paddingRight: 30},
        }} >
            <Drawer.Screen name='TabNavigator' options={({ route }) => {
                const currentRoute = getFocusedRouteNameFromRoute(route)
                
                return {
                    headerTitle:'Home',
                    headerShown:currentRoute!=='TableScreen'
                }
            }} component={TabNavigator} />
            <Drawer.Screen name='LogoutPage' options={{headerShown:false}} component={LogoutPage} />
        </Drawer.Navigator>
    )
}


/*
- login : 12
- redirect to home if login success (auth-route protection) : 8
- keeplogin : 10
- navigation (tab, stack, & drawer navigation) : 30
- logout & redirect to login page after logout : 10
- home page : show summary data of covid in global : 20
- table data : 10

*/