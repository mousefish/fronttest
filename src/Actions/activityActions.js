import axios from "axios";
import {
    ADD_ACTIVITY_DATA,
    FETCH_ACTIVITY_DATA,
    ACTIVITY_ERROR,
    HANDLE_LIKES,
    FETCH_ONE_ACTIVITY,
    FETCH_USER_ACTIVITIES,
    FETCH_ACTIVITY_FOR_EDITTING,
    IS_YOUR_FAV
} from "./types";

import config from "../config/config";

const ROOT_URL = config["ROOT_URL"];

export const verifyYourFav = activityId => async dispatch => {
    const res = await axios.get(`${ROOT_URL}/api/verifyYourFav/${activityId}`, {
        headers: {
            authorization: localStorage.getItem("jwtToken")
        }
    });
    dispatch({
        type: IS_YOUR_FAV,
        payload: res.data
    });
};

export const fetchActivityData = () => async dispatch => {
    try {
        const res = await axios.get(`${ROOT_URL}/api/fetchActivity`, {
            headers: {
                authorization: localStorage.getItem("jwtToken")
            }
        });
        dispatch({
            type: FETCH_ACTIVITY_DATA,
            payload: res.data
        });
    } catch (err) {
        dispatch(activityErr(err.message));
    }
};

export const fetchOneActivity = activityId => async dispatch => {
    try {
        const res = await axios.get(`${ROOT_URL}/api/activity/${activityId}`, {
            headers: {
                authorization: localStorage.getItem("jwtToken")
            }
        });
        dispatch({
            type: FETCH_ONE_ACTIVITY,
            payload: res.data
        });
    } catch (err) {
        dispatch(activityErr(err.message));
    }
};

export const fetchUserActivities = userId => async dispatch => {
    const res = await axios.get(`${ROOT_URL}/api/activities/${userId}`, {
        headers: {
            authorization: localStorage.getItem("jwtToken")
        }
    });

    dispatch({
        type: FETCH_USER_ACTIVITIES,
        payload: res.data
    });
};

export const fetchOneUserActivityForEditting = activityId => async dispatch => {
    try {
        const res = await axios.get(
            `${ROOT_URL}/api/editActivity/${activityId}`,
            {
                headers: {
                    authorization: localStorage.getItem("jwtToken")
                }
            }
        );
        dispatch({
            type: FETCH_ACTIVITY_FOR_EDITTING,
            payload: res.data
        });
    } catch (e) {
        // console.log("e", e);
        dispatch(activityErr(e.message));
    }
};

export const updateUserActivity = (
    activityId,
    edittedValues,
    history
) => async dispatch => {
    const res = await axios.post(
        `${ROOT_URL}/api/updateUserActivity/${activityId}`,
        edittedValues,
        {
            headers: {
                authorization: localStorage.getItem("jwtToken")
            }
        }
    );

    if (res.data === "修改成功！") {
        history.goBack();
    }

    dispatch({
        // since we only need to receive the success message here
        type: ADD_ACTIVITY_DATA,
        payload: res.data
    });
};

export const deleteUserActivity = (
    activityId,
    history,
    userId
) => async dispatch => {
    let res = await axios.put(
        `${ROOT_URL}/api/deleteUserActivity/${activityId}`,
        null,
        {
            headers: {
                authorization: localStorage.getItem("jwtToken")
            }
        }
    );
    // 1. check if the use has the authority to delete the activty. a:loggedin b. be the person who created the activity
    if (res.data === "你没有权限或者该活动不存在") {
        dispatch({
            // only need to receive the message
            type: ADD_ACTIVITY_DATA,
            payload: res.DATA
        });
        // 2. if the user is authorized, then check if the activity has imgurl, if no, delete the row in database, otherwise, delete the row in database first, then delete it on AWS.
    } else if (res.data.hasOwnProperty("imgurl")) {
        let result = await axios.post(
            `${ROOT_URL}/api/deleteImage`,
            { imgurl: res.data.imgurl },
            {
                headers: {
                    authorization: localStorage.getItem("jwtToken")
                }
            }
        );
        // console.log("result", result);
        dispatch({
            type: ADD_ACTIVITY_DATA,
            payload: "活动成功删除"
        });

        history.push("/userActivities/0");
    } else {
        dispatch({
            type: ADD_ACTIVITY_DATA,
            payload: "活动成功删除"
        });

        history.push("/userActivities/0");
    }
};

export const submitActivityData = (data, history) => async dispatch => {
    try {
        const res = await axios.post(`${ROOT_URL}/api/addActivity`, data, {
            headers: {
                authorization: localStorage.getItem("jwtToken")
            }
        });
        if (typeof res.data === "string") {
            dispatch({
                type: ADD_ACTIVITY_DATA,
                payload: res.data
            });
        }else{
            const { activityId } = res.data;
            history.push(`/editActivity/${activityId}`);
        }


    } catch (err) {
        dispatch(activityErr(err.message));
    }
};

export const submitLikes = itemId => async dispatch => {
    try {
        const res = await axios.post(
            `${ROOT_URL}/api/clickLikes/${itemId}`,
            {},
            {
                headers: {
                    authorization: localStorage.getItem("jwtToken")
                }
            }
        );
        dispatch({
            type: HANDLE_LIKES,
            payload: res.data
        });
    } catch (err) {
        dispatch(activityErr(err.message));
    }
};

export const activityErr = err => {
    return {
        type: ACTIVITY_ERROR,
        payload: err
    };
};