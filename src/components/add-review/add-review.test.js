import rerender from "react-test-renderer";
import React from "react";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import NameSpace from "./../../reducer/name-space.js";
import {MemoryRouter} from 'react-router';

import AddReview from "./add-review.jsx";

const mockStore = configureStore([]);

const mockMovie = {
  id: 2,
  title: `Avatar`,
  isFavorite: true,
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
};

describe(`AddReview snapshot test`, () => {
  it(``, () => {
    const store = mockStore({
      [NameSpace.USER]: {
        authorizationStatus: ``,
        avatar: `defaultAvatar`,
        authorizationError: ``,
      }
    });
    const tree = rerender.create(
        <Provider
          store={store}
        >
          <MemoryRouter>
            <AddReview
              movie={mockMovie}
              onInputComment={() => {}}
              onChangeRating={() => {}}
              onSendComment={() => {}}
              rating={3}
              comment={`Hello world`}
              errorText={`Error`}
              isLoading={true}
            />
          </MemoryRouter>
        </Provider>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
