import * as React from "react";

import Adapter from "enzyme-adapter-react-16";
import Enzyme, {shallow} from "enzyme";

import {Main} from "./main";

Enzyme.configure({
  adapter: new Adapter()
});


const movies = [
  {
    id: 0,
    title: `Pulp Fuction`,
    img: `img/pulp-fiction.jpg`,
    release: 1994,
    genre: `Action`,
    isFavorite: false,
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
  },
  {
    id: 1,
    title: `Pulp Fuction`,
    img: `img/pulp-fiction.jpg`,
    release: 1994,
    genre: `Action`,
    isFavorite: false,
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
  }
];


describe(`Click button`, () => {
  it(`Should button Play will be press correctly`, () => {
    const handle = jest.fn();

    const wrapper = shallow(
        <Main
          onMovieClick={() => {}}
          promoMovie={movies[0]}
          currentGenre={``}
          onSetCurrentGenre={() => {}}
          genres={[]}
          onIncrementCountMoviesShow={() => {}}
          onResetCountMoviesShow={() => {}}
          slicedMoviesByGenre={movies}
          showMoreButton={false}
          onSetFavoriteStatus={() => {}}
          history={{push: handle}}
        />
    );

    const button = wrapper.find(`.btn--play`);
    button.simulate(`click`);

    expect(handle).toHaveBeenCalledTimes(1);
  });
});
