import * as React from "react";

interface Props {
  onButtonClick: () => void;
}

const ShowMoreButton = (props: Props): React.ReactElement => {
  const {onButtonClick} = props;
  return (
    <div className="catalog__more">
      <button
        className="catalog__button"
        type="button"
        onClick={onButtonClick}
      >
          Show more
      </button>
    </div>
  );
};

export default ShowMoreButton;
