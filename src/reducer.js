import movies from "./mocks/films.js";

const initialState = {
  currentGenre: `all`,
  movies,
};

const ActionType = {
  SET_CURRENT_GENRE: `SET_CURRENT_GENRE`,
  GET_MOVIES_BY_GENRE: `GET_MOVIES_BY_GENRE`,
};

const setCurrentGenre = (genre) => {
  return {
    type: ActionType.GET_CURRENT_GENRE,
    payload: genre,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_CURRENT_GENRE:
      return {
        currentGenre: action.payload,
        movies: state.movies,
      };

    case ActionType.GET_MOVIES_BY_GENRE:
      return {
        currentGenre: state.currentGenre,
        movies: action.payload,
      };

    default:
      return state;
  }
};

export {reducer, ActionType, setCurrentGenre};


// const getAllGenres = () => {
//   return {
//     type: ActionType.GET_ALL_GENRES,
//     genres: [...(new Set(movies.map((movie) => {
//       return movie.genre;
//     })))],
//   };
// };
