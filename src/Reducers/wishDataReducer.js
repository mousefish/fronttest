import { ADD_WISH_DATA, WISH_ERROR } from "../Actions/types";

// dummy initial state:
const INITIAL_STATE = {error:""};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_WISH_DATA:
            return { ...state, message:action.payload };
        case WISH_ERROR:
            return { ...state, error:action.payload }
    }
    return state;
};