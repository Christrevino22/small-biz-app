import { connect } from "react-redux";
import HomeListing from "../Components/HomeListing";
import { fetchListing } from "../redux/actions";

const mapStateToProps = (state) => {
  return {
    listing: state.listing,
  };
};

const mapStateToProps = (dispatch) => {
  return {
    fetchListing: () => dispatch(fetchListing()),
  };
};

export default connect(mapStateToProps)(HomeListing);
