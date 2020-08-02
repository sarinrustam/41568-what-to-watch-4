import {extend, FILTER_ALL_GENRES, COUNT_LIMIT_MOVIES} from "../../utils/utils.js";

const initialState = {
  currentGenre: FILTER_ALL_GENRES,
  countMoviesShow: COUNT_LIMIT_MOVIES,
};

const ActionType = {
  SET_CURRENT_GENRE: `SET_CURRENT_GENRE`,
  INCREMENT_COUNT_MOVIES_SHOW: `INCREMENT_COUNT_MOVIES_SHOW`,
  RESET_COUNT_MOVIES_SHOW: `RESET_COUNT_MOVIES_SHOW`,
};

const ActionCreator = {
  setCurrentGenre: (genre) => {
    return {
      type: ActionType.SET_CURRENT_GENRE,
      payload: genre,
    };
  },
  incrementCountMoviesShow: () => {
    return {
      type: ActionType.INCREMENT_COUNT_MOVIES_SHOW
    };
  },
  resetCountMoviesShow: () => {
    return {
      type: ActionType.RESET_COUNT_MOVIES_SHOW
    };
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_CURRENT_GENRE:
      return extend(
          state, {
            currentGenre: action.payload
          });
    case ActionType.LOAD_MOVIES:
      return extend(
          state, {
            movies: action.payload,
          }
      );
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
    case ActionType.SET_IS_LOADING:
      return extend(
          state, {
            isLoading: action.payload
          }
      );
    default:
      return state;
  }
};

export {reducer, ActionType, ActionCreator};
