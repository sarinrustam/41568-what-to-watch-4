import {extend, FILTER_ALL_GENRES, COUNT_LIMIT_MOVIES} from "./utils/utils.js";

const initialState = {
  currentGenre: FILTER_ALL_GENRES,
  movies: [],
  countMoviesShow: COUNT_LIMIT_MOVIES,
};

const ActionType = {
  SET_CURRENT_GENRE: `SET_CURRENT_GENRE`,
  SET_MOVIES: `SET_MOVIES`,
  INCREMENT_COUNT_MOVIES_SHOW: `INCREMENT_COUNT_MOVIES_SHOW`,
  RESET_COUNT_MOVIES_SHOW: `RESET_COUNT_MOVIES_SHOW`
};

const setCurrentGenre = (genre) => {
  return {
    type: ActionType.SET_CURRENT_GENRE,
    payload: genre,
  };
};

const setMovies = (movies) => {
  return {
    type: ActionType.SET_MOVIES,
    payload: movies,
  };
};

const incrementCountMoviesShow = () => {
  return {
    type: ActionType.INCREMENT_COUNT_MOVIES_SHOW
  };
};

const resetCountMoviesShow = () => {
  return {
    type: ActionType.RESET_COUNT_MOVIES_SHOW
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_CURRENT_GENRE:
      return extend(
          state, {
            currentGenre: action.payload
          });

    case ActionType.SET_MOVIES:
      return extend(
          state, {
            movies: action.payload
          });
    case ActionType.INCREMENT_COUNT_MOVIES_SHOW:
      return extend(
          state, {
            countMoviesShow: state.countMoviesShow + COUNT_LIMIT_MOVIES
          }
      );
    case ActionType.RESET_COUNT_MOVIES_SHOW:
      return extend(
          state, {
            countMoviesShow: COUNT_LIMIT_MOVIES
          }
      );
    default:
      return state;
  }
};

export {reducer, ActionType, setCurrentGenre, setMovies, incrementCountMoviesShow, resetCountMoviesShow};
