import axios from "axios";
import {
    FETCH_PROFILE_DATA,
    UPDATE_USER_BASIC,
    INPUT_ERROR,
    FETCH_COMMENTS
} from "./types";

import config from "../config/config";

const ROOT_URL = config["ROOT_URL"];

const setDefault = token => {
    axios.defaults.headers.common["authorization"] = token;
};

export const fetchComments = userId => async dispatch => {
    if (!axios.defaults.headers.common.authorization) {
        setDefault(localStorage.getItem("jwtToken"));
    }
    const res = await axios.get(`${ROOT_URL}/api/comments/${userId}`);
    dispatch({
        type: "FETCH_COMMENTS",
        payload: res.data
    });
};

export const fetchUser = userId => async dispatch => {
    if (!axios.defaults.headers.common.authorization) {
        setDefault(localStorage.getItem("jwtToken"));
    }
    const res = await axios.get(`${ROOT_URL}/api/user/${userId}`);
    dispatch({
        type: FETCH_PROFILE_DATA,
        payload: res.data
    });
};

export const updateUserBasicInfo = basicInfo => async dispatch => {
    try {
        if (!axios.defaults.headers.common.authorization) {
            setDefault(localStorage.getItem("jwtToken"));
        }
        const res = await axios.post(
            `${ROOT_URL}/api/updateBasicInfo`,
            basicInfo
        );

        // update localStorage to greet user
        if (res.data[0] === "username") {
            localStorage["userName"] = res.data[1];
        }
        dispatch({
            type: UPDATE_USER_BASIC,
            payload: res.data
        });
    } catch (err) {
        // err from backend database
        dispatch(inputError("非法输入"));
    }
};

export const inputError = err => {
    return {
        type: INPUT_ERROR,
        payload: err
    };
};