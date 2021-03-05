import { combineReducers } from "redux";

const user = (state = null) => state;
const listings = (state = []) => state;
const map = (state = null) => state;
const loggedIn = (state = null) => state;

export default combineReducers({ user, listings, map, loggedIn });
