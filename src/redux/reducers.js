import { combineReducers } from "redux";

const listings = (state = [], action) => {
  switch(action.type) {
    case "FETCH_LISTING":
        return action.value
    default:
        return state
  }
};

const map = (state = null) => state;
const user = (state = null) => state;

export default combineReducers({ user, listings, map });
