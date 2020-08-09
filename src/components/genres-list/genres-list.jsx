import React from "react";
import PropTypes from "prop-types";
import GenresListItem from "../genres-list-item/genres-list-item.jsx";

const GenresList = (props) => {
  const {genresList, currentGenre, onSetCurrentGenre} = props;

  return (
    <ul className="catalog__genres-list">
      {genresList.map((genre) => (
        <GenresListItem
          key={genre}
          genre={genre}
          isActive={genre === currentGenre}
          onSetCurrentGenre={onSetCurrentGenre}
        />
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
