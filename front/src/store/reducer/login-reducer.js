import { SET_SHOWMODAL, SET_HIDEMODAL, SET_LOGIN } from '../constants';

const initialState = {
  showModal: false,
  isLogin: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_SHOWMODAL: {
      return Object.assign({}, state, { showModal: action.show });
    }
    case SET_HIDEMODAL: {
      return Object.assign({}, state, { showModal: action.hide });
    }
    case SET_LOGIN: {
      return Object.assign({}, state, { isLogin: action.login });
    }
    default:
      return state;
  }
}
