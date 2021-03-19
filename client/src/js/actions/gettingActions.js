import axios from "axios";

import {
  GET_EVENT,
  GET_USER,
  PARTICIPATE_EVENT,
  UNPARTICIPATE_EVENT,
  GET_ONEUSER,
  DELETE_USER,
  DELETE_EVENT,
  UPDATE_EVENT,
} from "../const/actionTypes";

//get events
export const getEvents = () => async (dispatch) => {
  try {
    const res = await axios.get("api/event/allevents");
    dispatch({
      type: GET_EVENT,
      payload: res.data.allEvents,
    });
  } catch (error) {
    console.log(error);
  }
};
//get users
export const getUsers = () => async (dispatch) => {
  try {
    const res = await axios.get("api/auth/getusers");
    dispatch({
      type: GET_USER,
      payload: res.data.allUsers,
    });
  } catch (error) {
    console.log(error);
  }
};
//GET ONE USER
export const getUser = () => async (dispatch) => {
  try {
    const res = await axios.get("api/auth/me");
    dispatch({
      type: GET_ONEUSER,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};

//DELETE USER

export const deleteUser = (formData) => async (dispatch) => {
  try {
    const res = await axios.delete("/api/auth/delete", { data: formData });
    // console.log(formData);
    dispatch({
      type: DELETE_USER,
      payload: formData.userId,
    });
  } catch (error) {
    console.log(error);  
  }
};

// Participate to an event
export const participateFunc2 = (formData) => async (dispatch) => {
  try {
    const res = await axios.put("/api/event/participate", formData);
    dispatch({
      type: PARTICIPATE_EVENT,
      payload: { userId: formData.userId, eventId: formData.eventId },
    });
  } catch (error) {
    console.log(error);
  }
};
//unparticipate
export const unparticipateFunc = (formData) => async (dispatch) => {
  try {
    const res = await axios.put("/api/event/unparticipate", formData);
    dispatch({
      type: UNPARTICIPATE_EVENT,
      payload: { userId: formData.userId, eventId: formData.eventId },
    });
  } catch (error) {
    console.log(error);
  }
};

//delete event

export const deleteEvent = (eventId) => async (dispatch) => {
  try {
    const res = await axios.delete("/api/event/delete", {
      data: { _id: eventId },
    });
    dispatch({
      type: DELETE_EVENT,
      payload: eventId,
    });
  } catch (error) {
    console.log(error);
  }
};

//update event
export const unpdateEvent = (formData) => async (dispatch) => {
  try {
    const res = await axios.put("/api/event/update", formData);
    dispatch({
      type: UPDATE_EVENT,
      payload: formData,
    });
  } catch (error) {
    console.log(error);
  }
};
