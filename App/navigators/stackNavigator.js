import React, { useState, useEffect } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Login from '../screens/login'
import { useDispatch, useSelector } from 'react-redux'
import { keepLogin } from '../actions'
import { ActivityIndicator, Text, View } from 'react-native'
import DrawerNavigator from './drawerNavigator'

const Stack = createStackNavigator()

export default function StackNavigator() {
    const dispatch = useDispatch()
    const { username } = useSelector(state => state.user)
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        if (!username) {
            setLoading(true)
            dispatch(keepLogin(_ => setLoading(false)))
        }
    }, [username])

    if (loading) return (
        <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
            <Text style={{ color: 'gray', fontWeight:'bold',fontSize:25,marginBottom:20}}>Covid 19</Text>
            <ActivityIndicator size={50} color='gray' />
        </View>
    )

    return (
        <Stack.Navigator screenOptions={{headerShown:false}}>
            {
                username?
                <Stack.Screen name='DrawerNavigator' component={DrawerNavigator} />:
                <Stack.Screen name='Login' component={Login} />
            }
        </Stack.Navigator>
    )
}
