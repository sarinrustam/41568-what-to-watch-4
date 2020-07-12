import React, {PureComponent} from "react";
import PropTypes from "prop-types";

import SmallMovieCard from "../small-movie-card/small-movie-card.jsx";
import withSmallMovieCard from "../../hocs/with-small-movie-card/with-small-movie-card.js";

const SmallMovieCardWrapped = withSmallMovieCard(SmallMovieCard);

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
  movies: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
      })
  ).isRequired,
  setActiveItem: PropTypes.func.isRequired,
};

export default SmallMovieCardList;
