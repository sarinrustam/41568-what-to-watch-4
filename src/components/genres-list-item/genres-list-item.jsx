import React from "react";
import PropTypes from "prop-types";

const GenresListItem = (props) => {
  const {genre, isActive, onSetCurrentGenre} = props;

  const handleClick = (event) => {
    event.preventDefault();
    onSetCurrentGenre(genre);
  };

  return (
    <li
      key={genre}
      className={isActive ? `catalog__genres-item catalog__genres-item--active` : `catalog__genres-item`}
    >
      <a
        href="#"
        className="catalog__genres-link"
        onClick={handleClick}
      >
        {genre}
      </a>
    </li>
  );
};

GenresListItem.propTypes = {
  genre: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  onSetCurrentGenre: PropTypes.func.isRequired,
};

export default GenresListItem;
