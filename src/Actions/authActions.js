import axios from "axios";
import jwtDecode from "jwt-decode";
import qs from "qs";

import {
  AUTH_USER,
  AUTH_ERROR,
  DEAUTH_USER,
  OK_TO_GO,
} from "./types";

import config from "../config/config";

const ROOT_URL = config["ROOT_URL"];

const buildURL = searchData => {
  return qs.stringify(searchData);
};

export const logout = history => dispatch => {
  localStorage.removeItem("jwtToken");
  localStorage.removeItem("userName");
  dispatch({ type: DEAUTH_USER });
  history.push("/openPage");
};

export const verifySignupEmail = emailObj => async dispatch => {
  try {
    let q = buildURL(emailObj);
    const res = await axios.get(`${ROOT_URL}/api/verifySignupEmail?${q}`);
    if (res.data) {
      dispatch({ type: OK_TO_GO });
    } else {
      dispatch(authError("该邮箱已经存在！"));
    }
  } catch (err) {
    dispatch(authError(err.message));
  }
};

export const userSignupRequest = (userData, history) => async dispatch => {
  try {
    const res = await axios.post(`${ROOT_URL}/api/signup`, userData);
    if (res.data.token) {
      localStorage.setItem("jwtToken", res.data.token);
       // store the user info for visiting basic info later, my story, those items under my account later
      localStorage.setItem("userName", res.data.userName);
      dispatch({
        type: AUTH_USER,

      });

      history.push("/myBasicInfo");
    } else {
      dispatch(authError(res.data));
    }
  } catch (err) {
    dispatch(authError(err.message));
  }
};

export const userLogin = (userData, history) => async dispatch => {
  try {
    const res = await axios.post(`${ROOT_URL}/api/login`, userData);

    localStorage.setItem("jwtToken", res.data.token);
    // store the user info for visiting basic info later, my story, those items under my account later
    localStorage.setItem("userName", res.data.userName);

    dispatch({
      type: AUTH_USER,
    });

    history.push("/recommendation");
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