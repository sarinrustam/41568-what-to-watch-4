import {extend} from "../../utils/utils.js";
import {moviesAdapter, movieAdapter} from "../../adapters/movies.js";

const initialState = {
  movies: [],
  promoMovie: {}
};

const ActionType = {
  LOAD_MOVIES: `LOAD_MOVIES`,
  LOAD_PROMO: `LOAD_PROMO`,
  SET_FAVORITE_STATUS: `SET_FAVORITE_STATUS`
};

const ActionCreator = {
  loadMovies: (movies) => {
    return {
      type: ActionType.LOAD_MOVIES,
      payload: movies,
    };
  },
  loadPromo: (promoMovie) => {
    return {
      type: ActionType.LOAD_PROMO,
      payload: promoMovie,
    };
  },
  setFavoriteStatus: (movie) => {
    return {
      type: ActionType.SET_FAVORITE_STATUS,
      payload: movie,
    };
  },
};

const Operation = {
  loadMovies: () => (dispatch, getState, api) => {
    return api.get(`/films`)
      .then((response) => {
        const movies = moviesAdapter(response.data);
        dispatch(ActionCreator.loadMovies(movies));
      })
      .catch((error) => {
        throw error;
      });
  },
  loadPromo: () => (dispatch, getState, api) => {
    return api.get(`/films/promo`)
      .then((response) => {
        const promoMovie = movieAdapter(response.data);
        dispatch(ActionCreator.loadPromo(promoMovie));
      });
  },
  setFavoriteStatus: (movieId, status) => (dispatch, getState, api) => {
    return api.post(`favorite/${movieId}/${status}`)
      .then(({data}) => {
        const movie = movieAdapter(data);
        dispatch(ActionCreator.setFavoriteStatus(movie));
      });
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
    case ActionType.SET_FAVORITE_STATUS:
      const moviesDuplicate = state.movies.slice();
      const movie = moviesDuplicate.find((movieItem) => movieItem.id === action.payload.id);
      movie.isFavorite = action.payload.isFavorite;

      return extend(state, {
        movies: moviesDuplicate,
      });
    default:
      return state;
  }
};

export {reducer, ActionType, ActionCreator, Operation};
