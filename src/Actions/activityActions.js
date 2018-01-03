import axios from "axios";
import { ADD_ACTIVITY_DATA, ACTIVITY_ERROR } from "./types";

const ROOT_URL = "http://localhost:8000";
export const submitActivityData = (data, history) => async dispatch => {
    console.log("activity data", data);
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
    } catch (err) {
        activityErr(err);
    }
};

export const activityErr = err => {
    return {
        type: ACTIVITY_ERROR,
        payload: err
    };
};