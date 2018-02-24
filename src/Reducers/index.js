import {combineReducers} from 'redux';
import UserAuth from './authReducer';
import { reducer as formReducer } from 'redux-form';
import SearchDataReducer from './searchDataReducer';
import UserReducer from './userReducer';
import StoryDataReducer from './storyDataReducer';
import ActivityReducer from './activityReducer';
import WishReducer from './wishReducer';
import RatingReducer from './ratingReducer';

export default combineReducers({
      UserAuth,
      SearchDataReducer,
      UserReducer,
      RatingReducer,
      StoryDataReducer,
      ActivityReducer,
      WishReducer,
      form: formReducer,
});
