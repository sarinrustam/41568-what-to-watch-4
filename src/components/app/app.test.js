import * as React from "react";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import NameSpace from "./../../reducer/name-space.js";

import rerender from "react-test-renderer";
import {App} from "./app";

const mockStore = configureStore([]);

describe(`Render component`, () => {
  it(`Should App render correctly`, () => {
    const store = mockStore({
      [NameSpace.DATA]: {
        movies: [],
        promoMovie: {
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
            actors: [`Tim Roth, Amanda Plummer, Laura Lovelace, John Travolta, Samuel L. Jackson`]
          },
          isFavorite: false,
          preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
        }
      },
      [NameSpace.APP]: {
        currentGenre: ``,
        countMoviesShow: ``,
      },
      [NameSpace.USER]: {
        authorizationStatus: ``,
        avatar: `defaultAvatar`,
        authorizationError: ``,
      }
    });

    const tree = rerender
      .create(
          <Provider store={store}>
            <App
              init={() => {}}
              isLoaded={true}
            />
          </Provider>, {
            createNodeMock: () => {
              return {};
            }}
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
