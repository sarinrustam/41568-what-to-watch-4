import React from "react";
import PropTypes from "prop-types";

const GenresList = (props) => {
  const {genresList, currentGenre, onSetCurrentGenre} = props;

  return (
    <ul className="catalog__genres-list">
      {genresList.map((genre) => (
        <li
          key={genre}
          className={currentGenre === genre ? `catalog__genres-item catalog__genres-item--active` : `catalog__genres-item`}
        >
          <a
            href="#"
            className="catalog__genres-link"
            onClick={(event) => {
              event.preventDefault();
              onSetCurrentGenre(genre);
            }}
          >
            {genre}
          </a>
        </li>
      ))}
    </ul>
  );
};

GenresList.propTypes = {
  genresList: PropTypes.array.isRequired,
  currentGenre: PropTypes.string.isRequired,
  onSetCurrentGenre: PropTypes.func.isRequired,
};

export default GenresList;
