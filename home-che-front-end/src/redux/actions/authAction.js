import {
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILED,
  TOKEN_CHECKING_REQUEST,
  TOKEN_CHECKING_SUCCESS,
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

export const tokenCheckingRequest = ()=>{
  return {
    type:TOKEN_CHECKING_REQUEST
  }
}
export const tokenCheckingSuccess = ()=>{
  return {
    type:TOKEN_CHECKING_SUCCESS
  }
}
export const tokenCheckingFailed = ()=>{
  return {
    type:TOKEN_CHECKING_REQUEST
  }
}