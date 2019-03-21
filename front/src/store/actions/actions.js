import Axios from 'axios';
import { SET_SHOWMODAL, SET_HIDEMODAL, SET_LOGIN, SET_CART, ADD_CART } from '../constants';


//Login-----------------------

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

export const setLogin = function setLogin(user) {
  return {
    type: SET_LOGIN,
    login: user,
  };
};

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
 
//Cart----------------

export const setCart = function setCart(cart) {
  return {
    type: SET_CART,
    cart,
  }
}

const addCart = function addCart(book) {
  return {
    type: ADD_CART,
    book,
  }
}


export const fetchShopcart = (id) => dispatch => Axios.get(`/cart/${id}`)
  .then((cart) => {
    if (cart === []) {
      dispatch(setCart(localStorage.getItem('Carrito')))
    }
    dispatch(setCart(cart))
  })

export const setDBCart = (id) => dispatch => Axios.get(`/cart/${id}`, (req, res) => {
  res.send(getState().cart)
})

export const userAddCart = (book, id) => dispatch => Axios.post(`/cart/add/${id}`, (req, res) => {
  res.send(book)
})
  .then((res => {
    if (res === 'ok') {
      const beforeState = getState().cart.cart
      let newCart = beforeState.map((singleBook) => singleBook.id === book.id ?
        { ...singleBook, quantity: singleBook.quantity += book.quantity } : singleBook
      )
      dispatch(setCart(newCart))
    } else {
      dispatch(addCart(book))
    }
  })) 
