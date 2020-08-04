import {createSelector} from "reselect";
import NameSpace from "../name-space.js";
import {getCurrentGenre} from "./../app/selectors.js";
import {FILTER_ALL_GENRES} from "../../utils/utils.js";

export const getMovies = (state) => {
  return state[NameSpace.DATA].movies;
};

export const getFavoriteMovies = (state) => {
  return state[NameSpace.DATA].favoriteMovies;
};

export const getFavoriteLoadedStatus = (state) => {
  return state[NameSpace.DATA].isFavoriteMoviesLoaded;
};

export const getMovieById = createSelector(
    (state, filmId) => parseInt(filmId, 10),
    getMovies,
    (movieId, movies) => {
      return movies.find((movie) => movie.id === movieId);
    }
);

export const getPromoMovie = (state) => {
  return state[NameSpace.DATA].promoMovie;
};

export const getMoviesByGenre = createSelector(
    getMovies,
    getCurrentGenre,
    (resultOne, resultTwo) => {
      return resultOne.filter((movie) => {
        if (resultTwo === FILTER_ALL_GENRES) {
          return true;
        }
        return movie.genre === resultTwo;
      });
    }
);

export const getGenres = createSelector(
    getMovies,
    (resultOne) => {
      return resultOne.map((movie) => movie.genre);
    }
);

export const uniqueGenres = createSelector(
    getGenres,
    (resultOne) => {
      return [FILTER_ALL_GENRES].concat(Array.from(new Set(resultOne)));
    }
);

export const getIsMoviesLoaded = (state) => {
  return state[NameSpace.DATA].isMoviesLoaded;
};

export const getIsPromoMovieLoaded = (state) => {
  return state[NameSpace.DATA].isPromoMovieLoaded;
};
