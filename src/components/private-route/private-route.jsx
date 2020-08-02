import React from "react";
import PropTypes from "prop-types";
import {Route, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {AppRoute} from "../../utils/utils.js";
import {AuthorizationStatus} from "../../reducer/user/user.js";
import {getAuthStatus} from "../../reducer/user/selectors.js";

const PrivateRoute = (props) => {
  return (
    props.authorizationStatus === AuthorizationStatus.AUTH ? <Route {...props}/> : <Redirect to={AppRoute.LOGIN}/>
  );
};

PrivateRoute.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => {
  return {
    authorizationStatus: getAuthStatus(state),
  };
};

export {PrivateRoute};
export default connect(mapStateToProps)(PrivateRoute);
