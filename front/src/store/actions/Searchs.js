import axios from "axios";
import { SET_SEARCH, SET_SEARCHS } from "../constants";

const setSearch = search => ({
  type: SET_SEARCH,
  search
});

const setSearchs = searchs => ({
  type: SET_SEARCHS,
  searchs
});

export const fetchSearchs = book => dispatch =>
  axios
    .get(`/searchbook/${book}`)
    .then(res => res.data)
    .then(books => dispatch(setSearchs(books)));

export const fetchSearch = id => dispatch =>
  axios
    .get(`/singlebook/${id}`)
    .then(book => dispatch(setSearch(book.data)));
