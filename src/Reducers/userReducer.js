import axios from "axios";
import { FETCH_PROFILE_DATA, UPDATE_USER_BASIC } from "../Actions/types";

const INITIAL_STATE = {basicInfo:{}, err:""};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        // fetch data for publicprofile
        case FETCH_PROFILE_DATA:
            return {...state, basicInfo:action.payload}

        case UPDATE_USER_BASIC:
            if(typeof action.payload !== "string"){
                let key = action.payload[0]
                let value = action.payload[1];
                let newBasicInfo = Object.assign({}, state.basicInfo);
                newBasicInfo[key] = value;
                return {...state, basicInfo:newBasicInfo, err:""}
            }else{
                return {...state, err:action.payload}
            }
    }

     return state;
};