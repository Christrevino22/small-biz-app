/**
 * FETCH CORDINATES FOR YOUR MAP GIVEN A CERTAIN ADDRESS, DEPENDS HOW APP IS STRUCTURED
 * ADD A LISTING
 * DELETE A LISTING
 *
 */
const url =
  "https://maps.google.com/maps/api/geocode/json?key=process.env.REACT_APP_API_KEY&address=1600+Amphitheatre+Parkway,+Mountain+View,+CA";

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

export const addCar = (car) => {
  return {
    type: "ADD_CAR",
    value: car,
  };
};

export const removeCar = (index) => {
  return {
    type: "REMOVE_CAR",
    value: index,
  };
};

//login and out
