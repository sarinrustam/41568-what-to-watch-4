import React from "react";

import Adapter from "enzyme-adapter-react-16";
import Enzyme, {mount} from "enzyme";

import SmallMovieCard from "./small-movie-card.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

const movie = {
  id: 3,
  title: `No country for old men`,
  img: `img/no-country-for-old-men.jpg`
};

describe(`SMC hover and click`, () => {
  it(`Should SMC be hovered`, () => {
    const hoverHandler = jest.fn();
    const clickHandler = jest.fn();

    const smallMovieCard = mount(
        <SmallMovieCard
          movie={movie}
          onMouseOver={hoverHandler}
          onMovieClick={clickHandler}
        />
    );

    smallMovieCard.find(`article.small-movie-card`).simulate(`mouseover`);

    expect(hoverHandler).toHaveBeenCalledTimes(1);

    expect(hoverHandler.mock.calls[0][0]).toBe(movie.id);
  });

  it(`Should SMC title be clicked`, () => {
    const hoverHandler = jest.fn();
    const clickHandler = jest.fn();

    const smallMovieCard = mount(
        <SmallMovieCard
          movie={movie}
          onMouseOver={hoverHandler}
          onMovieClick={clickHandler}
        />
    );

    smallMovieCard.find(`a.small-movie-card__link`).simulate(`click`);

    expect(clickHandler).toHaveBeenCalledTimes(1);
  });
});
