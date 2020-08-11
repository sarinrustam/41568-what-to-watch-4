import * as React from "react";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import NameSpace from "./../../reducer/name-space";

import * as renderer from "react-test-renderer";
import {MemoryRouter} from 'react-router';
import {Main} from "./main";
import {Movie as MovieType} from "../../types/types";
import {noop} from "../../utils/utils";

const mockStore = configureStore([]);

const movies: [MovieType] = [
  {
    id: 2,
    title: `Avatar`,
    isFavorite: true,
    release: 2009,
    genre: `SCI-FI`,
    poster: `https://m.media-amazon.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_.jpg`,
    coverBackground: `https://m.media-amazon.com/images/M/MV5BMTUxMDI1MDI5MV5BMl5BanBnXkFtZTcwOTY3MTUzNA@@._V1_SX1777_CR0,0,1777,999_AL_.jpg`,
    rating: {
      score: 7.8,
      amount: 43332
    },
    description: `A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.`,
    crew: {
      director: `James Cameron`,
      actors: [`Sam Worthington, Zoe Saldana, Sigourney Weaver`]
    },
    preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    videoLink: ``,
    duration: 2
  }
];

describe(`Render component`, () => {
  it(`Should Main component render correctly`, () => {
    const store = mockStore({
      [NameSpace.DATA]: {
        movies: [{
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
          isFavorite: false,
          preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
        },
        {
          id: 1,
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
          isFavorite: false,
          preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
        }],
        promoMovie: {}
      },
      [NameSpace.APP]: {
        currentGenre: ``,
        countMoviesShow: ``,
      },
      [NameSpace.USER]: {
        authorizationStatus: `s`,
        avatar: `defaultAvatar`,
        authorizationError: ``,
      }
    });

    const tree = renderer
      .create(
          <Provider store={store}>
            <MemoryRouter>
              <Main
                slicedMoviesByGenre={movies}
                promoMovie={movies[0]}
                currentGenre={``}
                genres={[``]}
                onSetFavoriteStatus={noop}
                showMoreButton={false}
                onResetCountMoviesShow={noop}
                onIncrementCountMoviesShow={noop}
                onSetCurrentGenre={noop}
              />
            </MemoryRouter>
          </Provider>, {
            createNodeMock: () => {
              return {};
            }
          }
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
