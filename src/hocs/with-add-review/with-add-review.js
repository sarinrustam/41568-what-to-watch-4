import React from "react";
import {connect} from "react-redux";
import {Operation as CommentOperation} from "../../reducer/comments/comments.js";
import PropTypes from "prop-types";
import {getErrorText, getIsLoading} from "../../reducer/comments/selectors.js";
import {getMovieById} from "../../reducer/data/selectors.js";
import {AppRoute} from "../../utils/utils.js";

const withAddReview = (Component) => {
  class WithAddReview extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        rating: 0,
        comment: ``,
      };

      this.handleInputComment = this.handleInputComment.bind(this);
      this.handleChangeRating = this.handleChangeRating.bind(this);
      this.handleSendComment = this.handleSendComment.bind(this);
    }

    handleInputComment(event) {
      this.setState({
        comment: event.target.value,
      });
    }

    handleChangeRating(event) {
      this.setState({
        rating: +event.target.value,
      });
    }

    handleSendComment(event) {
      event.preventDefault();

      const onSuccess = () => {
        this.props.history.push(`${AppRoute.FILMS}/${this.props.match.params.id}`);
      };

      this.props.onSendComment({
        movieId: this.props.match.params.id,
        comment: this.state.comment,
        rating: this.state.rating,
      }, onSuccess);
    }

    render() {
      return (
        <Component
          {...this.props}
          {...this.state}
          onInputComment={this.handleInputComment}
          onChangeRating={this.handleChangeRating}
          onSendComment={this.handleSendComment}
        />
      );
    }
  }

  WithAddReview.propTypes = {
    errorText: PropTypes.string.isRequired,
    isLoading: PropTypes.bool.isRequired,
    onSendComment: PropTypes.func.isRequired,
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string.isRequired,
      }).isRequired
    }).isRequired,
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired,
  };


  const mapStateToProps = (state, props) => {
    const errorText = getErrorText(state);
    const isLoading = getIsLoading(state);
    const movie = getMovieById(state, props.match.params.id);

    return {
      errorText,
      isLoading,
      movie
    };
  };

  const mapDispatchToProps = {
    onSendComment: CommentOperation.sendComment,
  };

  return connect(mapStateToProps, mapDispatchToProps)(WithAddReview);
};

export default withAddReview;
