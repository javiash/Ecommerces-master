import { SET_SEARCH, SET_SEARCHS } from "../constants";

const initialState = {
  search: {},
  searchs: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_SEARCH: {
      return Object.assign({}, state, { search: action.search });
    }
    case SET_SEARCHS: {
      return Object.assign({}, state, { searchs: action.searchs });
    }
    default:
      return state;
  }
}
