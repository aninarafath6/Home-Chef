import { LOGIN_REQUEST, LOGIN_SUCCESS } from "../types/user-types";

export const userLoginRequest = () => {
  return {
    type: LOGIN_REQUEST,
  };
};

export const userLoginSuccess = (user) => {
  return {
    type: LOGIN_SUCCESS,
    payload: user,
  };
};

export const userLoginFailed = (error) => {
  return {
    type: LOGIN_FAILED,
    payload: error,
  };
};
