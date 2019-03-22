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
    console.log(user)
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
    console.log('CART!!!!!!', cart)
    if (cart.data === []) {
      const newCart = JSON.parse(localStorage.getItem('Carrito'))
      console.log('LOCAL!!!!', newCart)
       newCart ? dispatch(setCart(newCart)) : dispatch(setCart([]));
    }else {
      dispatch(setCart(cart.data))
    }
  })

export const setDBCart = (id) => dispatch => Axios.get(`/cart/${id}`, (req, res) => {
  res.send(getState().cart)
})

export const userAddCart = (book, id) => dispatch => Axios.post(`/cart/add/${id}`, book)
  .then((res => {
    if (res === 'update') {
      const beforeState = getState().cart.cart
      let newCart = beforeState.map((singleBook) => singleBook.id === book.id ? { ...singleBook, quantity: singleBook.quantity += book.quantity } : singleBook)
      dispatch(setCart(newCart))
    } else if (res === 'add') {
      dispatch(addCart(book))
    }
  }))

export const noUserAddCart = (book) => dispatch => dispatch(addCart(book))
  .then(localStorage.setItem('Carrito', JSON.stringify(getState().cart)))


export const userRemoveCart = (book, id) => dispatch => Axios.post(`/cart/${id}`, book)
  .then(() => {
    const beforeState = getState().cart.cart
    let newCart = beforeState.filter(e => e.id != book.id)
    dispatch(setCart(newCart))
  }
  )
