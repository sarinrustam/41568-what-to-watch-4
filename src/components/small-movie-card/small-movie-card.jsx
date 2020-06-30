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
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearTimeout(this.timerId);
    }
  }

  render() {
    const {movie, onMouseOver, onMovieClick} = this.props;

    const onArticleMouseOver = () => {
      onMouseOver(movie.id);
    };

    const handlerMovieClick = (event) => {
      event.preventDefault();
      onMovieClick(movie);
    };

    const handlerMouseEnter = () => {
      this.timerId = setTimeout(() =>
        this.setState({
          isPlaying: true
        }), 1000);
    };

    const handlerMouseLeave = () => {
      clearTimeout(this.timerId);
      this.setState({
        isPlaying: false
      });
    };

    return (
      <article className="small-movie-card catalog__movies-card"
        onMouseOver={onArticleMouseOver}
        onMouseEnter={handlerMouseEnter}
        onMouseLeave={handlerMouseLeave}
      >
        <div
          className="small-movie-card__image"
          onClick={handlerMovieClick}
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
            onClick={handlerMovieClick}
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
    // img: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired
  }).isRequired,
  onMouseOver: PropTypes.func.isRequired,
  onMovieClick: PropTypes.func.isRequired,
};

export default SmallMovieCard;
