import { combineReducers } from "redux";

const listings = (state = [], action) => {
  switch (action.type) {
    case "ADD_LISTING":
      return [...state, action.value];
    case "REMOVE_LISTING":
      const newState = [...state];
      newState.splice(action.value, 1);
      return newState;

    default:
      return state;
  }
};

// const map = (state = [], action) => {
//   switch (action.type) {
//     case "FETCH_LISTING":
//       return action.value;
//     default:
//       return state;
//   }
// };
//CAN'T SEEM TO GET MY STATE TO PASS THRU FUCKING WEIRD YO
const user = (state = null) => state;

export default combineReducers({ user, listings });
