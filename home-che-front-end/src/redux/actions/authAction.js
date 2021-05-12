import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  GET_USER,
} from "../types/auth-types";

export const userLoginRequest = () => {
  return {
    type: LOGIN_REQUEST,
  };
};

export const userLoginSuccess = () => {
  return {
    type: LOGIN_SUCCESS,
  };
};

export const userLoginFailed = (error) => {
  return {
    type: LOGIN_FAILED,
    payload: error,
  };
};


