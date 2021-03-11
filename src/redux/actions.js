/**
 * FETCH CORDINATES FOR YOUR MAP GIVEN A CERTAIN ADDRESS, DEPENDS HOW APP IS STRUCTURED
 * ADD A LISTING
 * DELETE A LISTING
 *
 */

export const addListing = (listing) => {
  return {
    type: "ADD_LISTING",
    value: listing,
  };
};

export const removeListing = (index) => {
  return {
    type: "REMOVE_LISTING",
    value: index,
  };
};

//login and out
//9urbanspace9