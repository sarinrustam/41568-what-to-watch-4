import * as React from "react";
import {setRatingDesc} from "../../utils/utils";
import {Movie as MovieType} from "../../types/types";

interface Props {
  movie: MovieType,
};

const MoviePageOverview = (props: Props): React.ReactElement => {
  const {movie} = props;
  const {description, crew, rating} = movie;
  const {director, actors} = crew;
  const {score, amount} = rating;

  const ratingDesc = setRatingDesc(score);

  return (
    <>
      <div className="movie-rating">
        <div className="movie-rating__score">{score}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{ratingDesc}</span>
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

export default MoviePageOverview;
