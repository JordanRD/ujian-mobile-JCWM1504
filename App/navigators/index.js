import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import StackNavigator from './stackNavigator'
import globalState from '../reducers'
import { Provider } from 'react-redux'


export default function Navigator() {
    return (
        <Provider store={globalState}>
            <NavigationContainer>
                <StackNavigator />
            </NavigationContainer>
        </Provider>
    )
}
