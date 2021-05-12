import {
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILED,
} from "../types/auth-types";

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

export const userSignUpFailed = (error) => {
  return {
    type: SIGNUP_FAILED,
    payload: error,
  };
};


