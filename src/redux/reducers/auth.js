import { SIGN_IN, SIGN_OUT } from '../types/auth';

const initState = {
  isAuth: false,
  user: null,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case SIGN_IN:
      return { ...state, isAuth: true, user: action.payload };

    case SIGN_OUT:
      return { ...state, isAuth: false, user: null };

    default:
      return state;
  }
};

export default authReducer;
