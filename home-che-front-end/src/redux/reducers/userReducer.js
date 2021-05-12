import {
  LOGIN_FAILED,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
} from "../types/user-types";
const initialState = {
  isLogged: false,
  isLoading: false,
  user: {},
  error: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case LOGIN_SUCCESS:
      return {
        isLogged: true,
        isLoading: false,

        user: action.payload,
        error: "",
      };
    case LOGIN_FAILED:
      return {
        isLogged: false,
        isLoading: false,
        user: {},
        error: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
