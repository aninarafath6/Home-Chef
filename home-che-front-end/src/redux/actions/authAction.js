import { SIGNUP_REQUEST, SIGNUP_SUCCESS,SIGNUP_FAILED, LOGOUT } from "../types/auth-types";

export const userSignUpRequest = () => {
  return {
    type: SIGNUP_REQUEST,
  };
};

export const userSignUpSuccess = () => {
  return {
    type: SIGNUP_SUCCESS,
  };
};
export const userSignUpFailed = () => {
  return {
    type: SIGNUP_FAILED,
  };
};
export const logout = () => {
  return {
    type: LOGOUT,
  };
};
