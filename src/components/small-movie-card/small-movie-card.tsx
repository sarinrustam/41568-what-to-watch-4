import * as React from "react";
import {Movie as MovieType} from "../../types/types";

import VideoPlayer from "../video-player/video-player";

interface Props {
  movie: MovieType,
  onMovieClick: (movie: MovieType) => void,
  onMouseEnter: () => void,
  onMouseLeave: () => void,
  isPlaying: boolean,
};

const SmallMovieCard = (props: Props): React.ReactElement => {
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

export default SmallMovieCard;
