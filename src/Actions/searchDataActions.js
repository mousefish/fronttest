import axios from "axios";
import { FETCH_SEARCH_DATA } from "./types";
import qs from "qs";
import generateSearchHistory from "../Utility/generateSearchingHistory";

import config from "../config/config";

const ROOT_URL = config["ROOT_URL"];

const buildURL = searchData => {
    return qs.stringify(searchData);
};
export const submitSearchData = (searchData, history, cb) => async dispatch => {
    let q = typeof searchData === "string" ? searchData : buildURL(searchData);
    const res = await axios.get(`${ROOT_URL}/api/searchData?${q}`);

    dispatch({
        type: FETCH_SEARCH_DATA,
        payload: res.data
    });
    // console.log("clicked!", res.data)
    if (history) {
        history.push(`/searchResult?${q}`);
    }
    if(cb){
        cb();
    }
    //  for Browsing search history
    generateSearchHistory(searchData, res.data);

};