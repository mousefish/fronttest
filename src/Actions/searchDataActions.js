 // needs APIs, axios and reduxThunk here later
// import axios from 'axios';
import { FETCH_SEARCH_DATA } from './types';



export const submitSearchData = (searchData, history)=> dispatch =>{
    // console.log('searchData', searchData);
    // request to API
    // const res = await axios.post('/api/searchData', searchData);
    history.push('/searchResult');

    // dispatch({
    //     type: FETCH_SEARCH_DATA,
    //     payload:res.data
    // });

    // temp
       dispatch({
           type: FETCH_SEARCH_DATA
       });

};

export const fetchSearchData = () => dispatch => {
    dispatch({
        type: FETCH_SEARCH_DATA
    });

};



