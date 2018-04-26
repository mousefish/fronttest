import axios from "axios";
import jwtDecode from "jwt-decode";
import qs from "qs";

import {
  AUTH_USER,
  AUTH_ERROR_SIGNUP,
  AUTH_ERROR_LOGIN,
  DEAUTH_USER
} from "./types";

import config from "../config/config";

const ROOT_URL = config["ROOT_URL"];

const buildURL = searchData => {
  return qs.stringify(searchData);
};

export const logout = (history, version) => dispatch => {
  localStorage.removeItem("jwtToken");
  dispatch({ type: DEAUTH_USER });
  window.location.reload(`/openPage/${version}`)
};

export const userSignupRequest = (userData, history) => async dispatch => {
  try {
    const res = await axios.post(`${ROOT_URL}/api/signup`, userData);
    if (res.data.token) {
      localStorage.setItem("jwtToken", res.data.token);
      dispatch({
        type: AUTH_USER
      });

      history.push("/completeUserProfile");
    } else {
      dispatch(authError(AUTH_ERROR_SIGNUP, res.data));
    }
  } catch (err) {
    dispatch(authError(err.message));
  }
};

export const completeUserProfile = (value, history) => async dispatch => {
  try {
    const res = await axios.post(`${ROOT_URL}/api/completeUserProfile`, value, {
      headers: {
        authorization: localStorage.getItem("jwtToken")
      }
    });
    if (res.data === "success") {
      dispatch({
        type: AUTH_USER
      });
      history.push("/activity");
    } else {
      dispatch(authError(AUTH_ERROR_SIGNUP, res.data));
    }
  } catch (err) {
    dispatch(authError(AUTH_ERROR_SIGNUP, err.message));
  }
};

export const userLogin = (userData, history, version) => async dispatch => {
  try {
    const res = await axios.post(`${ROOT_URL}/api/login`, userData);
    localStorage.setItem("jwtToken", res.data.token);
    dispatch({
      type: AUTH_USER
    });

    history.push("/recommendation/"+version);
  } catch (err) {
    // err is an Object - Error: Request failed with status code 401.
    // err.message - string
    dispatch(authError(AUTH_ERROR_LOGIN, "邮箱或者密码不正确！"));
  }
};

export const authError = (type, err) => {
  return {
    type: type,
    payload: err
  };
};