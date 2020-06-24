import React from "react";
import rerender from "react-test-renderer";

import SmallMovieCard from "./small-movie-card.jsx";

const movie = {
  id: 3,
  title: `No country for old men`,
  img: `img/no-country-for-old-men.jpg`
};

const onMouseOverHandler = () => {};
const onMovieTitleClickHandler = () => {};

describe(`Render SMC`, () => {
  it(`SMC should render movie`, () => {
    const tree = rerender
    .create(<SmallMovieCard
      movie={movie}
      onMouseOver={onMouseOverHandler}
      onMovieClick={onMovieTitleClickHandler}
    />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
