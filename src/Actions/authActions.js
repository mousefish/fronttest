import axios from 'axios';
import AuthApi from '../ManagedApi/AuthApi'

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


export function userSinupRequest(userData)
{
  return dispatch=>{
    return axios.post(AuthApi.SinUp, userData);
  }

}
