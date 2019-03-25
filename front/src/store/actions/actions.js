/* eslint-disable no-unused-expressions */
import Axios from 'axios';
import {
  SET_SHOWMODAL, SET_HIDEMODAL, SET_LOGIN, SET_CART, ADD_CART,
  SET_COMMENTS,
} from '../constants';


// Login-----------------------

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
    dispatch(setLogin(user.data));
    return user.data;
  });

export const fetchLogin = () => dispatch => Axios.get('/auth/me')
  .then((res) => {
    if (res != null) {
      dispatch(setLogin(res.data));
    }
  });

export const setLogout = () => dispatch => Axios.get('/auth/logout', (req, res) => {
  res.send('logout');
})
  .then(() => {
    dispatch(setLogin(null));
  });

// Cart----------------

export const setCart = function setCart(cart) {
  return {
    type: SET_CART,
    cart,
  };
};

const addCart = function addCart(book) {
  return {
    type: ADD_CART,
    book,
  };
};

export const fetchShopcart = id => dispatch => Axios.get(`/cart/${id}`)
  .then((cart) => {
    if (cart.data.length === 0) {
      const newCart = JSON.parse(localStorage.getItem('Carrito'));
      newCart ? dispatch(setCart(newCart)) : dispatch(setCart([]));
    } else {
      dispatch(setCart(cart.data));
    }
  });

export const setDBCart = id => (dispatch, getState) => Axios.post(`/cart/new/${id}`, getState().cart.cart);

export const userAddCart = (book, id) => (dispatch, getState) => Axios.post(`/cart/add/${id}`, book)
  .then(((res) => {
    console.log(res);
    if (res.data === 'update') {
      const beforeState = getState().cart.cart;
      const newCart = beforeState.map(singleBook => ((singleBook.id === book.id)
        ? { ...singleBook, quantity: singleBook.quantity + book.quantity } : singleBook));
        console.log(newCart)
      dispatch(setCart(newCart));
    } else if (res.data === 'add') {
      dispatch(addCart(book));
    }
  }));

export const noUserAddCart = book => (dispatch, getState) => {
  const beforeAdd = getState().cart.cart;
  if (beforeAdd.some(singleBook => singleBook.id === book.id)) {
    const afterAdd = beforeAdd.map(singleBook => (singleBook.id === book.id
      ? { ...singleBook, quantity: singleBook.quantity + book.quantity } : singleBook));
    dispatch(setCart(afterAdd));
  } else {
    dispatch(addCart(book));
  }
  localStorage.setItem('Carrito', JSON.stringify(getState().cart));
};


export const userRemoveCart = (book, id) => (dispatch, getState) => {
  if (id) {
    Axios.post(`/cart/remove/${id}`, book)
      .then(() => {
        const beforeState = getState().cart.cart;
        const newCart = beforeState.filter(singleBook => singleBook.id !== book.id);
        return dispatch(setCart(newCart));
      });
  } else {
    console.log('BOOK', book);
    const beforeState = getState().cart.cart;
    const newCart = beforeState.filter(singleBook => singleBook.id != book);
    console.log(newCart);
    dispatch(setCart(newCart))
    localStorage.setItem('Carrito', JSON.stringify(getState().cart));
  }
};

export const userCleanCart = id => dispatch => Axios.post(`/cart/clean/${id}`)
  .then(() => dispatch(setCart([])));


// Comments

const setComments = function setComments(comments) {
  return {
    type: SET_COMMENTS,
    comments,
  };
};

export const setComment = (comment, rating, id, bookId) => Axios.post(`/comments/${id}`, {
  content: comment,
  rating,
  bookId,
});

export const fetchComments = id => dispatch => Axios.get(`/comments/${id}`)
  .then(comments => dispatch(setComments(comments.data)));
