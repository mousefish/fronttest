import { FETCH_SEARCH_DATA } from "../Actions/types";


const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_SEARCH_DATA:
           return action.payload;

    }

    return state;
};