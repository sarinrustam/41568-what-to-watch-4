import * as React from "react";

interface Props {
  genre: string,
  isActive: boolean,
  onSetCurrentGenre: (genre: string) => void,
};

const GenresListItem = (props: Props): React.ReactElement => {
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

export default GenresListItem;
