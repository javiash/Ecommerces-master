

const initialState = {
    cart: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_CART: {
            return Object.assign({}. state, {cart: action.cart})
        }
        default:
            return state;
    }
}