import React from "react";
import {connect} from "react-redux";
import {Operation as CommentOperation} from "../../reducer/comments/comments.js";
import PropTypes from "prop-types";
import {AuthorizationStatus} from "../../reducer/user/user.js";
import {getAuthStatus} from "../../reducer/user/selectors.js";
import {CommentLength} from "../../utils/utils.js";
import {Redirect} from "react-router-dom";

const withAddReview = (Component) => {
  class WithAddReview extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        rating: 0,
        comment: ``,
        isButtonDisabled: true,
        readOnly: false,
        errorText: ``,
      };

      this.handleInputComment = this.handleInputComment.bind(this);
      this.handleChangeRating = this.handleChangeRating.bind(this);
      this.handleSendComment = this.handleSendComment.bind(this);
    }

    handleInputComment(event) {
      this.setState({
        comment: event.target.value,
      });

      this.checkDisableButton();
    }

    handleChangeRating(event) {
      this.setState({
        rating: +event.target.value,
      });
      this.checkDisableButton();
    }

    handleSendComment(event) {
      event.preventDefault();

      this.setState({
        readOnly: true,
        isButtonDisabled: true,
        errorText: ``,
      });

      const onSuccess = () => {
        this.setState({
          readOnly: false,
          isButtonDisabled: false,
        });
        this.props.history.push(`/dev-movie/${this.props.match.params.id}`);
      };

      const onError = (errorText) => {
        this.setState({
          readOnly: false,
          isButtonDisabled: false,
          errorText,
        });
      };

      this.props.onSendComment({
        movieId: this.props.match.params.id,
        comment: this.state.comment,
        rating: this.state.rating,
      }, onSuccess, onError);
    }

    checkDisableButton() {
      const commentLength = this.state.comment.length;
      if (commentLength < CommentLength.MIN && commentLength >= CommentLength.MAX && this.state.rating === 0) {
        this.setState({
          isButtonDisabled: true,
        });
      } else {
        this.setState({
          isButtonDisabled: false,
        });
      }
    }

    render() {
      const {statusAuth} = this.props;

      if (statusAuth === AuthorizationStatus.NO_AUTH) {
        return <Redirect to='/login'/>;
      }
      return (
        <Component
          {...this.state}
          onInputComment={this.handleInputComment}
          onChangeRating={this.handleChangeRating}
          onSendComment={this.handleSendComment}
        />
      );
    }
  }

  WithAddReview.propTypes = {
    onSendComment: PropTypes.func.isRequired,
    statusAuth: PropTypes.string.isRequired,
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string.isRequired,
      }).isRequired
    }).isRequired,
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired,
  };


  const mapStateToProps = (state) => {
    const statusAuth = getAuthStatus(state);

    return {
      statusAuth,
    };
  };

  const mapDispatchToProps = {
    onSendComment: CommentOperation.sendComment,
  };

  return connect(mapStateToProps, mapDispatchToProps)(WithAddReview);
};

export default withAddReview;
