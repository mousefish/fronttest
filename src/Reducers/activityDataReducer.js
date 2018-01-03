import { ADD_ACTIVITY_DATA, ACTIVITY_ERROR } from "../Actions/types";

// dummy initial state:
const INITIAL_STATE = {error:""};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_ACTIVITY_DATA:
            return { [action.payload.id]: action.payload, ...state };
        case ACTIVITY_ERROR:
            return {...state, error:action.payload}
    }
    return state;
};