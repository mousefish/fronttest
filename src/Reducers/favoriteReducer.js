import { FETCH_USER_FAVORITES } from "../Actions/types";

export default (state = [], action) => {
    switch (action.type) {
        case FETCH_USER_FAVORITES: {
            return action.payload;
        }
    }
    return state;
};