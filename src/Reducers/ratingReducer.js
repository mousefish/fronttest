import {
    ADD_RATING_DATA,
    FETCH_RATING_DATA,
    FETCH_OVERALL_RATING,
    RATING_ERROR
} from "../Actions/types";
import _ from "lodash";

const INITIAL_STATE = { error: "", message: "", ratings: [], summary: {} };

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_RATING_DATA:
            if (!_.isEmpty(action.payload)) {
                let newRatings = state["ratings"].slice(0);
                newRatings.push(action.payload);
                return { ...state, ratings: newRatings, message:"评论提交成功" };
            } else {
                return { ...state, message: " 你已经提交过了评论！" };
            }
        case FETCH_RATING_DATA:
            return { ...state, ratings: action.payload, message:"" };
        case FETCH_OVERALL_RATING:
            return { ...state, ratings:[], summary: action.payload, message:"" };

        case RATING_ERROR:
            return { ...state, ratings:[], message: "请确认登录!" };
    }

    return state;
};