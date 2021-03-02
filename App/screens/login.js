import React, { useState } from 'react'
import { View, Text, Button } from 'react-native'
import { Input } from 'react-native-elements'
import { useDispatch } from 'react-redux'
import { login } from '../actions'


export default function Login({ navigation }) {
    const [userData, setUserdata] = useState({ username: '', password: '' })
    const [errorMessage, setErrorMessage] = useState('')
    const dispatch = useDispatch()

    const handleLogin = () => {
        if (!userData.username || !userData.password) return setErrorMessage('all input can not be empty')
        setErrorMessage('')
        dispatch(login(userData))
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ justifyContent: 'space-between', alignItems: 'center', height: 300, }}>
                <Text style={{ fontSize: 40 }}>Login</Text>
                <Text style={{ color: 'red', height: 50 }}>{errorMessage}</Text>
                <Input
                    placeholder='username'
                    containerStyle={{ width: 300 }}
                    value={userData.username}
                    onChangeText={username => setUserdata(prev => ({ ...prev, username }))}
                />
                <Input
                    placeholder='password'
                    containerStyle={{ width: 300 }}
                    value={userData.password}
                    onChangeText={password => setUserdata(prev => ({ ...prev, password }))}
                />
                <Button title='login' onPress={handleLogin} />
            </View>

        </View>
    )
}
