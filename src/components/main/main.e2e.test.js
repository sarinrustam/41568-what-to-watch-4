import React from "react";

import Adapter from "enzyme-adapter-react-16";
import Enzyme, {shallow} from "enzyme";

import Main from "./main.jsx";

Enzyme.configure({
  adapter: new Adapter()
});

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


describe(`Click button`, () => {
  it(`Should title link be pressed`, () => {
    const onMovieClick = jest.fn();

    const main = shallow(
        <Main
          headerMovieTitle={HeaderMovieData.title}
          headerMovieGenre={HeaderMovieData.genre}
          headerMovieYear={HeaderMovieData.year}
          movies={movies}
          onMovieClick={onMovieClick}
        />
    );

    const movieTitleLinks = main.find(`a.small-movie-card__link`);

    movieTitleLinks.forEach((titleLink) => {
      titleLink.props().onClick();
    });

    expect(onMovieClick.mock.calls.length).toBe(movieTitleLinks.length);
  });
});
