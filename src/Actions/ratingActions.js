import axios from "axios";
import { ADD_RATING_DATA, ACTIVITY_ERROR } from "./types";

const ROOT_URL = "http://localhost:8000";

export const sendRating = ratingData => async dispatch => {
    try {
        const res = await axios.post(`${ROOT_URL}/api/addRating`, ratingData, {
            headers: {
                authorization: localStorage.getItem("jwtToken")
            }
        });

        dispatch({
            type: ADD_RATING_DATA,
            payload: res.data
        });
    } catch (err) {
        dispatch(activityErr(err));
    }
};


export const activityErr = err => {
    return {
        type: ACTIVITY_ERROR,
        payload: err
    };
};