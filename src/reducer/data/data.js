import {extend} from "../../utils/utils.js";
import {moviesAdapter, movieAdapter} from "../../adapters/movies.js";
import NameSpace from "../name-space.js";

const initialState = {
  movies: [],
  favoriteMovies: [],
  promoMovie: {},
  isFavoriteMoviesLoaded: false,
  isMoviesLoaded: false,
  isPromoMovieLoaded: false
};

const ActionType = {
  LOAD_MOVIES: `LOAD_MOVIES`,
  LOAD_FAVORITE_MOVIES: `LOAD_FAVORITE_MOVIES`,
  LOAD_PROMO: `LOAD_PROMO`,
  SET_FAVORITE_STATUS: `SET_FAVORITE_STATUS`,
  SET_IS_MOVIES_LOADED: `SET_IS_MOVIES_LOADED`,
  SET_IS_FAVORITE_MOVIES_LOADED: `SET_IS_FAVORITE_MOVIES_LOADED`,
  SET_IS_PROMO_MOVIE_LOADED: `SET_IS_PROMO_MOVIE_LOADED`
};

const ActionCreator = {
  loadMovies: (movies) => {
    return {
      type: ActionType.LOAD_MOVIES,
      payload: movies,
    };
  },
  loadFavoriteMovies: (movies) => {
    return {
      type: ActionType.LOAD_FAVORITE_MOVIES,
      payload: movies,
    };
  },
  loadPromo: (promoMovie) => {
    return {
      type: ActionType.LOAD_PROMO,
      payload: promoMovie,
    };
  },
  setFavoriteStatus: (movieId, isFavorite) => {
    return {
      type: ActionType.SET_FAVORITE_STATUS,
      payload: {
        movieId,
        isFavorite,
      }
    };
  },
  setIsMoviesLoaded: (value) => {
    return {
      type: ActionType.SET_IS_MOVIES_LOADED,
      payload: value,
    };
  },
  setIsFavoriteMoviesLoaded: (value) => {
    return {
      type: ActionType.SET_IS_FAVORITE_MOVIES_LOADED,
      payload: value,
    };
  },
  setIsPromoMovieLoaded: (value) => {
    return {
      type: ActionType.SET_IS_PROMO_MOVIE_LOADED,
      payload: value,
    };
  },
};

const Operation = {
  loadMovies: () => (dispatch, getState, api) => {
    return api.get(`/films`)
      .then((response) => {
        const movies = moviesAdapter(response.data);
        dispatch(ActionCreator.loadMovies(movies));
        dispatch(ActionCreator.setIsMoviesLoaded(true));
      })
      .catch(() => {});
  },
  loadFavoriteMovies: () => (dispatch, getState, api) => {
    return api.get(`/favorite`)
      .then((response) => {
        const movies = moviesAdapter(response.data);
        dispatch(ActionCreator.loadFavoriteMovies(movies));
        dispatch(ActionCreator.setIsFavoriteMoviesLoaded(true));
      })
      .catch(() => {});
  },
  loadPromo: () => (dispatch, getState, api) => {
    return api.get(`/films/promo`)
      .then((response) => {
        const promoMovie = movieAdapter(response.data);
        dispatch(ActionCreator.loadPromo(promoMovie));
        dispatch(ActionCreator.setIsPromoMovieLoaded(true));
      })
      .catch(() => {});
  },
  setFavoriteStatus: (movieId, status) => (dispatch, getState, api) => {
    return api.post(`favorite/${movieId}/${status ? 1 : 0}`)
      .then(({data}) => {
        const movie = movieAdapter(data);
        const promoMovieId = getState()[NameSpace.DATA].promoMovie.id;

        dispatch(ActionCreator.setFavoriteStatus(movieId, movie.isFavorite));

        if (movie.id === promoMovieId) {
          dispatch(ActionCreator.loadPromo(movie));
        }
      })
      .catch(() => {});
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_MOVIES:
      return extend(state, {
        movies: action.payload,
      });
    case ActionType.LOAD_PROMO:
      return extend(state, {
        promoMovie: action.payload
      });
    case ActionType.LOAD_FAVORITE_MOVIES:
      return extend(state, {
        favoriteMovies: action.payload
      });
    case ActionType.SET_FAVORITE_STATUS:
      const movies = state.movies.map((movieItem) => {
        if (movieItem.id === action.payload.movieId) {
          movieItem.isFavorite = action.payload.isFavorite;
        }
        return movieItem;
      });

      return extend(state, {
        movies,
      });
    case ActionType.SET_IS_MOVIES_LOADED:
      return extend(state, {
        isMoviesLoaded: action.payload
      });
    case ActionType.SET_IS_FAVORITE_MOVIES_LOADED:
      return extend(state, {
        isFavoriteMoviesLoaded: action.payload
      });
    case ActionType.SET_IS_PROMO_MOVIE_LOADED:
      return extend(state, {
        isPromoMovieLoaded: action.payload
      });
    default:
      return state;
  }
};

export {reducer, ActionType, ActionCreator, Operation};
