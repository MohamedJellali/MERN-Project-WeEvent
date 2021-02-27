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

const initialState = {
  events: [],
  users: [],
  user: null,
};

function removeItemAll(arr, value) {
  var i = 0;
  while (i < arr.length) {
    if (arr[i] === value) {
      arr.splice(i, 1);
    } else {
      ++i;
    }
  }
  return arr;
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_EVENT:
      return { ...state, events: payload };
    case GET_USER:
      return { ...state, users: payload };
    case DELETE_USER:
      return { ...state, users: state.users.filter((el) => el._id != payload) };
    case GET_ONEUSER:
      return { ...state, users: payload };
    case DELETE_EVENT:
      return {
        ...state,
        events: state.events.filter((el) => el._id != payload),
      };
    case PARTICIPATE_EVENT:
      return {
        ...state,
        events: state.events.map((event) =>
          event._id == payload.eventId &&
          !event.participant.includes(payload.userId)
            ? { ...event, participant: [...event.participant, payload.userId] }
            : event
        ),
      };
    case UNPARTICIPATE_EVENT:
      return {
        ...state,
        events: state.events.map((event) =>
          event._id == payload.eventId &&
          !event.participant.includes(payload.userId)
            ? {
                ...event,
                participant: removeItemAll(event.participant, payload.userId),
              }
            : event
        ),
      };
    case UPDATE_EVENT:
      return {
        ...state,
        events: state.events.map((event) =>
          event._id == payload._id
            ? {
                ...event,
                nameOfEvent : payload.nameOfEvent,
                description: payload.description,
                category: payload.category,
                activity: payload.activity,
                address: payload.address,
                city: payload.city,
                governorate: payload.governorate,
                date: payload.date,
              }
            : event
        ),
      };
    default:
      return state;
  }
};
