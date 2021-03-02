import React from 'react'
import { View,Button, Text } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../actions'

export default function LogoutPage() {
    const {username}=useSelector(state=>state.user)
    const dispatch = useDispatch()
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{fontSize:40,marginBottom:30}}>{ username }</Text>
            <Button title='logout' onPress={ ()=>dispatch(logout())}/>
        </View>
    )
}
