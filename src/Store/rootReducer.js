//store unit, combine all the reducers in the store
//
//         store
//         /\
//  reducer  reducer

import {combineReducers} from 'redux';
import UserAuth from '../Reducers/UserAuth';
import { reducer as reduxForm } from 'redux-form';
import historyDataReducer from '../Reducers/historyDataReducer';

export default combineReducers({
      UserAuth,
      historyData:historyDataReducer,
      form: reduxForm,

});
