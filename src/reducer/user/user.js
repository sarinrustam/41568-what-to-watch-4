import {extend} from "../../utils/utils.js";
import {userAdapter} from "../../adapters/user.js";

const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

const defaultAvatar = `img/avatar.jpg`;

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  avatar: defaultAvatar,
  authorizationError: ``,
  checkAuthIsLoaded: false
};

const ActionType = {
  SET_AUTHORIZATION: `SET_AUTHORIZATION`,
  ADD_AVATAR: `ADD_AVATAR`,
  ADD_AUTH_ERROR: `ADD_AUTH_ERROR`,
  SET_CHECK_AUTH_IS_LOADED: `SET_CHECK_AUTH_IS_LOADED`
};

const ActionCreator = {
  setAuthorization: (status) => {
    return {
      type: ActionType.SET_AUTHORIZATION,
      payload: status,
    };
  },
  addAvatar: (srcImage) => {
    return {
      type: ActionType.ADD_AVATAR,
      payload: srcImage,
    };
  },
  addAuthError: (errorMessage) => {
    return {
      type: ActionType.ADD_AUTH_ERROR,
      payload: errorMessage,
    };
  },
  setCheckAuthIsLoaded: (value) => {
    return {
      type: ActionType.SET_CHECK_AUTH_IS_LOADED,
      payload: value
    };
  }
};

const Operation = {
  checkAuth: () => (dispatch, getState, api) => {
    return api.get(`/login`)
      .then(({data}) => {
        dispatch(ActionCreator.setAuthorization(AuthorizationStatus.AUTH));
        dispatch(ActionCreator.addAvatar(userAdapter(data).avatarUrl));
        dispatch(ActionCreator.setCheckAuthIsLoaded(true));
      })
      .catch(() => {
        dispatch(ActionCreator.setCheckAuthIsLoaded(true));
      });
  },
  login: ({email, password}) => (dispatch, getState, api) => {
    return api.post(`/login`, {
      email,
      password
    })
      .then(({data}) => {
        dispatch(ActionCreator.setAuthorization(AuthorizationStatus.AUTH));
        dispatch(ActionCreator.addAvatar(userAdapter(data).avatarUrl));
      })
      .catch(({response}) => {
        dispatch(ActionCreator.addAuthError(response.data.error));
      });
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_AUTHORIZATION:
      return extend(state, {
        authorizationStatus: action.payload,
      });
    case ActionType.ADD_AVATAR:
      return extend(state, {
        avatar: action.payload,
      });
    case ActionType.ADD_AUTH_ERROR:
      return extend(state, {
        authorizationError: action.payload,
      });
    case ActionType.SET_CHECK_AUTH_IS_LOADED:
      return extend(state, {
        checkAuthIsLoaded: action.payload,
      });
    default:
      return state;
  }
};

export {reducer, ActionType, ActionCreator, Operation, AuthorizationStatus};
