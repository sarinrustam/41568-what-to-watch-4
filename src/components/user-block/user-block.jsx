import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {getAuthStatus, getAvatar} from "../../reducer/user/selectors.js";
import {AuthorizationStatus} from "../../reducer/user/user.js";
import {Link} from "react-router-dom";
import {AppRoute} from "../../utils/utils.js";

class UserBlock extends React.PureComponent {
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
          <img src={`https://4.react.pages.academy${avatar}`} alt="User avatar" width="63" height="63" />
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

UserBlock.propTypes = {
  statusAuth: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

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
