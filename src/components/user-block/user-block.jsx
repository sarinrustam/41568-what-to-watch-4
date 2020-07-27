import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {getAuthStatus, getAvatar} from "../../reducer/user/selectors.js";
import {AuthorizationStatus} from "../../reducer/user/user.js";

class UserBlock extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  renderUserAvatar() {
    const {avatar} = this.props;

    return (
      <div className="user-block__avatar">
        <img src={`https://4.react.pages.academy${avatar}`} alt="User avatar" width="63" height="63" />
      </div>
    );
  }

  renderUserSignInLink() {
    return (
      <a href="/login" className="user-block__link">Sign in</a>
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
