import * as React from "react";
import {connect} from "react-redux";
import {Operation as CommentOperation} from "../../reducer/comments/comments";
import {getErrorText, getIsLoading} from "../../reducer/comments/selectors";
import {getMovies} from "../../reducer/data/selectors";

interface Props {
  errorText: string,
    isLoading: boolean,
    onSendComment: (obj: {movieId: string, rating: number, comment: string}) => void,
    match: {
      params: {
        id: string
      }
    }
};

interface State {
  rating: number,
  comment: string,
};

const withAddReview = (Component) => {
  class WithAddReview extends React.PureComponent<Props, State> {
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

  const mapStateToProps = (state, props) => {
    const errorText = getErrorText(state);
    const isLoading = getIsLoading(state);
    const movies = getMovies(state);
    const movie = movies.find((movieItem) => movieItem.id === props.match.params.id);

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
