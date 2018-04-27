import axios from "axios";
import {
    ADD_WISH_DATA,
    WISH_ERROR,
    FETCH_WISH_DATA,
    HANDLE_WISH_LIKES,
    FETCH_ONE_WISH,
    FETCH_WISH_FOR_EDITTING,
    FETCH_USER_WISHES
} from "./types";

import config from "../config/config";
const ROOT_URL = config["ROOT_URL"];

export const fetchUserWishes = userId => async dispatch => {
    const res = await axios.get(`${ROOT_URL}/api/wishes/${userId}`, {
        headers: {
            authorization: localStorage.getItem("jwtToken")
        }
    });
    dispatch({
        type: FETCH_USER_WISHES,
        payload: res.data
    });
};
export const fetchOneUserWishForEditting = wishId => async dispatch => {
    try {
        const res = await axios.get(`${ROOT_URL}/api/editWish/${wishId}`, {
            headers: {
                authorization: localStorage.getItem("jwtToken")
            }
        });
        dispatch({
            type: FETCH_WISH_FOR_EDITTING,
            payload: res.data
        });
    } catch (e) {
        // console.log("e", e);
        dispatch(wishErr(e.message));
    }
};

export const updateUserWish = (
    wishId,
    edittedValues,
    history
) => async dispatch => {
    const res = await axios.post(
        `${ROOT_URL}/api/updateUserWish/${wishId}`,
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
        type: ADD_WISH_DATA,
        payload: res.data
    });
};

export const deleteUserWish = (wishId, history, userId) => async dispatch => {
    const res = await axios.put(
        `${ROOT_URL}/api/deleteUserWish/${wishId}`,
        null,
        {
            headers: {
                authorization: localStorage.getItem("jwtToken")
            }
        }
    );

    if (res.data === "成功删除该愿望") {
        history.goBack();
    }

    dispatch({
        // since we may only need to receive the success message here
        type: ADD_WISH_DATA,
        payload: res.DATA
    });
};

export const submitWishData = (data, history) => async dispatch => {
    try {
        const res = await axios.post(`${ROOT_URL}/api/addWish`, data, {
            headers: {
                authorization: localStorage.getItem("jwtToken")
            }
        });
        dispatch({
            type: ADD_WISH_DATA,
            payload: res.data
        });
        history.push("/wish");
    } catch (err) {
        dispatch(wishErr(err));
    }
};

export const fetchWishData = () => async dispatch => {
    const res = await axios.get(`${ROOT_URL}/api/fetchWish`, {
        headers: {
            authorization: localStorage.getItem("jwtToken")
        }
    });
    dispatch({
        type: FETCH_WISH_DATA,
        payload: res.data
    });
};

export const fetchOneWish = wishId => async dispatch => {
    const res = await axios.get(`${ROOT_URL}/api/wish/${wishId}`, {
        headers: {
            authorization: localStorage.getItem("jwtToken")
        }
    });
    dispatch({
        type: FETCH_ONE_WISH,
        payload: res.data
    });
};

export const sendWishLike = wishId => async dispatch => {
    const res = await axios.post(
        `${ROOT_URL}/api/sendWishLike/${wishId}`,
        {},
        {
            headers: {
                authorization: localStorage.getItem("jwtToken")
            }
        }
    );
    dispatch({
        type: HANDLE_WISH_LIKES,
        payload: res.data
    });
};

export const wishErr = err => {
    return {
        type: WISH_ERROR,
        payload: err
    };
};