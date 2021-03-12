import { combineReducers } from "redux";

const buisness = (state = [], action) => {
  switch (action.type) {
    case "ADD_BUISNESS":
      return [...state, action.value];
    case "REMOVE_BUISNESS":
      const newBuisness = [...state];
      newBuisness.splice(action.value, 1);
      return newBuisness;

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

export default combineReducers({ user, buisness });
