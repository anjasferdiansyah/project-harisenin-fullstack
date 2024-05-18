import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from '../types';

const initialState = {
  userId: null,
  isLoggedIn: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        userId: action.payload.userId,
        isLoggedIn: true,
      };
    case LOGIN_FAILURE:
    case LOGOUT:
      return {
        ...state,
        userId: null,
        isLoggedIn: false,
      };
    default:
      return state;
  }
};

export default authReducer;
