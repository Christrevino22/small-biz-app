import { connect } from "react-redux";
import HomeListing from "../Components/HomeListing";
import { fetchListing } from "../redux/actions";

const mapStateToProps = (state) => {
  return {
    listing: state.listing,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchListing: () => dispatch(fetchListing()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeListing);
