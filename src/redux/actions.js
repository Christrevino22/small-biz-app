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

const url =
  "https://maps.google.com/maps/api/geocode/json?key=&address=1600+Amphitheatre+Parkway,+Mountain+View,+CA";

export const fetchListing = () => {
  return (dispatch) => {
    fetch(url)
      .then((res) => res.json())
      .then((response) => {
        const action = {
          type: "FETCH_LISTING",
          value: response.Results,
        };
        dispatch(action);
      });
  };
};
