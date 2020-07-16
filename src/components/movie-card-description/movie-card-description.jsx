import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {PAGE_FILTERS} from "../../utils/utils.js";

import MoviePageReviews from "../movie-page-review/movie-page-reviews.jsx";
import MoviePageOverview from "../movie-page-overview/movie-page-overview.jsx";
import MoviePageDetails from "../movie-page-details/movie-page-details.jsx";
import MovieCardNavigationItem from "../movie-card-navigation-item/movie-card-navigation-item.jsx";

class MovieCardDescription extends PureComponent {
  constructor(props) {
    super(props);
  }

  renderActiveMovieSection() {
    switch (this.props.activeItem) {
      case `Details`:
        return <MoviePageDetails
          movie={this.props.movie}
        />;
      case `Reviews`:
        return <MoviePageReviews
          movie={this.props.movie}
        />;
      default:
        return <MoviePageOverview
          movie={this.props.movie}
        />;
    }
  }

  render() {
    const {activeItem, setActiveItem} = this.props;

    return (
      <div className="movie-card__desc">
        <nav className="movie-nav movie-card__nav">
          <ul className="movie-nav__list">
            {PAGE_FILTERS.map((filter) => (
              <MovieCardNavigationItem
                key={filter}
                filter={filter}
                isActive={activeItem === filter}
                setActiveFilter={setActiveItem}
              />
            ))}
          </ul>
        </nav>
        {this.renderActiveMovieSection()}
      </div>
    );
  }
}

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
  activeItem: PropTypes.string,
  setActiveItem: PropTypes.func.isRequired,
};

export default MovieCardDescription;
