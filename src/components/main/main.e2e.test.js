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

const MOVIES = [`Aviator`, `Avatar`, `Kill Bill`];

describe(`Click button`, () => {
  it(`Should title link be pressed`, () => {
    const onTitleMovieLinkClick = jest.fn();

    const main = shallow(
        <Main
          headerMovieTitle={HeaderMovieData.title}
          headerMovieGenre={HeaderMovieData.genre}
          headerMovieYear={HeaderMovieData.year}
          movies={MOVIES}
          onTitleMovieLinkClick={onTitleMovieLinkClick}
        />
    );

    const movieTitleLinks = main.find(`a.small-movie-card__link`);

    movieTitleLinks.forEach((titleLink) => {
      titleLink.props().onClick();
    });

    expect(onTitleMovieLinkClick.mock.calls.length).toBe(movieTitleLinks.length);
  });
});
