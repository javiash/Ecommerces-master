import { combineReducers } from 'redux';
import loginReducer from './login-reducer';
import searchReducer from "./Search-reducer"


export default combineReducers({ 
    login: loginReducer,
    searches:searchReducer
});
