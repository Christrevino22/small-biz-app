/**
 * FETCH CORDINATES FOR YOUR MAP GIVEN A CERTAIN ADDRESS, DEPENDS HOW APP IS STRUCTURED
 * ADD A LISTING
 * DELETE A LISTING
 *
 */

export const addBuisness = (buisness) => {
  return {
    type: "ADD_BUISNESS",
    value: buisness
  };
};

export const removeBuisness = (index) => {
  return {
    type: "REMOVE_BUISNESS",
    value: index
  };
};

//login and out
//9urbanspace9
