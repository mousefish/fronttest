import {
    ADD_ACTIVITY_DATA,
    FETCH_ACTIVITY_DATA,
    ACTIVITY_ERROR,
    HANDLE_LIKES,
    FETCH_ONE_ACTIVITY,
    FETCH_USER_ACTIVITIES,
    FETCH_ACTIVITY_FOR_EDITTING,
    IS_YOUR_FAV
} from "../Actions/types";
import _ from "lodash";

const INITIAL_STATE = {
    all: [],
    message: "",
    error: "",
    userActivities: [],
    edit: {},
    activity: {},
    isYourFav: null
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case IS_YOUR_FAV:
            return { ...state, isYourFav: action.payload };
        case FETCH_USER_ACTIVITIES:
            return { ...state, userActivities: action.payload };
        case FETCH_ACTIVITY_FOR_EDITTING:
            return { ...state, activity: {}, edit: action.payload };
        case ADD_ACTIVITY_DATA:
            return {
                ...state,
                edit: {},
                activity: {},
                message: action.payload
            };
        case FETCH_ACTIVITY_DATA:
                let newMessage = ""
                if (_.isEmpty(action.payload)){
                    newMessage = "你不能没有底线"
                }
                let updatedAll = state["all"].slice(0);
                let finalAll = updatedAll.concat(action.payload);
                return { ...state, activity: {}, all: finalAll, message : newMessage };

        case ACTIVITY_ERROR:
            return { ...state, error: action.payload };
        case HANDLE_LIKES:
            const activityId = Object.keys(action.payload)[0];
            const numOfLikes = Object.values(action.payload)[0];
            const newAll = state.all.map(activity => {
                if (activity.id == activityId) {
                    activity.likes = numOfLikes;
                }
                return activity;
            });
            return { ...state, all: newAll };
        case FETCH_ONE_ACTIVITY:
            return {
                ...state,
                edit: {},
                activity: action.payload,
                message: ""
            };
    }

    return state;
};