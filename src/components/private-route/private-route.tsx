import * as React from "react";
import {Route, Redirect, RouteProps} from "react-router-dom";
import {connect} from "react-redux";
import {AppRoute} from "../../utils/utils.js";
import {AuthorizationStatus} from "../../reducer/user/user.js";
import {getAuthStatus} from "../../reducer/user/selectors.js";

type Props = RouteProps & {
  authorizationStatus: string;
}

const PrivateRoute: React.FunctionComponent<Props> = (props: Props) => {
  return (
    props.authorizationStatus === AuthorizationStatus.AUTH ? <Route {...props}/> : <Redirect to={AppRoute.LOGIN}/>
  );
};

const mapStateToProps = (state) => {
  return {
    authorizationStatus: getAuthStatus(state),
  };
};

export {PrivateRoute};
export default connect(mapStateToProps)(PrivateRoute);
