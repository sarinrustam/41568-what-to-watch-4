import * as React from "react";

interface Props {
  filter: string,
  onSetActiveFilter: (filter: string) => void,
  isActive: boolean,
};

const MovieCardNavigationItem = (props: Props): React.ReactElement => {
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

export default MovieCardNavigationItem;
