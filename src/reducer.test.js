import {reducer, setCurrentGenre, incrementCountMoviesRender, setMovies, resetCountMoviesRender} from "./reducer.js";
import moviesMock from "./mocks/films.js";
import {FILTER_ALL_GENRES, COUNT_LIMIT_MOVIES} from "./utils/utils.js";

const initialState = {
  currentGenre: FILTER_ALL_GENRES,
  movies: [],
  countMoviesRender: COUNT_LIMIT_MOVIES
};

describe(`Reducer tests`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(void 0, {})).toEqual(initialState);
  });

  it(`Action working correctly`, () => {
    const newInitialState = {
      currentGenre: moviesMock[2].genre,
      movies: [],
      countMoviesRender: COUNT_LIMIT_MOVIES
    };

    expect(reducer(initialState, setCurrentGenre(moviesMock[2].genre))).toEqual(newInitialState);
  });

  it(`incrementCountMoviesRender working correctly`, () => {
    const newInitialState = {
      currentGenre: FILTER_ALL_GENRES,
      movies: [],
      countMoviesRender: COUNT_LIMIT_MOVIES + 8
    };
    expect(reducer(initialState, incrementCountMoviesRender())).toEqual(newInitialState);
  });

  it(`setMovies working correctly`, () => {
    const newInitialState = {
      currentGenre: FILTER_ALL_GENRES,
      movies: moviesMock,
      countMoviesRender: COUNT_LIMIT_MOVIES,
    };
    expect(reducer(initialState, setMovies(moviesMock))).toEqual(newInitialState);
  });

  it(`resetCountMoviesRender`, () => {
    const newInitialState = {
      currentGenre: FILTER_ALL_GENRES,
      movies: [],
      countMoviesRender: COUNT_LIMIT_MOVIES + COUNT_LIMIT_MOVIES,
    };
    expect(reducer(newInitialState, resetCountMoviesRender())).toEqual(initialState);
  });
});
