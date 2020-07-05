import moviesMock from "./mocks/films.js";
import {extend, FILTER_ALL_GENRES} from "./utils/utils.js";

const initialState = {
  currentGenre: FILTER_ALL_GENRES,
  moviesMock,
};

const ActionType = {
  SET_CURRENT_GENRE: `SET_CURRENT_GENRE`,
  GET_MOVIES: `GET_MOVIES`,
};

const setCurrentGenre = (genre) => {
  return {
    type: ActionType.GET_CURRENT_GENRE,
    payload: genre,
  };
};

const getMovies = (movies) => {
  return {
    type: ActionType.GET_MOVIES,
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

    case ActionType.GET_MOVIES:
      return extend(
          state, {
            movies: action.payload
          });

    default:
      return state;
  }
};

export {reducer, ActionType, setCurrentGenre, getMovies};
