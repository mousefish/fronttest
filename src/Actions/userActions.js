import axios from "axios";
import { FETCH_PROFILE_DATA, UPDATE_USER_BASIC } from "./types";

const ROOT_URL = "http://localhost:8000/api";

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
    const res = await axios.get(`${ROOT_URL}/user/${userId}`);

    dispatch({
        type: FETCH_PROFILE_DATA,
        payload: res.data
    });
};

export const updateUserBasicInfo = basicInfo => async dispatch => {
    // console.log("Action", basicInfo);
    try {
        const res = await axios.post(`${ROOT_URL}/updateBasicInfo`, basicInfo, {
            headers: {
                authorization: localStorage.getItem("jwtToken")
            }
        });
        // console.log("res.data",res.data)
        dispatch({
            type: UPDATE_USER_BASIC,
            payload: res.data
        });

        // for showing latest MyAccount

        if (typeof res.data !== "string") {
            let newInfo = JSON.parse(localStorage.getItem("user"));
            let key = res.data[0];
            let value = res.data[1];
            newInfo[key] = value;
            localStorage.setItem("user", JSON.stringify(newInfo));
            // console.log("local!!",localStorage.user);
        }
    } catch (err) {}
};