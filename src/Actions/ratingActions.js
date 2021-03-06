import axios from "axios";
import {
    ADD_RATING_DATA,
    RATING_ERROR,
    FETCH_RATING_DATA,
    FETCH_OVERALL_RATING
} from "./types";

import config from "../config/config";

const ROOT_URL = config["ROOT_URL"];

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
        dispatch(ratingErr(err));
    }
};

export const fetchRatings = activityId => async dispatch => {
    const res = await axios.get(`${ROOT_URL}/api/fetchRatings/${activityId}`, {
        headers: {
            authorization: localStorage.getItem("jwtToken")
        }
    });
    dispatch({
        type: FETCH_RATING_DATA,
        payload: res.data
    });
};

export const fetchRatingSummary = activityId => async dispatch => {
    const res = await axios.get(
        `${ROOT_URL}/api/fetchRatingSummary/${activityId}`,
        {
            headers: {
                authorization: localStorage.getItem("jwtToken")
            }
        }
    );
    dispatch({
        type: FETCH_OVERALL_RATING,
        payload: res.data
    });
};

export const ratingErr = err => {
    return {
        type: RATING_ERROR,
        payload: err
    };
};