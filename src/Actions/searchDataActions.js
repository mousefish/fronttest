import axios from 'axios';
import { FETCH_SEARCH_DATA } from './types';
import qs from 'qs';

const ROOT_URL = "http://localhost:8000";

const buildURL = (searchData)=>{
    return qs.stringify(searchData);
}
export const submitSearchData = (searchData, history, cb)=> async dispatch =>{
    console.log(searchData, typeof searchData)
    let q = typeof searchData === "string" ? searchData: buildURL(searchData);
    const res = await axios.get(`${ROOT_URL}/api/searchData?${q}`);

    dispatch({
        type: FETCH_SEARCH_DATA,
        payload:res.data
    });
    if(history){
        console.log('hi', q)
        history.push(`/searchResult?${q}`);
    }


};

// export const fetchSearchData = (searchData, history, cb)=> async dispatch =>{
//     let q = buildURL(searchData)
//     const res = await axios.get(`${ROOT_URL}/api/searchData?${q}`);

//     dispatch({
//         type: FETCH_SEARCH_DATA,
//         payload:res.data
//     });
//    history.push(`/searchResult?${q}`);

// };







