import movies from "./mocks/films.js";

const initialState = {
  currentGenre: `all`,
  genres: [...(new Set(movies.map((movie) => {
    return movie.genre;
  })))],
};

const ActionType = {
  GET_CURRENT_GENRE: `GET_CURRENT_GENRE`,
  GET_ALL_GENRES: `GET_ALL_GENRES`,
};

const setCurrentGenre = (genre) => {
  return {
    type: ActionType.GET_CURRENT_GENRE,
    currentGenre: genre,
  };
};

const getAllGenres = () => {
  return {
    type: ActionType.GET_ALL_GENRES,
    genres: [...(new Set(movies.map((movie) => {
      return movie.genre;
    })))],
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_CURRENT_GENRE:
      return {
        ...state,
        currentGenre: action.currentGenre
      };

    case ActionType.GET_ALL_GENRES:
      return {
        ...state,
        genres: action.genres
      };

    default:
      return state;
  }
};

export {reducer, ActionType, setCurrentGenre, getAllGenres};
