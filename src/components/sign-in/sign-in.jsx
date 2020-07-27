import React, {createRef} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Operation as UserOperation} from "../../reducer/user/user.js";
import {AuthorizationStatus} from "../../reducer/user/user.js";
import {getAuthStatus, getErrorMessage} from "../../reducer/user/selectors.js";
import {Redirect} from "react-router-dom";

class SignIn extends React.PureComponent {
  constructor(props) {
    super(props);

    this.emailRef = createRef();
    this.passwordRef = createRef();

    this.handleSignIn = this.handleSignIn.bind(this);
  }

  handleSignIn(event) {
    event.preventDefault();

    const email = this.emailRef.current.value;
    const password = this.passwordRef.current.value;

    this.props.onLogin({email, password});
  }

  renderError() {
    const {errorMessage} = this.props;

    return (
      <div
        className="sign-in__message"
      >
        <p>{errorMessage}</p>
      </div>
    );
  }

  render() {
    const {statusAuth, errorMessage} = this.props;

    if (statusAuth === AuthorizationStatus.AUTH) {
      return <Redirect to='/'/>;
    }

    return (
      <div className="user-page">
        <header className="page-header user-page__head">
          <div className="logo">
            <a href="main.html" className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <h1 className="page-title user-page__title">Sign in</h1>
        </header>

        <div className="sign-in user-page__content">
          <form
            action="#"
            className="sign-in__form"
            onSubmit={this.handleSignIn}
          >
            {errorMessage !== `` ? this.renderError() : ``}
            <div className="sign-in__fields">
              <div className="sign-in__field">
                <input
                  ref={this.emailRef}
                  className="sign-in__input"
                  type="email"
                  placeholder="Email address"
                  name="user-email"
                  id="user-email"
                />
                <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
              </div>
              <div className="sign-in__field">
                <input
                  ref={this.passwordRef}
                  className="sign-in__input"
                  type="password"
                  placeholder="Password"
                  name="user-password"
                  id="user-password"
                />
                <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
              </div>
            </div>
            <div className="sign-in__submit">
              <button className="sign-in__btn" type="submit">Sign in</button>
            </div>
          </form>
        </div>

        <footer className="page-footer">
          <div className="logo">
            <a href="main.html" className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    );
  }
}

SignIn.propTypes = {
  onLogin: PropTypes.func.isRequired,
  statusAuth: PropTypes.string.isRequired,
  errorMessage: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => {
  const statusAuth = getAuthStatus(state);
  const errorMessage = getErrorMessage(state);

  return {
    statusAuth,
    errorMessage,
  };
};

const mapDispatchToProps = {
  onLogin: UserOperation.login,
};

export {SignIn};
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);