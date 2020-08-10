import * as React from "react";

interface Props {
  isFavorite: boolean;
  onToggleButton: (isFavorite: boolean) => void;
}

const MyListButton = (props: Props): React.ReactElement => {
  const {isFavorite, onToggleButton} = props;

  const renderButtonIconAdd = () => {
    return (
      <svg viewBox="0 0 19 20" width="19" height="20">
        <use xlinkHref="#add"></use>
      </svg>
    );
  };

  const renderButtonIconInList = () => {
    return (
      <svg viewBox="0 0 18 14" width="18" height="14">
        <use xlinkHref="#in-list"></use>
      </svg>
    );
  };

  const handleToggleButton = () => {
    onToggleButton(!isFavorite);
  };

  return (
    <button
      onClick={handleToggleButton}
      className="btn btn--list movie-card__button"
      type="button"
    >
      {isFavorite ? renderButtonIconInList() : renderButtonIconAdd()}
      <span>My list</span>
    </button>
  );
};

export default MyListButton;
