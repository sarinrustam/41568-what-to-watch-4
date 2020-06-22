import React from "react";

import rerender from "react-test-renderer";
import App from "./app.jsx";

const HeaderMovieData = {
  title: `TENET`,
  genre: `Drama`,
  year: 2020
};

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
  }
];

describe(`Render component`, () => {
  it(`Should App render correctly`, () => {
    const tree = rerender
      .create(<App
        title={HeaderMovieData.title}
        genre={HeaderMovieData.genre}
        year={HeaderMovieData.year}
        movies={movies}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
