import {
  SIGNUP_FAILED,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  TOKEN_CHECKING_FAILED,
  TOKEN_CHECKING_REQUEST,
  TOKEN_CHECKING_SUCCESS,
} from "../types/auth-types";
const initialState = {
  isLogged: false,
  isLoading: false,
  error: "",
  tokenCheckingLoading: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case SIGNUP_SUCCESS:
      return {
        isLogged: true,
        isLoading: false,
        error: "",
      };
    case SIGNUP_FAILED:
      return {
        isLogged: false,
        isLoading: false,
        error: action.payload,
      };
    case TOKEN_CHECKING_REQUEST:
      return {
        tokenCheckingLoading: true,
      };
      case TOKEN_CHECKING_SUCCESS:
      return {
        isLogged:true
      };
      case TOKEN_CHECKING_FAILED:
      return {
        tokenCheckingLoading: false,
        isLogged:false
      };
    default:
      return state;
  }
};

export default userReducer;
