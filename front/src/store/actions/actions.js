import Axios from 'axios';
import { SET_SHOWMODAL, SET_HIDEMODAL, SET_LOGIN, SET_CART } from '../constants';

export const setShowModal = function setShowModal() {
  return {
    type: SET_SHOWMODAL,
    show: true,
  };
};

export const setHideModal = function setHideModal() {
  return {
    type: SET_HIDEMODAL,
    hide: false,
  };
};

const setLogin = function setLogin(user) {
  return {
    type: SET_LOGIN,
    login: user,
  };
};

export const setCart = function setCart(cart){
  return {
    type: SET_CART,
    cart,
  }
}

export const fetchUser = (email, password) => dispatch => Axios.post('/auth/login', {
  email,
  password,
})
  .then((user) => {
    dispatch(setLogin(user.data))
    return user.data;
  })

export const fetchLogin = () => dispatch => Axios.get('/auth/me')
  .then((res) => {
    if (res != null) {
      dispatch(setLogin(res.data));
    }
  });

  export const fetchShopcart = (id) => dispatch => Axios.get(`/cart/${id}`)
    .then((cart) => {
      if(cart === []){
        dispatch(setCart(localStorage.getItem('Carrito')))
      }
      dispatch(setCart(cart))
    })