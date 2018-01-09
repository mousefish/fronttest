import { ADD_ACTIVITY_DATA, FETCH_ACTIVITY_DATA, ACTIVITY_ERROR, HANDLE_LIKES } from "../Actions/types";

// dummy initial state:
const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_ACTIVITY_DATA:
            return { ...state, message : action.payload };
        case FETCH_ACTIVITY_DATA:
            return { ...state, [action.payload.id]: action.payload }
        case ACTIVITY_ERROR:
            return { ...state, error : action.payload }
        case HANDLE_LIKES:
            return { [action.payload.id]: action.payload }
    }

    return state;

};