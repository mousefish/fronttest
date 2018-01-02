import axios from "axios";
import { ADD_ACTIVITY_DATA } from './types';

const ROOT_URL = "http://localhost:8000";
export const submitActivityData = (data, history) => async dispatch=> {
    console.log('activity data', data);
    // request to API
    const res = await axios.post(`${ROOT_URL}/api/addActivity`, data, {
        headers:{
            authorization:localStorage.getItem("jwtToken")
        }
    });
     dispatch({
        type: ADD_ACTIVITY_DATA,
        payload:res.data
    });

};