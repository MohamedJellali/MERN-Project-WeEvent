import { combineReducers } from "redux";
import authReducer from "./authReducer";
import addEventReducer from './addEventReducer'
import gettingReducer from './gettingReducer'

export default combineReducers({
  authReducer, addEventReducer, gettingReducer
});
