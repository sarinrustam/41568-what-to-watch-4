import React from "react";
import PropTypes from "prop-types";

import SmallMovieCard from "../small-movie-card/small-movie-card.jsx";
import withVideoPlay from "../../hocs/with-video-play/with-video-play.js";

const SmallMovieCardWrapped = withVideoPlay(SmallMovieCard);

const SmallMovieCardList = (props) => {
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

SmallMovieCardList.propTypes = {
  movies: PropTypes.array.isRequired,
  onSetActiveItem: PropTypes.func.isRequired,
};

export default SmallMovieCardList;
