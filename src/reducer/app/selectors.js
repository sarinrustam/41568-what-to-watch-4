import NameSpace from "../name-space";

export const getCurrentGenre = (state) => {
  return state[NameSpace.APP].currentGenre;
};

export const getCountMoviesShow = (state) => {
  return state[NameSpace.APP].countMoviesShow;
};
