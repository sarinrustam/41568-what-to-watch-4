import NameSpace from "../name-space";

export const getAuthStatus = (state) => {
  return state[NameSpace.USER].authorizationStatus;
};

export const getAvatar = (state) => {
  return state[NameSpace.USER].avatar;
};

export const getErrorMessage = (state) => {
  return state[NameSpace.USER].authorizationError;
};

export const getCheckAuthIsLoaded = (state) => {
  return state[NameSpace.USER].checkAuthIsLoaded;
};
