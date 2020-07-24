import NameSpace from "../name-space.js";

export const getMovies = (state) => {
  return state[NameSpace.DATA].movies;
};

export const getPromoMovie = (state) => {
  return state[NameSpace.DATA].promoMovie;
};
