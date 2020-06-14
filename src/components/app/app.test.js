import React from "react";

import rerender from "react-test-renderer";
import App from "./app.jsx";

const HeaderMovieData = {
  title: `TENET`,
  genre: `Drama`,
  year: 2020
};

const MOVIES = [`Aviator`, `Avatar`, `Kill Bill`];

describe(`Render component`, () => {
  it(`Should App render correctly`, () => {
    const tree = rerender
      .create(<App
        title={HeaderMovieData.title}
        genre={HeaderMovieData.genre}
        year={HeaderMovieData.year}
        movies={MOVIES}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
