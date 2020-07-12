import React, {PureComponent} from "react";
import PropTypes from "prop-types";

import VideoPlayer from "../video-player/video-player.jsx";

class SmallMovieCard extends PureComponent {
  render() {
    const {movie, handlerMovieClick, handlerMouseEnter, handlerMouseLeave, isPlaying} = this.props;

    const onHandlerMovieClick = (event) => {
      event.preventDefault();
      handlerMovieClick(movie);
    };

    return (
      <article className="small-movie-card catalog__movies-card"
        onMouseEnter={handlerMouseEnter}
        onMouseLeave={handlerMouseLeave}
      >
        <div
          className="small-movie-card__image"
          onClick={onHandlerMovieClick}
        >
          <VideoPlayer
            isMuted={true}
            isPlaying={isPlaying}
            poster={movie.poster}
            src={movie.preview}
          />
        </div>
        <h3 className="small-movie-card__title">
          <a
            className="small-movie-card__link"
            href="movie-page.html"
            onClick={onHandlerMovieClick}
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
  handlerMovieClick: PropTypes.func.isRequired,
  handlerMouseEnter: PropTypes.func.isRequired,
  handlerMouseLeave: PropTypes.func.isRequired,
  isPlaying: PropTypes.bool.isRequired
};

export default SmallMovieCard;
