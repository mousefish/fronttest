import {
   UPLOAD_NEW_IMAGE
} from "../Actions/types";


const INITIAL_STATE = {};
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UPLOAD_NEW_IMAGE:
            return action.payload;
    }

    return state;
};