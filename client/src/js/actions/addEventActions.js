import axios from "axios";

import {
  ADD_EVENT,
  DELETE_EVENT,
  UPDATE_EVENT,
  SET_LOADING,
  ADDEVENT_ERROR,
  FILTRE_EVENT,
} from "../const/actionTypes";

export const addEvent = (formData) => async (dispatch) => {
  dispatch(setLoading);
  try {
    const res = await axios.post("/api/event/add", formData);
    dispatch({
      type: ADD_EVENT,
      payload: res.data,
    });
  } catch (error) {
    console.log("err in actions dispatch add event", error);
    const errorsArray = error.response.data.errors;
    if (Array.isArray(errorsArray)) {
      errorsArray.forEach((err) => alert(err.msg));
    }
    dispatch({
      type: ADDEVENT_ERROR,
    });
  }
};


const setLoading = () => (dispatch) => {
  dispatch({
    type: SET_LOADING,
  });
};
