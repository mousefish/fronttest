import { ADD_RATING_DATA, FETCH_RATING_DATA, OVERALL_RATING } from "../Actions/types";
import _ from "lodash";

const INITIAL_STATE = { error:"", message: "", ratings:[], summary:{} };

export default (state = INITIAL_STATE, action)=>{
    switch(action.type){
        case ADD_RATING_DATA:
            if(!_.isEmpty(action.payload)){
                const newState={...state}
                newState["ratings"]=[...state, action.payload];
               return newState;
            }else{
                return {...state, message:" You have submitted you rating!"}
            }
        case FETCH_RATING_DATA:
           return {...state, ratings:action.payload };
        case OVERALL_RATING:
           return {...state, summary:action.payload}
    }

    return state;

}