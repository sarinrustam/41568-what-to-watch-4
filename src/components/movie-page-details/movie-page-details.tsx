import * as React from "react";
import {setTime} from "../../utils/utils";
import {Movie as MovieType} from "../../types/types";

interface Props {
  movie: MovieType,
};

const MoviePageDetails = (props: Props): React.ReactElement => {
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

export default MoviePageDetails;
