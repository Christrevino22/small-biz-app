import { connect } from "react-redux";
import HomeListing from "../Components/HomeListing";
import { addBuisness, removeBuisness } from "../redux/actions";

const mapStateToProps = (state) => {
  return {
    buisness: state.buisness,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addBuisness: (buisness) => dispatch(addBuisness(buisness)),
    removeBuisness: (index) => dispatch(removeBuisness(index)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeListing);
