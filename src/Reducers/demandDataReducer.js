import { ADD_DEMAND_DATA, DEMAND_ERROR } from "../Actions/types";

// dummy initial state:
const INITIAL_STATE = {error:""};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_DEMAND_DATA:
            return { ...state, message:action.payload };
        case DEMAND_ERROR:
            return { ...state, error:action.payload }
    }
    return state;
};