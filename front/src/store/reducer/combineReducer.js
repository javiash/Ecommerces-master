import { combineReducers } from 'redux';
import loginReducer from './login-reducer';
import searchReducer from './Search-reducer';
import cartReducer from './cart-reducer';


export default combineReducers({
  login: loginReducer,
  searches: searchReducer,
  cart: cartReducer,
});
