import axios from "axios";
import { TokenExpiredError } from "jsonwebtoken";

import {
  LOGIN_USER,
  LOGOUT,
  GET_AUTH_USER,
  REGISTER_USER,
  AUTH_ERROR,
  SET_LOADING,
} from "../const/actionTypes";

export const register = (formData) => async (dispatch) => {
  dispatch(setLoading);
  try {
    const res = await axios.post("/api/auth/register", formData);
    //register user
    dispatch({
      type: REGISTER_USER,
      payload: res.data, // our res.data is : //auth.js line 43 // { msg: "Welcome, register Success", user, token: `Bearer ${token}` };
    });
  } catch (error) {
    console.log("err in actions dispatch register", error);
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

//login user
export const login = (formData) => async (dispatch) => {
  dispatch(setLoading);
  try {
    const res = await axios.post("/api/auth/login", formData);
    
    //register user
    dispatch({
      type: LOGIN_USER,
      payload: res.data, // our res.data is : //auth.js line 73 // { msg: "Welcome, Login Success", user, token: `Bearer ${token}` };
    });
  } catch (error) {
    console.log("err in actions dispatch login", error);
    const errorsArray = error.response.data.errors;
    if (Array.isArray(errorsArray)) {
      errorsArray.forEach((err) => alert(err.msg));
    }
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

//get auth user

export const getAuthUser = () => async (dispatch) => {
  dispatch(setLoading);
  try {
    const options = {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    };
    const res = await axios.get("/api/auth/me", options);

    dispatch({
      type: GET_AUTH_USER,
      payload: res.data,
    });
  } catch (error) {
    console.log("err in getAuthUser", error);
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

export const logout = () => (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
};

const setLoading = () => (dispatch) => {
  dispatch({
    type: SET_LOADING,
  });
};
