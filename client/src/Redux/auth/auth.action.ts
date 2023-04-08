import { LoginData, SignupData } from "../../utils/types";
import { AppDispatch } from "../store";
import { userLoginAPI, userSignupAPI } from "./auth.api";
import * as types from "./auth.types";

// login interface
export interface IUserLoginRequest {
  type: typeof types.USER_LOGIN_REQUEST;
}

export interface IUserLoginSuccess {
  type: typeof types.USER_LOGIN_SUCCESS;
  payload: string;
}

export interface IUserLoginError {
  type: typeof types.USER_LOGIN_ERROR;
}

// signup interface
export interface IUserSignupRequest {
  type: typeof types.USER_SIGNUP_REQUEST;
}

export interface IUserSignupSuccess {
  type: typeof types.USER_SIGNUP_SUCCESS;
}

export interface IUserSignupError {
  type: typeof types.USER_SIGNUP_ERROR;
}

export type AuthAction =
  | IUserLoginRequest
  | IUserLoginSuccess
  | IUserLoginError
  | IUserSignupRequest
  | IUserSignupSuccess
  | IUserSignupError;

const userLoginRequest = (): IUserLoginRequest => {
  return {
    type: types.USER_LOGIN_REQUEST,
  };
};

const userLoginSuccess = (token: string): IUserLoginSuccess => {
  return {
    type: types.USER_LOGIN_SUCCESS,
    payload: token,
  };
};

const userLoginError = (): IUserLoginError => {
  return {
    type: types.USER_LOGIN_ERROR,
  };
};

// signup actions
const userSignupRequest = (): IUserSignupRequest => {
  return {
    type: types.USER_SIGNUP_REQUEST,
  };
};

const userSignupSuccess = (): IUserSignupSuccess => {
  return {
    type: types.USER_SIGNUP_SUCCESS,
  };
};

const userSignupError = (): IUserSignupError => {
  return {
    type: types.USER_SIGNUP_ERROR,
  };
};

// login api methods
export const userLogin =
  (payload: LoginData): any =>
  async (dispatch: AppDispatch) => {
    dispatch(userLoginRequest());
    try {
      let res = await userLoginAPI(payload);
      if (res) {
        dispatch(userLoginSuccess(res?.token));
      }
    } catch (err) {
      dispatch(userLoginError());
    }
  };

// signup api methods
export const userSignup =
  (payload: SignupData) => async (dispatch: AppDispatch) => {
    dispatch(userSignupRequest());
    try {
      await userSignupAPI(payload);
      dispatch(userSignupSuccess());
    } catch (err) {
      dispatch(userSignupError());
    }
  };
