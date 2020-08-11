import * as React from "react";
import * as renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import NameSpace from "./../../reducer/name-space";
import {MemoryRouter} from 'react-router';
import {Movie as MovieType} from "../../types/types";
import {noop} from '../../utils/utils';

import AddReview from "./add-review";

const mockStore = configureStore([]);

const mockMovie: MovieType = {
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
    const tree = renderer.create(
        <Provider
          store={store}
        >
          <MemoryRouter>
            <AddReview
              movie={mockMovie}
              onInputComment={noop}
              onChangeRating={noop}
              onSendComment={noop}
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
