import React from "react";
import PropTypes from "prop-types";
import {PAGE_FILTERS} from "../../utils/utils.js";

import MoviePageReviews from "../movie-page-review/movie-page-reviews.jsx";
import MoviePageOverview from "../movie-page-overview/movie-page-overview.jsx";
import MoviePageDetails from "../movie-page-details/movie-page-details.jsx";
import MovieCardNavigationItem from "../movie-card-navigation-item/movie-card-navigation-item.jsx";

const MovieCardDescription = (props) => {
  const {activeFilter, setActiveFilter, movie} = props;

  const renderActiveMovieSection = () => {
    switch (activeFilter) {
      case `Details`:
        return <MoviePageDetails
          movie={movie}
        />;
      case `Reviews`:
        return <MoviePageReviews
          movie={movie}
        />;
      default:
        return <MoviePageOverview
          movie={movie}
        />;
    }
  };

  return (
    <div className="movie-card__desc">
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          {PAGE_FILTERS.map((filter) => (
            <MovieCardNavigationItem
              key={filter}
              filter={filter}
              activeFilter={activeFilter}
              setActiveFilter={setActiveFilter}
            />
          ))}
        </ul>
      </nav>
      {renderActiveMovieSection()}
    </div>
  );
};

MovieCardDescription.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    coverBackground: PropTypes.string.isRequired,
    release: PropTypes.number.isRequired,
    poster: PropTypes.string.isRequired,
    rating: PropTypes.shape({
      score: PropTypes.number.isRequired,
      scoreDesc: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
    }).isRequired,
    crew: PropTypes.shape({
      director: PropTypes.string.isRequired,
      actors: PropTypes.string.isRequired
    }).isRequired,
  }).isRequired,
  activeFilter: PropTypes.string.isRequired,
  setActiveFilter: PropTypes.func.isRequired,
};

export default MovieCardDescription;
