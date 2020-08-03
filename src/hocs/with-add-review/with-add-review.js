import React from "react";
import {connect} from "react-redux";
import {Operation as CommentOperation} from "../../reducer/comments/comments.js";
import PropTypes from "prop-types";
import {getErrorText, getIsLoading} from "../../reducer/comments/selectors.js";
import {getMovieById} from "../../reducer/data/selectors.js";

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
        rating: parseInt(event.target.value, 10),
      });
    }

    handleSendComment(event) {
      event.preventDefault();

      this.props.onSendComment({
        movieId: this.props.match.params.id,
        comment: this.state.comment,
        rating: this.state.rating,
      });
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
