import { googleLogin, googleLogout } from '../../api/googleAuth';
import { SIGN_IN, SIGN_OUT } from '../types/auth';

export const signIn = () => async (dispatch) => {
  try {
    const user = await googleLogin();
    dispatch({ type: SIGN_IN, payload: user });
  } catch (e) {
    console.log(e);
  }
};

export const signOut = () => async (dispatch) => {
  try {
    await googleLogout();
    dispatch({ type: SIGN_OUT });
  } catch (e) {
    console.log(e);
  }
};
