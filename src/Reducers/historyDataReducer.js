import { CLEAR_HISTORY_DATA, FETCH_HISTORY_DATA } from "../Actions/types";

// dummy initial state:
const date = new Date();
const localTime = date.toLocaleDateString();
const INITIAL_STATE = [
    { location: "成都", searchTime: localTime },
    { location: "三亚", searchTime: localTime }
];

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_HISTORY_DATA:
            // return action.payload;
            // temp
            return INITIAL_STATE;
        case CLEAR_HISTORY_DATA:
            return action.payload;
    }

    return INITIAL_STATE;
};