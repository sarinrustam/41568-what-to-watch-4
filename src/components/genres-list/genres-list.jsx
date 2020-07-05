import React from "react";
import PropTypes from "prop-types";

const GenreList = (props) => {
  const {genresList, currentGenre, setCurrentGenre} = props;

  return (
    <ul className="catalog__genres-list">
      {genresList.map((genre) => (
        <li
          key={genre}
          className={currentGenre === genre ? `catalog__genres-item catalog__genres-item--active` : `catalog__genres-item`}
          onClick={(event) => {
            event.preventDefault();
            setCurrentGenre(genre);
          }}
        >
          <a href="#" className="catalog__genres-link">{genre}</a>
        </li>
      ))}
    </ul>
  );
};

GenreList.propTypes = {
  genresList: PropTypes.array.isRequired,
  currentGenre: PropTypes.string.isRequired,
  setCurrentGenre: PropTypes.func.isRequired,
};
