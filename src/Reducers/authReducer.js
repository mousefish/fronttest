import {
  AUTH_ERROR,
  AUTH_USER,
  DEAUTH_USER,
  OK_TO_GO,
} from "../Actions/types";

const initState = {
  isAuthenticated: false,
  error: "",
  go: false,
  user: {}
};

// Use "go" to verify if use can go to the next wizard form or not.
// Always remember to revert back the state to the original one in some situations

export default (state = initState, action = {}) => {
  switch (action.type) {

    case OK_TO_GO:
      return {
        ...state,
        go: true,
        error: "",
        user: {}
      };

    case AUTH_USER:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
        error: "",
        go: false
      };

    case AUTH_ERROR:
      return {
        ...state,
        isAuthenticated: false,
        user: {},
        error: action.payload
      };

    case DEAUTH_USER:
      return {
        ...state,
        isAuthenticated: false,
        user: {},
        error: "",
        go: false
      };

    default:
      return state;
  }
};