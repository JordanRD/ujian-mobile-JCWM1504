
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
const URL = 'https://api.jsonbin.io/b/603deef49342196a6a6b6e4d'




export const login = (payload) => async (dispatch) => {
    try {
        await AsyncStorage.setItem('username', payload.username)
        dispatch({ type: 'LOG_IN', payload })
    } catch (error) {
        console.log(error)
    }
}
export const logout = () => async (dispatch) => {
    try {
        await AsyncStorage.clear()
        dispatch({ type: 'LOG_OUT' })
    } catch (error) {
        console.log(error)
    }
}

export const keepLogin = (action) => async (dispatch) => {
    try {
        let username = await AsyncStorage.getItem('username')
        if (username) {
            console.log(username)
            dispatch({ type: 'LOG_IN', payload:{username} })
        }
        action()
    } catch (error) {
        console.log(error)
        action()
    }
}

export const getAll = async(action) => {
    try {
        const { data } = await axios.get(URL,
            {
                headers:
                {
                    'secret-key': '$2b$10$XVA6uIeILpiXpxqgFYx8n.IklrVk1TdSlHLc8EaCP9AI89VcehrCS'
                }
            })
        action(data.Global)
    } catch (error) {
        console.log(error)
    }
}

export const getAllCountry = async (action) => {
    try {
        const { data } = await axios.get(URL,{
                headers:
                {
                    'secret-key': '$2b$10$XVA6uIeILpiXpxqgFYx8n.IklrVk1TdSlHLc8EaCP9AI89VcehrCS'
                }
            })
        // console.log(data)
        action(data.Countries)
    } catch (error) {
        console.log(error)
    }
}