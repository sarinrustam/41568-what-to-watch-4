import React from "react";
import PropTypes from "prop-types";

import {setTime} from "../../utils/utils.js";

const MoviePageDetails = (props) => {
  const {movie} = props;
  const {crew, duration, genre, release} = movie;
  const {director, actors} = crew;

  const timeFormat = setTime(duration);

  return (
    <>
      <div className="movie-card__text movie-card__row">
        <div className="movie-card__text-col">
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Director</strong>
            <span className="movie-card__details-value">{director}</span>
          </p>
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Starring</strong>
            <span className="movie-card__details-value">{actors}</span>
          </p>
        </div>

        <div className="movie-card__text-col">
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Run Time</strong>
            <span className="movie-card__details-value">{timeFormat.join(`h `)}min</span>
          </p>
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Genre</strong>
            <span className="movie-card__details-value">{genre}</span>
          </p>
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Released</strong>
            <span className="movie-card__details-value">{release}</span>
          </p>
        </div>
      </div>
    </>
  );
};

MoviePageDetails.propTypes = {
  movie: PropTypes.shape({
    crew: PropTypes.shape({
      director: PropTypes.string.isRequired,
      actors: PropTypes.array.isRequired,
    }).isRequired,
    duration: PropTypes.number.isRequired,
    genre: PropTypes.string.isRequired,
    release: PropTypes.number.isRequired
  }).isRequired
};

export default MoviePageDetails;
