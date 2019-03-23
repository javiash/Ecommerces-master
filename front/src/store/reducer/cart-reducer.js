import { SET_CART, ADD_CART } from '../constants';

const initialState = {
  cart: [],
};

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_CART: {
            return Object.assign({}, state, {cart: action.cart})
        }
        case ADD_CART: {
            return Object.assign({}, state, {cart: state.cart.concat(action.cart)} )
        }
        default:
            return state;
  }
}
