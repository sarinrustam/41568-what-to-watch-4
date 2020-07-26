import NameSpace from "../name-space.js";

export const getAuthStatus = (state) => {
  return state[NameSpace.USER].authorizationStatus;
};

export const getAvatar = (state) => {
  return state[NameSpace.USER].avatar;
};

export const getErrorMessage = (state) => {
  return state[NameSpace.USER].authorizationError;
};
