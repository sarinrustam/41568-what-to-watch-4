import * as React from "react";
import {Route, Redirect, RouteProps} from "react-router-dom";
import {connect} from "react-redux";
import {AppRoute} from "../../utils/utils";
import {AuthorizationStatus} from "../../reducer/user/user";
import {getAuthStatus} from "../../reducer/user/selectors";

type Props = RouteProps & {
  authorizationStatus: string;
  render: () => React.ReactNode;
}

const PrivateRoute: React.FunctionComponent<Props> = (props: Props) => {
  return (
    <Route
      render={() => {
        return (
          props.authorizationStatus === AuthorizationStatus.AUTH
            ? props.render(props)
            : <Redirect to={AppRoute.LOGIN} />
        );
      }}/>
  );
};

const mapStateToProps = (state) => {
  return {
    authorizationStatus: getAuthStatus(state),
  };
};

export {PrivateRoute};
export default connect(mapStateToProps)(PrivateRoute);
