import { combineReducers } from 'redux';
import loginReducer from "./login-reducer"
import  SearchReducer from "./Search-reducer"

export default combineReducers({
    Search:SearchReducer,
})