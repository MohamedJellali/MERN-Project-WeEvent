import {
  ADD_EVENT,
  DELETE_EVENT,
  UPDATE_EVENT,
  SET_LOADING,
  ADDEVENT_ERROR,
  FILTRE_EVENT,
} from "../const/actionTypes";

const initialState = {
  event: null,
  msg: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_EVENT:
      return { ...state, ...payload };

    default:
      return state;
  }
};
