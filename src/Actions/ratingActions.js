import axios from "axios";
import {
    ADD_RATING_DATA,
    RATING_ERROR,
    FETCH_RATING_DATA,
    FETCH_OVERALL_RATING
} from "./types";

import config from "../config/config";

const ROOT_URL = config["ROOT_URL"];

const setDefault = token => {
    axios.defaults.headers.common["authorization"] = token;
};

export const sendRating = ratingData => async dispatch => {
    try {
        if (!axios.defaults.headers.common.authorization) {
            setDefault(localStorage.getItem("jwtToken"));
        }
        const res = await axios.post(`${ROOT_URL}/api/addRating`, ratingData);
        dispatch({
            type: ADD_RATING_DATA,
            payload: res.data
        });
    } catch (err) {
        dispatch(ratingErr(err));
    }
};

export const fetchRatings = activityId => async dispatch => {
    if (!axios.defaults.headers.common.authorization) {
        setDefault(localStorage.getItem("jwtToken"));
    }
    const res = await axios.get(`${ROOT_URL}/api/fetchRatings/${activityId}`);
    dispatch({
        type: FETCH_RATING_DATA,
        payload: res.data
    });
};

export const fetchRatingSummary = activityId => async dispatch => {
    if (!axios.defaults.headers.common.authorization) {
        setDefault(localStorage.getItem("jwtToken"));
    }
    const res = await axios.get(
        `${ROOT_URL}/api/fetchRatingSummary/${activityId}`
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