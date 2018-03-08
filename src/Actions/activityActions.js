import axios from "axios";
import {
    ADD_ACTIVITY_DATA,
    FETCH_ACTIVITY_DATA,
    ACTIVITY_ERROR,
    HANDLE_LIKES,
    FETCH_ONE_ACTIVITY,
    FETCH_USER_ACTIVITIES
} from "./types";

import config from "../config/config";

const ROOT_URL = config["ROOT_URL"];

export const fetchUserActivities = userId => async dispatch => {
    const res = await axios.get(`${ROOT_URL}/api/activities/${userId}`)
        //     [ { id: 7,
    // theme: '大连城市风光游',
    // location: '大连市 辽宁省',
    // departdate: '23 Feb 2018 6:16',
    // finishdate: '28 Feb 2018 6:16',
    // budget: '5000',
    // services: [ '徒步旅行', '汽车接送', '购物打折' ],
    // story: '我在大连生活了10年。这里的一山一水一草一木都充满了灵性。大连是一个热情，开方，时尚的城市。海纳百川，兼容并蓄。',
    // images: [],
    // createdAt: 2018-02-21T02:18:16.284Z,
    // updatedAt: 2018-02-21T02:18:16.284Z,
    // userId: 6 } ]
    dispatch({
        type: FETCH_USER_ACTIVITIES,
        payload:res.data
    })
};


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