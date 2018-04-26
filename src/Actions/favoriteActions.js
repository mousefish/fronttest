import axios from "axios";
import { FETCH_USER_FAVORITES, DELETE_USER_FAVORITE } from "./types";
import config from "../config/config";

const ROOT_URL = config["ROOT_URL"];

const setDefault = token => {
    axios.defaults.headers.common["authorization"] = token;
};
export const fetchUserFavorites = () => async dispatch => {
    if (!axios.defaults.headers.common.authorization) {
        setDefault(localStorage.getItem("jwtToken"));
    }
    const res = await axios.get(`${ROOT_URL}/api/fetchUserFavorites`);
    dispatch({
        type: FETCH_USER_FAVORITES,
        payload: res.data
    });
};

export const deleteUserFavorite = favId => async dispatch => {
    if (!axios.defaults.headers.common.authorization) {
        setDefault(localStorage.getItem("jwtToken"));
    }
    const res = await axios.put(`${ROOT_URL}/api/deleteUserFavorite/${favId}`);

    dispatch({
        type: DELETE_USER_FAVORITE,
        payload: res.data
    });
};