import axios from 'axios';
import { SET_SEARCH, SET_SEARCHS } from '../constants';

const setSearch = search => ({
  type: SET_SEARCH,
  search,
});

const setSearchs = searchs => ({
  type: SET_SEARCHS,
  searchs,
});

// pedidos al server
export const fetchSearchs = (book) => dispatch =>
  axios
    .get(`/SearchBook/${book}`)
    .then(res => res.data)
    .then(books => console.log(books, 'estoy en el action'))
    .then(books => dispatch(setSearchs(books)));

export const fetchSearch = id => dispatch => axios
  .get(`/search/${id}`)
  .then(res => res.data)
  .then(book => dispatch(setSearch(book)));
