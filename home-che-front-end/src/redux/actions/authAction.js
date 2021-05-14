import { SIGNUP_REQUEST, SIGNUP_SUCCESS } from "../types/auth-types";

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
