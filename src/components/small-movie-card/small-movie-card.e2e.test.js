import React from "react";

import Adapter from "enzyme-adapter-react-16";
import Enzyme, {mount} from "enzyme";

import SmallMovieCard from "./small-movie-card.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

const movie = {
  id: 0,
  title: `Pulp Fuction`,
  img: `img/pulp-fiction.jpg`,
  release: 1994,
  genre: `Action`,
  poster: `https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,686,1000_AL_.jpg`,
  coverBackground: `https://m.media-amazon.com/images/M/MV5BNTY1MzgzOTYxNV5BMl5BanBnXkFtZTgwMDI4OTEwMjE@._V1_SY1000_CR0,0,1463,1000_AL_.jpg`,
  rating: {
    score: 8.9,
    scoreDesc: `Very good`,
    amount: 2323
  },
  description: `The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.`,
  crew: {
    director: `Quentin Tarantino`,
    actors: `Tim Roth, Amanda Plummer, Laura Lovelace, John Travolta, Samuel L. Jackson`
  },
  preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
};

describe(`SMC hover and click`, () => {
  it(`Should SMC be hovered`, () => {
    const hoverHandler = jest.fn();

    const smallMovieCard = mount(
        <SmallMovieCard
          movie={movie}
          onMovieClick={() => {}}
          handlerMouseEnter={hoverHandler}
          handlerMouseLeave={() => {}}
          isPlaying={true}
        />
    );

    smallMovieCard.find(`article.small-movie-card`).simulate(`mouseenter`);

    expect(hoverHandler).toHaveBeenCalledTimes(1);
  });

  it(`Should SMC title be clicked`, () => {
    const clickHandler = jest.fn();

    const smallMovieCard = mount(
        <SmallMovieCard
          movie={movie}
          onMovieClick={clickHandler}
          handlerMouseEnter={() => {}}
          handlerMouseLeave={() => {}}
          isPlaying={true}
        />
    );

    smallMovieCard.find(`a.small-movie-card__link`).simulate(`click`);

    expect(clickHandler).toHaveBeenCalledTimes(1);
  });
});
