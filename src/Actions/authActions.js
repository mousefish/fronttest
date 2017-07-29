import axios from 'axios';
import AuthApi from '../ManagedApi/AuthApi'
import setAuthorizationToken from '../Utlity/setAuthorizationToken'
import jwtDecode from 'jwt-decode'
import {SET_AUTH} from './types'
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

export function setAuthUser(user)
{
  return {
    type: SET_AUTH,
    user
  }
}

export function logout(){
  return dispatch=>
  {
    localStorage.removeItem('jwtToken');
    setAuthorizationToken(false);
    dispatch(setAuthUser({}));
  }

}

export function userSinupRequest(userData)
{
  return dispatch=>{
    return axios.post(AuthApi.SinUp, userData);
  }

}

export function userLogin(userData)
{
  return dispatch=>{
    return axios.post(AuthApi.Login, userData).then(res=>{
      const token = res.data.token;
      localStorage.setItem('jwtToken', token);
      setAuthorizationToken(token);
      console.log(jwtDecode(token));
      dispatch(setAuthUser(jwtDecode(token)));
    });
  }
}
