import axios from "axios";
import { FETCH_PROFILE_DATA, UPDATE_USER_BASIC, INPUT_ERROR, FETCH_COMMENTS } from "./types";

import config from "../config/config";

const ROOT_URL = config["ROOT_URL"];

export const fetchComments = userId => async dispatch=>{
    const res = await axios.get(`${ROOT_URL}/api/comments/${userId}`,{
        headers: {
            authorization: localStorage.getItem("jwtToken")
        }
    });
    dispatch({
        type:"FETCH_COMMENTS",
        payload:res.data
    });
};

// fetch user's basic info!!
// { id: 6,
//  mail: 'robert@yahoo.com',
//  password: '$2a$10$bqeLmIeOYu/prAGamSP0s.cIuLyVpktpqdeCsXCa0KVpRASQhzFlW',
//  username: 'Robert',
//  sex: 'male',
//  age: 40,
//  city: 'San Francisco',
//  yearOfLiving: 20,
//  hometown: 'San Francisco',
//  school: 'UC Berkeley',
//  major: 'Mechanical Engineering',
//  language: 'Good',
//  hobby: 'Cars',
//  personality: 'Patient',
//  createdAt: 2018-01-02T06:43:37.753Z,
//  updatedAt: 2018-01-02T06:43:37.753Z }
export const fetchUser = userId => async dispatch => {
    const res = await axios.get(`${ROOT_URL}/api/user/${userId}`, {
        headers: {
            authorization: localStorage.getItem("jwtToken")
        }
    });

    dispatch({
        type: FETCH_PROFILE_DATA,
        payload: res.data
    });
};

export const updateUserBasicInfo = basicInfo => async dispatch => {
    // console.log("Action", basicInfo);
    try {
        const res = await axios.post(
            `${ROOT_URL}/api/updateBasicInfo`,
            basicInfo,
            {
                headers: {
                    authorization: localStorage.getItem("jwtToken")
                }
            }
        );

        // ["age", 33]
        // update localStorage to greet user
        if(res.data[0] === "username"){
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