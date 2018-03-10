import axios from "axios";
import { FETCH_USER_FAVORITES } from "./types";
import config from "../config/config";

const ROOT_URL = config["ROOT_URL"];

export const fetchUserFavorites = () => async dispatch => {
    const res = await axios.get(
        `${ROOT_URL}/api/fetchUserFavorites`,
        {
            headers: {
                authorization: localStorage.getItem("jwtToken")
            }
        }
    );
    dispatch({
        type: FETCH_USER_FAVORITES,
        payload: res.data
    });
};