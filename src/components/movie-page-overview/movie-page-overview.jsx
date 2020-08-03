import React from "react";
import PropTypes from "prop-types";

const MoviePageOverview = (props) => {
  const {movie} = props;
  const {description, crew, rating} = movie;
  const {director, actors} = crew;
  const {score, scoreDesc, amount} = rating;
  return (
    <>
      <div className="movie-rating">
        <div className="movie-rating__score">{score}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{scoreDesc}</span>
          <span className="movie-rating__count">{amount} ratings</span>
        </p>
      </div>

      <div className="movie-card__text">
        <p>{description}</p>

        <p className="movie-card__director"><strong>Director: {director}</strong></p>

        <p className="movie-card__starring"><strong>Starring: {actors} and other</strong></p>
      </div>
    </>
  );
};

MoviePageOverview.propTypes = {
  movie: PropTypes.shape({
    description: PropTypes.string.isRequired,
    rating: PropTypes.shape({
      score: PropTypes.number.isRequired,
      scoreDesc: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired
    }).isRequired,
    crew: PropTypes.shape({
      director: PropTypes.string.isRequired,
      actors: PropTypes.array.isRequired
    }).isRequired
  }).isRequired
};

export default MoviePageOverview;
