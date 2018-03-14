import { FETCH_USER_FAVORITES, DELETE_USER_FAVORITE } from "../Actions/types";

export default (state = [], action) => {
    switch (action.type) {
        case FETCH_USER_FAVORITES: {
            return action.payload;
        }
        case DELETE_USER_FAVORITE: {
            const deleteFavId = action.payload;
            return state.filter((item)=>{
                return item.id !== deleteFavId;
            });
        }
    }
    return state;
};