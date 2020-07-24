import {extend} from "../../utils/utils.js";
import {arrayAdapter, adapter} from "../../adapters/movies.js";

const initialState = {
  movies: [],
  promoMovie: {}
};

const ActionType = {
  LOAD_MOVIES: `LOAD_MOVIES`,
  LOAD_PROMO: `LOAD_PROMO`,
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
      payload: promoMovie
    };
  }
};

const Operation = {
  loadMovies: () => (dispatch, getState, api) => {
    return api.get(`/films`)
      .then((response) => {
        const movies = arrayAdapter(response.data);
        dispatch(ActionCreator.loadMovies(movies));
      })
      .catch((error) => {
        throw error;
      });
  },
  loadPromo: () => (dispatch, getState, api) => {
    return api.get(`/films/promo`)
      .then((response) => {
        const promoMovie = adapter(response.data);
        dispatch(ActionCreator.loadPromo(promoMovie));
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
    default:
      return state;
  }
};

export {reducer, ActionType, ActionCreator, Operation};
