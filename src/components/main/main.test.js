import React from "react";

import rerender from "react-test-renderer";
import Main from "./main.jsx";

const HeaderMovieData = {
  title: `TENET`,
  genre: `Drama`,
  year: 2020
};

const MOVIES = [`Aviator`, `Avatar`, `Kill Bill`];

describe(`Render component`, () => {
  it(`Should Main component render correctly`, () => {
    const tree = rerender
      .create(<Main
        headerMovieTitle={HeaderMovieData.title}
        headerMovieGenre={HeaderMovieData.genre}
        headerMovieYear={HeaderMovieData.year}
        movies={MOVIES}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
