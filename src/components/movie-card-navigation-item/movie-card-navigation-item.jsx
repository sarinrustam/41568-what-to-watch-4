import React from "react";
import PropTypes from "prop-types";

const MovieCardNavigationItem = (props) => {
  const {activeFilter, setActiveFilter, filter} = props;

  const handlerSetActiveFilter = (event) => {
    event.preventDefault();
    setActiveFilter(filter);
  };

  return (
    <li
      key={filter}
      onClick={handlerSetActiveFilter}
      className={activeFilter === filter ? `movie-nav__item movie-nav__item--active` : `movie-nav__item`}
    >
      <a href="#" className="movie-nav__link">{filter}</a>
    </li>
  );
};

MovieCardNavigationItem.propTypes = {
  filter: PropTypes.string.isRequired,
  activeFilter: PropTypes.string.isRequired,
  setActiveFilter: PropTypes.func.isRequired,
};

export default MovieCardNavigationItem;
