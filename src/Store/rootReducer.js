//store unit, combine all the reducers in the store
//
//         store
//         /\
//  reducer  reducer

import {combineReducers} from 'redux';
import UserAuth from '../Reducers/UserAuth'

export default combineReducers({
      UserAuth
});
