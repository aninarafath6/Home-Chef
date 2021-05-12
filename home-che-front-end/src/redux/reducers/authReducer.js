import {
  SIGNUP_FAILED,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
} from "../types/auth-types";
const initialState = {
  isLogged: false,
  isLoading: false,
  error: "",
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

    default:
      return state;
  }
};

export default userReducer;
