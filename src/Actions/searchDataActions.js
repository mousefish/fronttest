import axios from 'axios';
import { FETCH_SEARCH_DATA } from './types';
import qs from 'qs';

const ROOT_URL = "http://localhost:8000";

const buildURL = (searchData)=>{
    return qs.stringify(searchData);
}
export const submitSearchData = (searchData, history, cb)=> async dispatch =>{
    let q = typeof searchData === "string" ? searchData : buildURL(searchData);
    const res = await axios.get(`${ROOT_URL}/api/searchData?${q}`);

    dispatch({
        type: FETCH_SEARCH_DATA,
        payload:res.data
    });
    if(history){
        history.push(`/searchResult?${q}`);
    }
    cb();



    // localStorage.removeItem("hist");
    // console.log("remove hist", localStorage.hist)

    if(res.data.length === 0){return null}

    console.log(localStorage.hist);
    let location = res.data[0].location;
    let category = res.data[0].category === "activity" ? "活动":"愿望";
    let record = location+", "+category;
    let newRecord;
    let hist = localStorage.hist;
    if(!hist){
        localStorage.hist = record;
        console.log("frst", record);
    }else{
         let lst = hist.split("|");
         let lstWithoutDup = lst.filter((rec)=>{
            return rec!== record;
        });
         if(lstWithoutDup.length > 0){
             newRecord = record + "|" + lstWithoutDup.join("|")
             // 珠海市 广东省,activity|大连市 辽宁省,activity|
         }else{
            newRecord = record + "|";
         }

         localStorage.hist = newRecord;
    }

};








