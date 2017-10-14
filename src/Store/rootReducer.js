//store unit, combine all the reducers in the store
//
//         store
//         /\
//  reducer  reducer

import {combineReducers} from 'redux';
import UserAuth from '../Reducers/UserAuth';
import { reducer as reduxForm } from 'redux-form';

export default combineReducers({
      UserAuth,
      form: reduxForm
});
