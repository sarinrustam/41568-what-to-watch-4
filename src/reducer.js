import moviesMock from "./mocks/films.js";

const initialState = {
  currentGenre: `all`,
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
      return {
        currentGenre: action.payload,
        movies: state.movies,
      };

    case ActionType.GET_MOVIES:
      return {
        currentGenre: state.currentGenre,
        movies: action.payload,
      };

    default:
      return state;
  }
};

export {reducer, ActionType, setCurrentGenre, getMovies};
