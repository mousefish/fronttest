// needs APIs, axios and reduxThunk here later
// import axios from 'axios';
import { FETCH_HISTORY_DATA, CLEAR_HISTORY_DATA } from "./types";

export const clearHistoryData = () => {

    return {
        type: CLEAR_HISTORY_DATA,
        payload:[]
    };
};

export const fetchHistoryData = () => dispatch => {
    // request to APIs
    // const res = await axios.get('/api/historyData')
    // dispatch({
    //     type:FETCH_HISTORY_DATA,
    //     payload:res.data
    // });

    // temp

    dispatch({
        type: FETCH_HISTORY_DATA
    });
};