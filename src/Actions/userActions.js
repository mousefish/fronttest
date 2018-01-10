import axios from 'axios';
import { FETCH_PROFILE_DATA } from './types';


const ROOT_URL = "http://localhost:8000";

export const fetchUser = (userId) => async dispatch =>{

   const res = await axios.get(`${ROOT_URL}/api/user/${userId}`);

   dispatch({
     type:FETCH_PROFILE_DATA,
     payload:res.data
   });

};