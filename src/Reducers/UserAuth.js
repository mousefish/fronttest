import {SET_AUTH, AUTH_ERROR, AUTH_USER, DEAUTH_USER } from '../Actions/types'
import {isEmpty} from 'lodash'

const initState={
  isAuthenticated: false,
  user: {},
  error: ""
};

export default (state = initState, action = {}) => {
  switch (action.type) {
    case AUTH_USER:
      return {
        ...state,
        isAuthenticated: true,
        error:""
      };
    case AUTH_ERROR:
       return {
        ...state,
        error:action.payload
    };


    case DEAUTH_USER:
       return {
         ...state,
         isAuthenticated: false,
    };

// Does DEAUTH_USER fulfil the purpose of SET_AUTH?
    case SET_AUTH:
      return {
        isAuthenticated: !isEmpty(action.user),
        user: action.user
      };
    default:
      return state;
  }
};