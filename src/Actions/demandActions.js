import axios from "axios";
import { ADD_DEMAND_DATA, DEMAND_ERROR } from "./types";

const ROOT_URL = "http://localhost:8000";
export const submitDemandData = (data, history) => async dispatch => {
    console.log("demand data", data);
    try {
        const res = await axios.post(`${ROOT_URL}/api/addDemand`, data, {
            headers: {
                authorization: localStorage.getItem("jwtToken")
            }
        });
        dispatch({
            type: ADD_DEMAND_DATA,
            payload: res.data
        });
    } catch (err) {
        dispatch(demandErr(err));
    }
};

export const demandErr = err => {
    return {
        type: DEMAND_ERROR,
        payload: err
    };
};