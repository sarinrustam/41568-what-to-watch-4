import * as React from "react";
import {configure, mount} from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import {Movie as MovieType} from "../../types/types";
import {noop} from "../../utils/utils";
import {Main} from "./main";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import NameSpace from "./../../reducer/name-space";
import {AuthorizationStatus} from "../../reducer/user/user";
import {MemoryRouter} from 'react-router';

configure({
  adapter: new Adapter()
});

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
const mockStore = configureStore([]);

describe(`Click button`, () => {
  it(`Should button Play will be press correctly`, () => {
    const store = mockStore({
      [NameSpace.USER]: {
        authorizationStatus: AuthorizationStatus.NO_AUTH,
        avatar: `s`,
        authorizationError: ``,
      }
    });

    jest.spyOn(Main.prototype, `handlePlay`);

    const wrapper = mount(
        <Provider store={store}>
          <MemoryRouter>
            <Main
              promoMovie={movies[0]}
              currentGenre={``}
              onSetCurrentGenre={noop}
              genres={[``]}
              onIncrementCountMoviesShow={noop}
              onResetCountMoviesShow={noop}
              slicedMoviesByGenre={movies}
              showMoreButton={false}
              onSetFavoriteStatus={noop}
            />
          </MemoryRouter>
        </Provider>
    );

    const button = wrapper.find(`.btn--play`);
    button.props().onClick();

    expect(Main.prototype.handlePlay).toHaveBeenCalledTimes(1);

  });
});
