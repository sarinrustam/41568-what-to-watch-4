import {extend, FILTER_ALL_GENRES, COUNT_LIMIT_MOVIES} from "./utils/utils.js";

const initialState = {
  currentGenre: FILTER_ALL_GENRES,
  movies: [],
  countMoviesRender: COUNT_LIMIT_MOVIES,
};

const ActionType = {
  SET_CURRENT_GENRE: `SET_CURRENT_GENRE`,
  SET_MOVIES: `SET_MOVIES`,
  INCREMENT_COUNT_MOVIES_RENDER: `INCREMENT_COUNT_MOVIES_RENDER`,
  RESET_COUNT_MOVIES_RENDER: `RESET_COUNT_MOVIES_RENDER`
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

const incrementCountMoviesRender = () => {
  return {
    type: ActionType.INCREMENT_COUNT_MOVIES_RENDER
  };
};

const resetCountMoviesRender = () => {
  return {
    type: ActionType.RESET_COUNT_MOVIES_RENDER
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
    case ActionType.INCREMENT_COUNT_MOVIES_RENDER:
      return extend(
          state, {
            countMoviesRender: state.countMoviesRender + COUNT_LIMIT_MOVIES
          }
      );
    case ActionType.RESET_COUNT_MOVIES_RENDER:
      return extend(
          state, {
            countMoviesRender: COUNT_LIMIT_MOVIES
          }
      );
    default:
      return state;
  }
};

export {reducer, ActionType, setCurrentGenre, setMovies, incrementCountMoviesRender, resetCountMoviesRender};
