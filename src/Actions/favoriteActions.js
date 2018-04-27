import axios from "axios";
import { FETCH_USER_FAVORITES, DELETE_USER_FAVORITE } from "./types";
import config from "../config/config";

const ROOT_URL = config["ROOT_URL"];

export const fetchUserFavorites = () => async dispatch => {
    const res = await axios.get(`${ROOT_URL}/api/fetchUserFavorites`, {
        headers: {
            authorization: localStorage.getItem("jwtToken")
        }
    });
    dispatch({
        type: FETCH_USER_FAVORITES,
        payload: res.data
    });
};

export const deleteUserFavorite = favId => async dispatch => {
    const res = await axios.put(
        `${ROOT_URL}/api/deleteUserFavorite/${favId}`,
        null,
        {
            headers: {
                authorization: localStorage.getItem("jwtToken")
            }
        }
    );

    dispatch({
        type: DELETE_USER_FAVORITE,
        payload: res.data
    });
};