import NameSpace from "../name-space.js";

export const getErrorText = (state) => {
  return state[NameSpace.COMMENTS].errorText;
};

export const getIsLoading = (state) => {
  return state[NameSpace.COMMENTS].isLoading;
};

export const getComments = (state) => {
  return state[NameSpace.COMMENTS].comments;
};
