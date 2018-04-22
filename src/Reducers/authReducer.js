import {
  AUTH_ERROR_SIGNUP,
  AUTH_ERROR_LOGIN,
  AUTH_USER,
  DEAUTH_USER
} from "../Actions/types";

const initState = {
  isAuthenticated: false,
  errorSignup: "",
  errorLogin: ""
};

// Use "go" to verify if use can go to the next wizard form or not.
// Always remember to revert back the state to the original one in some situations

export default (state = initState, action = {}) => {
  switch (action.type) {
    case AUTH_USER:
      return {
        ...state,
        isAuthenticated: true,
        errorSignup: "",
        errorLogin: ""
      };

    case AUTH_ERROR_SIGNUP:
      return {
        ...state,
        isAuthenticated: false,
        errorSignup: action.payload,
        errorLogin: ""
      };

    case AUTH_ERROR_LOGIN:
      return {
        ...state,
        isAuthenticated: false,
        errorLogin: action.payload,
        errorSignup: ""
      };

    case DEAUTH_USER:
      return {
        ...state,
        isAuthenticated: false,
        errorSignup: "",
        errorLogin: ""
      };

    default:
      return state;
  }
};