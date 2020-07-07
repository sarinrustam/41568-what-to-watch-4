import {extend, FILTER_ALL_GENRES} from "./utils/utils.js";

const initialState = {
  currentGenre: FILTER_ALL_GENRES,
  movies: [],
};

const ActionType = {
  SET_CURRENT_GENRE: `SET_CURRENT_GENRE`,
  SET_MOVIES: `SET_MOVIES`,
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

    default:
      return state;
  }
};

export {reducer, ActionType, setCurrentGenre, setMovies};
