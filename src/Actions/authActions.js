import axios from "axios";
import jwtDecode from "jwt-decode";
import { AUTH_USER, AUTH_ERROR, DEAUTH_USER } from "./types";

const ROOT_URL = "http://localhost:8000/api";

export const logout = history => dispatch => {
  localStorage.removeItem("jwtToken");
  dispatch({ type: DEAUTH_USER });
  history.push("/");
};

export const userSignupRequest = (userData, history) => async dispatch => {
  try {
    // Need backend APIs to implement the following code (add async)
    // console.log('userdata', userData)
    const res = await axios.post(`${ROOT_URL}/signup`, userData);
    if (res.data.token) {
      localStorage.setItem("jwtToken", res.data.token);
      dispatch({ type: AUTH_USER });
      history.push("/my");
    } else {
      dispatch(authError({signupErr:res.data.error}));
    }
  } catch (err) {
    dispatch(authError({signupErr:err.message}));
  }
};

export const userLogin = (userData, history) => async dispatch => {
  try {
    // Need backend APIs to implement the following code (add async)
    const res = await axios.post(`${ROOT_URL}/login`, userData);
    if (res.data.token) {
      localStorage.setItem("jwtToken", res.data.token);
      dispatch({ type: AUTH_USER });
      history.push("/my");
    } else {
      dispatch(authError({loginErr:res.data.error}));
    }
  } catch (err) {
    dispatch(authError({loginErr:err.message}));
  }
};

export const authError = errObj => {
  return {
    type: AUTH_ERROR,
    payload: errObj
  };
};