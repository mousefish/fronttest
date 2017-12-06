import axios from 'axios';
import { FETCH_PROFILE_DATA } from './types';

export const fetchProfileData = (name) => dispatch =>{

    // backend API:
    // const res = await axios.get(`/api/${name}`);

    // dispatch({
    //     type: FETCH_PROFILE_DATA,
    //     payload:res.data
    // })

    // temp
    console.log(name);
    dispatch({
        type: FETCH_PROFILE_DATA
    });

};