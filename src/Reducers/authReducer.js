import { AUTH_ERROR, AUTH_USER, DEAUTH_USER } from '../Actions/types';

const initState={
  isAuthenticated: false,
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

    default:
      return state;
  }
};