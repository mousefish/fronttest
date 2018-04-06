import {
   UPLOAD_NEW_IMAGE,
   IMAGE_ERROR
} from "../Actions/types";


const INITIAL_STATE = {image:{},error:""};
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UPLOAD_NEW_IMAGE:
            return {...state, image:action.payload}

        case IMAGE_ERROR:
            return {... state, errpr:action.payload}
    }

    return state;
};