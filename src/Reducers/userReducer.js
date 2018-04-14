import axios from "axios";
import { FETCH_PROFILE_DATA, UPDATE_USER_BASIC, INPUT_ERROR, FETCH_COMMENTS } from "../Actions/types";

const INITIAL_STATE = {basicInfo:{}, err:"", comments:[], msg:""};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_COMMENTS:
            return{...state, comments:action.payload}
        // fetch data for the public profile
        case FETCH_PROFILE_DATA:
            return {...state, basicInfo:action.payload}

        case UPDATE_USER_BASIC:
            return {...state, msg:action.payload}

        case INPUT_ERROR:
           return {...state, err:action.payload}
    }

     return state;
};