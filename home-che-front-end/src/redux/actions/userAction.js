import {
  GET_USER_FAILED,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
} from "../types/user-types";

export const getUserRequest = () => {
  return {
    type: GET_USER_REQUEST,
  };
};

export const getUserSuccess = (user) => {
  return {
    type: GET_USER_SUCCESS,
    payload: user,
  };
};
export const getUserFailed = (error) => {
  return {
    type: GET_USER_FAILED,
    payload: error,
  };
};
