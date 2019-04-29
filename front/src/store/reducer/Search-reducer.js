import { SET_SEARCH, SET_SEARCHS, SET_COMMENTS } from '../constants';

const initialState = {
  search: {},
  searchs: [],
  comments: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_SEARCH: {
      return Object.assign({}, state, { search: action.search });
    }
    case SET_SEARCHS: {
      return Object.assign({}, state, { searchs: action.searchs });
    }
    case SET_COMMENTS: {
      return Object.assign({}, state, { comments: action.comments });
    }
    default:
      return state;
  }
}
