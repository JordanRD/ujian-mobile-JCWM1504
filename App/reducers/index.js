import { applyMiddleware, combineReducers,createStore } from "redux";
import userReducer from './userReducer'
import thunk from 'redux-thunk'
const allReducer = combineReducers({
    user: userReducer
})

export default createStore(allReducer, applyMiddleware(thunk))
