import React from "react";
import PropTypes from "prop-types";

const MovieCardNavigationItem = (props) => {
  const {onSetActiveFilter, filter, isActive} = props;

  const handlerSetActiveFilter = (event) => {
    event.preventDefault();
    onSetActiveFilter(filter);
  };

  return (
    <li
      key={filter}
      onClick={handlerSetActiveFilter}
      className={isActive ? `movie-nav__item movie-nav__item--active` : `movie-nav__item`}
    >
      <a href="#" className="movie-nav__link">{filter}</a>
    </li>
  );
};

MovieCardNavigationItem.propTypes = {
  filter: PropTypes.string.isRequired,
  onSetActiveFilter: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
};

export default MovieCardNavigationItem;
