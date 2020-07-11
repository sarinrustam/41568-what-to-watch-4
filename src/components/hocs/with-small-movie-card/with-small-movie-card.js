import React from "react";
import PropTypes from "prop-types";

const withSmallMovieCard = (Component) => {
  class WithSmallMovieCard extends React.PureComponent {
    constructor(props) {
      super(props);

      this.timerId = null;

      this.state = {
        isPlaying: false,
      };

      this.onArticleMouseOver = this.onArticleMouseOver.bind(this);
      this.handlerMovieClick = this.handlerMovieClick.bind(this);
      this.handlerMouseEnter = this.handlerMouseEnter.bind(this);
      this.handlerMouseLeave = this.handlerMouseLeave.bind(this);
    }

    componentWillUnmount() {
      if (this.timerId) {
        clearTimeout(this.timerId);
      }
    }

    onArticleMouseOver() {
      const {movie, onMouseOver} = this.props;
      onMouseOver(movie.id);
    }

    handlerMovieClick(event) {
      const {onMovieClick, movie} = this.props;
      event.preventDefault();
      onMovieClick(movie);
    }

    handlerMouseEnter() {
      this.timerId = setTimeout(() =>
        this.setState({
          isPlaying: true
        }), 1000);
    }

    handlerMouseLeave() {
      clearTimeout(this.timerId);
      this.setState({
        isPlaying: false
      });
    }

    render() {
      return (
        <Component
          movie={this.props.movie}
          isPlaying={this.state.isPlaying}
          handlerMovieClick={this.handlerMovieClick}
          handlerMouseEnter={this.handlerMouseEnter}
          handlerMouseLeave={this.handlerMouseLeave}
          onArticleMouseOver={this.onArticleMouseOver}
        />
      );
    }
  }

  WithSmallMovieCard.propTypes = {
    movie: PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster: PropTypes.string.isRequired,
      preview: PropTypes.string.isRequired
    }).isRequired,
    onMouseOver: PropTypes.func.isRequired,
    onMovieClick: PropTypes.func.isRequired,
  };

  return WithSmallMovieCard;
};

export default withSmallMovieCard;
