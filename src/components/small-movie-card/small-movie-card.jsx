import React from "react";
import PropTypes from "prop-types";

import VideoPlayer from "../video-player/video-player.jsx";

const SmallMovieCard = (props) => {
  const {movie, onMovieClick, onMouseEnter, onMouseLeave, isPlaying} = props;

  const handleMovieClick = (event) => {
    event.preventDefault();
    onMovieClick(movie);
  };

  return (
    <article className="small-movie-card catalog__movies-card"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div
        className="small-movie-card__image"
        onClick={handleMovieClick}
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
          onClick={handleMovieClick}
        >
          {movie.title}
        </a>
      </h3>
    </article>
  );
};

SmallMovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired
  }).isRequired,
  onMovieClick: PropTypes.func.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  isPlaying: PropTypes.bool.isRequired
};

export default SmallMovieCard;
