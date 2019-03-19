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

// pedidos al server
export const fetchSearchs = () => dispatch =>
  axios
    .get("/searchs")
    .then(res => res.data)
    .then(albums => dispatch(setSearchs(albums)));

export const fetchSearch = id => dispatch =>
  axios
    .get(`/searchs/${id}`)
    .then(res => res.data)
    .then(album => dispatch(setSearch(album)));
