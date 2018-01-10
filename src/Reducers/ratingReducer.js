import { ADD_RATING_DATA, ACTIVITY_ERROR } from "../Actions/types";

const INITIAL_STATE = { message:"", error:"", ratings:[]};

export default (state = INITIAL_STATE, action)=>{
    switch(action.type){
        case ADD_RATING_DATA:
           return {...state, message: action.payload};
        case ACTIVITY_ERROR:
           return {...state, error: action.payload};

    }

    return state;

}