//store unit, combine all the reducers in the store
//
//         store
//         /\
//  reducer  reducer

import {combineReducers} from 'redux';
import UserAuth from './UserAuth';
import { reducer as formReducer } from 'redux-form';
import historyDataReducer from './historyDataReducer';

export default combineReducers({
      UserAuth,
      historyData:historyDataReducer,
      form: formReducer,
});
