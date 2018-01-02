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
import MainDataReducer from './mainDataReducer';
import WishDataReducer from './wishDataReducer';
import ProfileDataReducer from './profileDataReducer';
import StoryDataReducer from './storyDataReducer';
import activityDataReducer from './activityDataReducer';

export default combineReducers({
      UserAuth,
      HistoryDataReducer,
      SearchDataReducer,
      MainDataReducer,
      WishDataReducer,
      ProfileDataReducer,
      StoryDataReducer,
      activityDataReducer,
      form: formReducer,
});
