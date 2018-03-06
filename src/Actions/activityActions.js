import axios from "axios";
import {
    ADD_ACTIVITY_DATA,
    FETCH_ACTIVITY_DATA,
    ACTIVITY_ERROR,
    HANDLE_LIKES,
    FETCH_ONE_ACTIVITY
} from "./types";

import config from "../config/config";

const ROOT_URL = config["ROOT_URL"];

export const fetchActivityData = () => async dispatch => {
    try {
        const res = await axios.get(`${ROOT_URL}/api/fetchActivity`);
        dispatch({
            type: FETCH_ACTIVITY_DATA,
            payload: res.data
        });
    } catch (err) {
        dispatch(activityErr(err));
    }
};
export const fetchOneActivity =(activityId)=>async dispatch=>{
      try {
        const res = await axios.get(`${ROOT_URL}/api/activity/${activityId}`);
        dispatch({
            type: FETCH_ONE_ACTIVITY,
            payload: res.data
        });
      } catch (err) {
        dispatch(activityErr(err));
    }
};
export const submitActivityData = (data, history) => async dispatch => {
    try {
        const res = await axios.post(`${ROOT_URL}/api/addActivity`, data, {
            headers: {
                authorization: localStorage.getItem("jwtToken")
            }
        });
        dispatch({
            type: ADD_ACTIVITY_DATA,
            payload: res.data
        });

        history.push("/");

    } catch (err) {
        dispatch(activityErr(err));
    }
};

export const submitLikes = itemId => async dispatch => {
    try {
        const res = await axios.post(`${ROOT_URL}/api/clickLikes/${itemId}`, {}, {
            headers: {
                authorization: localStorage.getItem("jwtToken")
            }
        });
        dispatch({
            type: HANDLE_LIKES,
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