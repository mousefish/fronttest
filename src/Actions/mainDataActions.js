import axios from 'axios';
import { FETCH_MAIN_DATA } from './types';

export const fetchMainData = () => dispatch =>{

    // backend API:
    // const res = await axios.get('/api/mainData');

    // dispatch({
    //     type: FETCH_MAIN_DATA,
    //     payload:res.data
    // })

    // temp
    dispatch({
        type: FETCH_MAIN_DATA
    });

};