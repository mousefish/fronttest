import axios from "axios";
import jwtDecode from "jwt-decode";
import { AUTH_USER, AUTH_ERROR, DEAUTH_USER } from "./types";
/*export function userSinupRequest(userData)
{
  return dispatch =>{
      return axios.get('https://jsonplaceholder.typicode.com/posts',userData).then(
          function(response)
          {
              dispatch({type: 'GET_DATA', data: response.data})
          }

      );
  }

}*/



export const logout = history => dispatch => {
  localStorage.removeItem("jwtToken");
  dispatch({ type: DEAUTH_USER });
  history.push("/");
};

export const userSignupRequest = (userData, history) => async dispatch => {
  try {
    // Need backend APIs to implement the following code (add async)
    // console.log('userdata', userData)

    // dispatch({ type: AUTH_USER });
    // localStorage.setItem("jwtToken", res.data.token);

    dispatch({ type: AUTH_USER });
    // Not sure where to redirect yet...
    history.push("/my");
  } catch (err) {
    dispatch(authError("Email already in use!"));
  }
};

export const userLogin = (userData, history) => async dispatch => {
  try {
    // Need backend APIs to implement the following code (add async)
    const res = await axios.post("http://localhost:8000/api/login", userData);
    if (res.data.token) {
      localStorage.setItem("jwtToken", res.data.token);
      dispatch({ type: AUTH_USER });
      history.push("/my");
    }else{
      dispatch(authError(res.data.error));
    }
  } catch (err) {
    dispatch(authError(err.message));
  }
};

export const authError = err => {
  return {
    type: AUTH_ERROR,
    payload: err
  };
};