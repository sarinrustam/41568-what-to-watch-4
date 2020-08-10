import * as React from "react";
import {connect} from "react-redux";
import {getAuthStatus, getAvatar} from "../../reducer/user/selectors.js";
import {AuthorizationStatus} from "../../reducer/user/user.js";
import {Link} from "react-router-dom";
import {AppRoute, API_URL} from "../../utils/utils.js";

interface Props {
  statusAuth: string,
  avatar: string,
};

class UserBlock extends React.PureComponent<Props, {}> {
  constructor(props) {
    super(props);
  }

  renderUserAvatar() {
    const {avatar} = this.props;

    return (
      <div className="user-block__avatar">
        <Link
          to={AppRoute.MY_LIST}
        >
          <img src={`${API_URL}${avatar}`} alt="User avatar" width="63" height="63" />
        </Link>
      </div>
    );
  }

  renderUserSignInLink() {
    return (
      <Link
        to={AppRoute.LOGIN}
        className="user-block__link"
      >
        Sign in
      </Link>
    );
  }

  render() {
    const {statusAuth} = this.props;

    return (
      <div className="user-block">
        {statusAuth === AuthorizationStatus.AUTH ? this.renderUserAvatar() : this.renderUserSignInLink()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const statusAuth = getAuthStatus(state);
  const avatar = getAvatar(state);

  return {
    statusAuth,
    avatar,
  };
};

export {UserBlock};
export default connect(mapStateToProps)(UserBlock);
