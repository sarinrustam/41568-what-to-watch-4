import {reducer, setCurrentGenre} from "./reducer.js";
import moviesMock from "./mocks/films.js";
import {FILTER_ALL_GENRES} from "./utils/utils.js";

const initialState = {
  currentGenre: FILTER_ALL_GENRES,
  movies: [],
};

describe(`Reducer tests`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(void 0, {})).toEqual(initialState);
  });

  it(`Action working correctly`, () => {
    const newInitialState = {
      currentGenre: moviesMock[2].genre,
      movies: [],
    };

    expect(reducer(initialState, setCurrentGenre(moviesMock[2].genre))).toEqual(newInitialState);
  });
});
