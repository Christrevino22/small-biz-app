import { connect } from "react-redux";
import LoginCom from "../Components/LoginCom";

const mapStateToProps = (state) => {
  return {
    loggedIn: state.loggedIn,
    person: state.person,
  };
};

export default connect(mapStateToProps)(LoginCom);
