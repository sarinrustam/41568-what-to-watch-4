import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../api/api";
import {reducer, ActionCreator, ActionType, Operation} from "./data";
import {moviesAdapter, movieAdapter} from "../../adapters/movies";
import NameSpace from "../name-space";

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

const initialState = {
  movies: [],
  favoriteMovies: [],
  promoMovie: {},
  isFavoriteMoviesLoaded: false,
  isMoviesLoaded: false,
  isPromoMovieLoaded: false
};

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual(initialState);
});

describe(`Operation work correctly`, () => {
  it(`Should make a correct API call to /films`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const getState = () => {};
    const operation = Operation.loadMovies();

    apiMock
      .onGet(`/films`)
      .reply(200, movies);

    return operation(dispatch, getState, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_MOVIES,
          payload: moviesAdapter(movies),
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.SET_IS_MOVIES_LOADED,
          payload: true,
        });
      });
  });

  it(`Should make a correct API call to /films/promo`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const getState = () => {};
    const operation = Operation.loadPromo();

    apiMock
      .onGet(`/films/promo`)
      .reply(200, movies[0]);

    return operation(dispatch, getState, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_PROMO,
          payload: movieAdapter(movies[0]),
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.SET_IS_PROMO_MOVIE_LOADED,
          payload: true,
        });
      });
  });

  it(`Should make a correct API call to /favorite`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const getState = () => {};
    const operation = Operation.loadFavoriteMovies();

    apiMock
      .onGet(`/favorite`)
      .reply(200, movies);

    return operation(dispatch, getState, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_FAVORITE_MOVIES,
          payload: moviesAdapter(movies),
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.SET_IS_FAVORITE_MOVIES_LOADED,
          payload: true,
        });
      });
  });

  it(`Should make a correct API call to /favorite/1/1`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const getState = () => ({
      [NameSpace.DATA]: {
        promoMovie: {
          id: 1
        }
      }
    });
    const operation = Operation.setFavoriteStatus(movies[0].id, true);

    apiMock
      .onPost(`favorite/${movies[0].id}/${1}`)
      .reply(200, movies[0]);

    return operation(dispatch, getState, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_FAVORITE_STATUS,
          payload: {
            movieId: movieAdapter(movies[0]).id,
            isFavorite: movieAdapter(movies[0]).isFavorite
          },
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.LOAD_PROMO,
          payload: movieAdapter(movies[0]),
        });
      });
  });
});

describe(`Actions work correctly`, () => {
  it(`Action loadMovies working correctly`, () => {
    const newInitialState = {
      movies: moviesAdapter(movies),
      favoriteMovies: [],
      promoMovie: {},
      isFavoriteMoviesLoaded: false,
      isMoviesLoaded: false,
      isPromoMovieLoaded: false
    };

    expect(reducer(initialState, ActionCreator.loadMovies(moviesAdapter(movies)))).toEqual(newInitialState);
  });

  it(`Action loadFavoriteMovies working correctly`, () => {
    const newInitialState = {
      movies: [],
      favoriteMovies: moviesAdapter(movies),
      promoMovie: {},
      isFavoriteMoviesLoaded: false,
      isMoviesLoaded: false,
      isPromoMovieLoaded: false
    };

    expect(reducer(initialState, ActionCreator.loadFavoriteMovies(moviesAdapter(movies)))).toEqual(newInitialState);
  });

  it(`Action loadPromo working correctly`, () => {
    const newInitialState = {
      movies: [],
      favoriteMovies: [],
      promoMovie: movieAdapter(movies[0]),
      isFavoriteMoviesLoaded: false,
      isMoviesLoaded: false,
      isPromoMovieLoaded: false
    };

    expect(reducer(initialState, ActionCreator.loadPromo(movieAdapter(movies[0])))).toEqual(newInitialState);
  });

  it(`Action setFavoriteStatus working correctly`, () => {
    const initialStateForFavorite = {
      movies: moviesAdapter(movies),
      favoriteMovies: [],
      promoMovie: {},
      isFavoriteMoviesLoaded: true,
      isMoviesLoaded: false,
      isPromoMovieLoaded: false
    };

    const changedMovies = [
      {
        [`background_color`]: `#A6B7AC`,
        [`background_image`]: `https://htmlacademy-react-3.appspot.com/wtw/static/film/background/gangs_of_new_york.jpg`,
        description: `In 1862, Amsterdam Vallon returns to the Five Points area of New York City seeking revenge against Bill the Butcher, his father's killer.`,
        director: `Martin Scorsese`,
        genre: `Crime`,
        id: 1,
        [`is_favorite`]: true,
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

    const newInitialState = {
      movies: moviesAdapter(changedMovies),
      favoriteMovies: [],
      promoMovie: {},
      isFavoriteMoviesLoaded: true,
      isMoviesLoaded: false,
      isPromoMovieLoaded: false
    };

    expect(reducer(initialStateForFavorite, ActionCreator.setFavoriteStatus(1, true))).toEqual(newInitialState);
  });

  it(`Action setIsMoviesLoaded working correctly`, () => {
    const newInitialState = {
      movies: [],
      favoriteMovies: [],
      promoMovie: {},
      isFavoriteMoviesLoaded: false,
      isMoviesLoaded: true,
      isPromoMovieLoaded: false
    };

    expect(reducer(initialState, ActionCreator.setIsMoviesLoaded(true))).toEqual(newInitialState);
  });

  it(`Action setIsFavoriteMoviesLoaded working correctly`, () => {
    const newInitialState = {
      movies: [],
      favoriteMovies: [],
      promoMovie: {},
      isFavoriteMoviesLoaded: true,
      isMoviesLoaded: false,
      isPromoMovieLoaded: false
    };

    expect(reducer(initialState, ActionCreator.setIsFavoriteMoviesLoaded(true))).toEqual(newInitialState);
  });

  it(`Action setIsPromoMovieLoaded working correctly`, () => {
    const newInitialState = {
      movies: [],
      favoriteMovies: [],
      promoMovie: {},
      isFavoriteMoviesLoaded: false,
      isMoviesLoaded: false,
      isPromoMovieLoaded: true
    };

    expect(reducer(initialState, ActionCreator.setIsPromoMovieLoaded(true))).toEqual(newInitialState);
  });
});
