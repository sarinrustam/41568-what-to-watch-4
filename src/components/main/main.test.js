import React from "react";

import rerender from "react-test-renderer";
import Main from "./main.jsx";

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
  it(`Should Main component render correctly`, () => {
    const tree = rerender
      .create(<Main
        headerMovieTitle={HeaderMovieData.title}
        headerMovieGenre={HeaderMovieData.genre}
        headerMovieYear={HeaderMovieData.year}
        movies={movies}
        onMovieClick={() => {}}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
