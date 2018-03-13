import axios from "axios";
import { ADD_WISH_DATA, WISH_ERROR, FETCH_WISH_DATA, HANDLE_WISH_LIKES, FETCH_ONE_WISH } from "./types";

import config from "../config/config";
const ROOT_URL = config["ROOT_URL"];


export const submitWishData = (data, history) => async dispatch => {
    console.log("wish data", data);
    try {
        const res = await axios.post(`${ROOT_URL}/api/addWish`, data, {
            headers: {
                authorization: localStorage.getItem("jwtToken")
            }
        });
        dispatch({
            type: ADD_WISH_DATA,
            payload: res.data
        });
        history.push("/wish");
    } catch (err) {
        dispatch(wishErr(err));
    }
};

export const fetchWishData=()=> async dispatch=>{
    const res = await axios.get(`${ROOT_URL}/api/fetchWish`,  {
            headers: {
                authorization: localStorage.getItem("jwtToken")
            }
        });
    dispatch({
        type:FETCH_WISH_DATA,
        payload:res.data
    });
}

export const fetchOneWish =(wishId)=>async dispatch=>{

        const res = await axios.get(`${ROOT_URL}/api/wish/${wishId}`,  {
            headers: {
                authorization: localStorage.getItem("jwtToken")
            }
        });
        dispatch({
            type: FETCH_ONE_WISH,
            payload: res.data
        });

};

export const sendWishLike = (wishId) => async dispatch=>{
    const res = await axios.post(`${ROOT_URL}/api/sendWishLike/${wishId}`,{}, {
            headers: {
                authorization: localStorage.getItem("jwtToken")
            }
        });
    dispatch({
        type: HANDLE_WISH_LIKES,
        payload:res.data
    });
};

export const wishErr = err => {
    return {
        type: WISH_ERROR,
        payload: err
    };
};