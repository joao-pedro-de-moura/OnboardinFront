import { combineReducers } from "redux";
import login from './reduce'

export default combineReducers({
   auth: login
})