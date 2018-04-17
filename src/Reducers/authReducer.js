import {
  AUTH_ERROR,
  AUTH_USER,
  DEAUTH_USER,
} from "../Actions/types";

const initState = {
  isAuthenticated: false,
  error: "",
};

// Use "go" to verify if use can go to the next wizard form or not.
// Always remember to revert back the state to the original one in some situations

export default (state = initState, action = {}) => {
  switch (action.type) {

    case AUTH_USER:
      return {
        ...state,
        isAuthenticated: true,
        error: "",
      };

    case AUTH_ERROR:
      return {
        ...state,
        isAuthenticated: false,
        error: action.payload
      };

    case DEAUTH_USER:
      return {
        ...state,
        isAuthenticated: false,
        error: "",
      };

    default:
      return state;
  }
};