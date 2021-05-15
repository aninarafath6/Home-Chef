import { SIGNUP_REQUEST, SIGNUP_SUCCESS,SIGNUP_FAILED, LOGOUT, LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILED } from "../types/auth-types";

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
export const userLoginFailed = () => {
  return {
    type: LOGIN_FAILED,
  };
};


export const logout = () => {
  return {
    type: LOGOUT,
  };
};
