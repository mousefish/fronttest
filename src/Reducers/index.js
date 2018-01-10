//store unit, combine all the reducers in the store
//
//         store
//         /\
//  reducer  reducer

import {combineReducers} from 'redux';
import UserAuth from './authReducer';
import { reducer as formReducer } from 'redux-form';
import SearchDataReducer from './searchDataReducer';
import HistoryDataReducer from './historyDataReducer';
import UserReducer from './userReducer';
import StoryDataReducer from './storyDataReducer';
import ActivityDataReducer from './activityDataReducer';
import WishDataReducer from './wishDataReducer';
import RatingReducer from './ratingReducer';

export default combineReducers({
      UserAuth,
      HistoryDataReducer,
      SearchDataReducer,
      WishDataReducer,
      UserReducer,
      RatingReducer,
      StoryDataReducer,
      ActivityDataReducer,
      WishDataReducer,
      form: formReducer,
});
