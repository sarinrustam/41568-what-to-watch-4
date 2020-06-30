import React, {PureComponent} from "react";
import PropTypes from "prop-types";

import VideoPlayer from "../video-player/video-player.jsx";

class SmallMovieCard extends PureComponent {
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
    const {movie} = this.props;

    return (
      <article className="small-movie-card catalog__movies-card"
        onMouseOver={this.onArticleMouseOver}
        onMouseEnter={this.handlerMouseEnter}
        onMouseLeave={this.handlerMouseLeave}
      >
        <div
          className="small-movie-card__image"
          onClick={this.handlerMovieClick}
        >
          <VideoPlayer
            isMuted={true}
            isPlaying={this.state.isPlaying}
            poster={movie.poster}
            src={movie.preview}
          />
        </div>
        <h3 className="small-movie-card__title">
          <a
            className="small-movie-card__link"
            href="movie-page.html"
            onClick={this.handlerMovieClick}
          >
            {movie.title}
          </a>
        </h3>
      </article>
    );
  }
}

SmallMovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired
  }).isRequired,
  onMouseOver: PropTypes.func.isRequired,
  onMovieClick: PropTypes.func.isRequired,
};

export default SmallMovieCard;
