import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../api/api.js";
import {ActionType, Operation} from "./data.js";
import {arrayAdapter, adapter} from "../../adapters/movies.js";

const api = createAPI(() => {});

const movies = [
  {
    [`background_color`]: `#A6B7AC`,
    [`background_image`]: `https://htmlacademy-react-3.appspot.com/wtw/static/film/background/gangs_of_new_york.jpg`,
    description: `In 1862, Amsterdam Vallon returns to the Five Points area of New York City seeking revenge against Bill the Butcher, his father's killer.`,
    director: `Martin Scorsese`,
    genre: `Crime`,
    id: 1,
    [`is_favorite`]: false,
    name: `Gangs of new york`,
    [`poster_image`]: `https://htmlacademy-react-3.appspot.com/wtw/static/film/poster/Gangs_of_New_York_Poster.jpg`,
    [`preview_image`]: `https://htmlacademy-react-3.appspot.com/wtw/static/film/preview/gangs_of_new_york.jpg`,
    [`preview_video_link`]: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    rating: 8.8,
    released: 2002,
    [`run_time`]: 167,
    [`scores_count`]: 370881,
    starring: [`Leonardo DiCaprio`, `Cameron Diaz`, `Daniel Day-Lewis`],
    [`video_link`]: `http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`,
  }
];

describe(`Operation of data loading work correctly`, () => {
  it(`Should make a correct API call to /films`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const getState = () => {};
    const moviesLoader = Operation.loadMovies();

    apiMock
      .onGet(`/films`)
      .reply(200, movies);

    return moviesLoader(dispatch, getState, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_MOVIES,
          payload: arrayAdapter(movies),
        });
      });
  });

  it(`Should make a correct API call to /films/promo`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const getState = () => {};
    const moviesLoader = Operation.loadPromo();

    apiMock
      .onGet(`/films/promo`)
      .reply(200, movies[0]);

    return moviesLoader(dispatch, getState, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_PROMO,
          payload: adapter(movies[0]),
        });
      });
  });
});
