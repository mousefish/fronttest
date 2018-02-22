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
    const res = await axios.post(`${ROOT_URL}/signup`, userData);
    if (res.data.token) {
      localStorage.setItem("jwtToken", res.data.token);
      dispatch({ type: AUTH_USER });
      history.goBack();
    } else {

      dispatch(authError(res.data));
    }
  } catch (err) {

    dispatch(authError(err));
  }
};

export const userLogin = (userData, history) => async dispatch => {
  try {
      const res = await axios.post(`${ROOT_URL}/login`, userData);
      localStorage.setItem("jwtToken", res.data.token);
      dispatch({ type: AUTH_USER });
      history.goBack();

  } catch (err) {
    // err is an Object - Error: Request failed with status code 401.
    // err.message - string
    dispatch(authError("邮箱或者密码不正确！"));
  }
};

export const authError = err => {
  return {
    type: AUTH_ERROR,
    payload: err
  };
};