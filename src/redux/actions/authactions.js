import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import { auth } from "../../firebase/firebaseConfig";

export const REGISTER_USER = "REGISTER_USER";
export const LOGIN_USER = "LOGIN_USER";
export const LOGOUT_USER = "LOGOUT_USER";

export const register = (email, password) => async (dispatch) => {
  try {
    const userCredentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    console.log(userCredentials, "user");

    dispatch({ type: REGISTER_USER, payload: userCredentials.user });
  } catch (error) {
    console.error(error);
  }
};
export const login = (email, password) => async (dispatch) => {
  try {
    const userCredentials = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(userCredentials, "login");
    dispatch({ type: LOGIN_USER, payload: userCredentials });
  } catch (err) {
    console.error("Error logging in",err.message);
  }
};
export const logout = () => async (dispatch) => {
  try {
    await signOut(auth);
    dispatch({ type: LOGOUT_USER });
  } catch (err) {
    console.error("Error logging out");
  }
};
