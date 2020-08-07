import React, {PureComponent} from "react";
import PropTypes from "prop-types";

import SmallMovieCard from "../small-movie-card/small-movie-card.jsx";
import withVideoPlay from "../../hocs/with-video-play/with-video-play.js";

const SmallMovieCardWrapped = withVideoPlay(SmallMovieCard);

class SmallMovieCardList extends PureComponent {
  render() {
    const {movies, setActiveItem} = this.props;

    return (
      <div
        className="catalog__movies-list">
        {movies.map((movie) => (
          <SmallMovieCardWrapped
            key={movie.id}
            movie={movie}
            onMovieClick={setActiveItem}
          />
        ))}
      </div>
    );
  }
}

SmallMovieCardList.propTypes = {
  movies: PropTypes.array.isRequired,
  setActiveItem: PropTypes.func.isRequired,
};

export default SmallMovieCardList;
