import * as React from "react";

import SmallMovieCard from "../small-movie-card/small-movie-card";
import withVideoPlay from "../../hocs/with-video-play/with-video-play";
import {Movie as MovieType} from "../../types/types";

interface Props {
  movies: [MovieType];
  onSetActiveItem: (movie: MovieType) => void;
}

const SmallMovieCardWrapped = withVideoPlay(SmallMovieCard);

const SmallMovieCardList = (props: Props): React.ReactElement => {
  const {movies, onSetActiveItem} = props;

  return (
    <div
      className="catalog__movies-list">
      {movies.map((movie) => (
        <SmallMovieCardWrapped
          key={movie.id}
          movie={movie}
          onMovieClick={onSetActiveItem}
        />
      ))}
    </div>
  );
};

export default SmallMovieCardList;
