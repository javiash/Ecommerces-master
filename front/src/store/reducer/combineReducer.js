import { combineReducers } from 'redux';
import loginReducer from './login-reducer';
import cartReducer from './cart-reducer';


export default combineReducers({ 
    login: loginReducer,
    cart: cartReducer, 
});
