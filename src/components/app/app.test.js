import React from "react";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";

import rerender from "react-test-renderer";
import App from "./app.jsx";
import {FILTER_ALL_GENRES, COUNT_LIMIT_MOVIES} from '../../utils/utils.js';

const mockStore = configureStore([]);

const HeaderMovieData = {
  title: `TENET`,
  genre: `Drama`,
  year: 2020,
  id: 1,
};

const movies = [
  {
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
  },
  {
    id: 1,
    title: `Orlando`,
    img: `img/orlando.jpg`,
    release: 1992,
    genre: `Drama`,
    poster: `https://m.media-amazon.com/images/M/MV5BYmY1OTA3MjAtYjQxOC00OTlkLWExZWQtMjc3ZjExOWFhM2UwXkEyXkFqcGdeQXVyMTA0MjU0Ng@@._V1_.jpg`,
    coverBackground: `https://m.media-amazon.com/images/M/MV5BOTNlZDExZDgtZjMzMS00NDZkLWFlNTItNDM1YTAxODQyMzM4XkEyXkFqcGdeQXVyOTc5MDI5NjE@._V1_.jpg`,
    rating: {
      score: 7.1,
      scoreDesc: `Very awesome`,
      amount: 4333
    },
    description: `After Queen Elizabeth I commands him not to grow old, a young nobleman struggles with love and his place in the world.`,
    crew: {
      director: `Sally Potter`,
      actors: `Tilda Swinton, Quentin Crisps, John Bott`
    },
    preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
  },
  {
    id: 2,
    title: `Avatar`,
    img: `img/avatar.jpg`,
    release: 2009,
    genre: `SCI-FI`,
    poster: `https://m.media-amazon.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_.jpg`,
    coverBackground: `https://m.media-amazon.com/images/M/MV5BMTUxMDI1MDI5MV5BMl5BanBnXkFtZTcwOTY3MTUzNA@@._V1_SX1777_CR0,0,1777,999_AL_.jpg`,
    rating: {
      score: 7.8,
      scoreDesc: `Not Bad`,
      amount: 43332
    },
    description: `A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.`,
    crew: {
      director: `James Cameron`,
      actors: `Sam Worthington, Zoe Saldana, Sigourney Weaver`
    },
    preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
  },
];

describe(`Render component`, () => {
  it(`Should App render correctly`, () => {
    const store = mockStore({
      currentGenre: FILTER_ALL_GENRES,
      movies,
      countMoviesRender: COUNT_LIMIT_MOVIES
    });

    const tree = rerender
      .create(
          <Provider store={store}>
            <App
              title={HeaderMovieData.title}
              genre={HeaderMovieData.genre}
              year={HeaderMovieData.year}
              movies={movies}
              id={HeaderMovieData.id}
            />
          </Provider>, {
            createNodeMock: () => {
              return {};
            }}
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
