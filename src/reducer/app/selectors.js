import NameSpace from "../name-space.js";

export const getCurrentGenre = (state) => {
  return state[NameSpace.APP].currentGenre;
};

export const getCountMoviesShow = (state) => {
  return state[NameSpace.APP].countMoviesShow;
};
