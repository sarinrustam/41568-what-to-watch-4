import * as React from "react";
import GenresListItem from "../genres-list-item/genres-list-item";

interface Props {
  genresList: [string];
  currentGenre: string;
  onSetCurrentGenre: (genre: string) => void;
}

const GenresList = (props: Props): React.ReactElement => {
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

export default GenresList;
