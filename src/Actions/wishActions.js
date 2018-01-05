import axios from "axios";
import { ADD_WISH_DATA, WISH_ERROR } from "./types";

const ROOT_URL = "http://localhost:8000";
export const submitWishData = (data, history) => async dispatch => {
    console.log("wish data", data);
    try {
        const res = await axios.post(`${ROOT_URL}/api/addDemand`, data, {
            headers: {
                authorization: localStorage.getItem("jwtToken")
            }
        });
        dispatch({
            type: ADD_WISH_DATA,
            payload: res.data
        });
    } catch (err) {
        dispatch(wishErr(err));
    }
};

export const wishErr = err => {
    return {
        type: WISH_ERROR,
        payload: err
    };
};