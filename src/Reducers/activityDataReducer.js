import { ADD_ACTIVITY_DATA, FETCH_ACTIVITY_DATA, ACTIVITY_ERROR } from "../Actions/types";

// dummy initial state:
const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_ACTIVITY_DATA:
            return { ...state, message:action.payload };
        case FETCH_ACTIVITY_DATA:
            return { ...state, activity:action.payload }
        case ACTIVITY_ERROR:
            return { ...state, error:action.payload }
    }

    return state;

};