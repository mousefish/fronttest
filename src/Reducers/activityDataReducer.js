import { ADD_ACTIVITY_DATA } from "../Actions/types";

// dummy initial state:
const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_ACTIVITY_DATA:
           return [
            ...state,
            action.payload
           ];

    }
    return state;
};