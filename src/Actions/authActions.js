import axios from 'axios';
import AuthApi from '../ManagedApi/AuthApi';
import setAuthorizationToken from '../Utlity/setAuthorizationToken';
import jwtDecode from 'jwt-decode';
import {SET_AUTH, AUTH_USER, AUTH_ERROR, DEAUTH_USER} from './types';
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

// What's this for?
export const setAuthUser = user => {
  type: SET_AUTH, user;
};

export const logout = () => dispatch => {
  localStorage.removeItem("jwtToken");
  setAuthorizationToken(false);
  // dispatch(setAuthUser({ type: SET_AUTH}));
  return { type: DEAUTH_USER };
};


export const userSignupRequest = (userData,history) => (dispatch) => {

  try {
    // Need backend APIs to implement the following code (add async)
    // console.log('userdata', userData)
    // const res = await axios.post(AuthApi.SinUp, userData);
    // dispatch({ type: AUTH_USER });
    // localStorage.setItem("jwtToken", res.data.token);

    dispatch({type:AUTH_USER});
    // Not sure where to redirect yet...
    history.push('/my');
  } catch(err){
    dispatch(authError('Email already in use!'));
  }
};

export const userLogin = (userData, history) => dispatch => {

  try {
    // Need backend APIs to implement the following code (add async)
    // const res = await axios.post(AuthApi.Login, userData);
    // const token = res.data.token;
    // localStorage.setItem("jwtToken", token);
    // setAuthorizationToken(token);
    // console.log(jwtDecode(token));
    // dispatch(setAuthUser(jwtDecode(token)));
    dispatch({type:AUTH_USER});
    // Not sure where to redirect yet...
    history.push('/my');

  } catch (err) {
    dispatch(authError("Bad request!"));
  }
};


export const sendSearchData = data =>{
    console.log('traveldata', data);
    // request to APIs


    // temp
    return {
        type:'AUTH_USER',
        payload:data

    }
}

export const authError = err => {
  return {
    type: AUTH_ERROR,
    payload: err
  }
}

