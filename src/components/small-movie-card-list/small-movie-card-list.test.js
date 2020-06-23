import React from "react";
import rerender from "react-test-renderer";

import SmallMovieCardList from "./small-movie-card-list.jsx";

const movies = [
  {
    id: 0,
    title: `Pulp Fuction`,
    img: `img/pulp-fiction.jpg`
  },
  {
    id: 1,
    title: `Orlando`,
    img: `img/orlando.jpg`
  },
  {
    id: 2,
    title: `Avatar`,
    img: `img/avatar.jpg`
  },
  {
    id: 3,
    title: `No country for old men`,
    img: `img/no-country-for-old-men.jpg`
  },
  {
    id: 4,
    title: `Aviator`,
    img: `img/aviator.jpg`
  },
  {
    id: 5,
    title: `Macbeth`,
    img: `img/macbeth.jpg`,
  }
];

const onMovieTitleClickHandler = () => {};

describe(`Render SMCL`, () => {
  it(`SMCL should render SMC correctly`, () => {
    const tree = rerender
      .create(<SmallMovieCardList
        movies={movies}
        onMovieClick={onMovieTitleClickHandler}
      />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
