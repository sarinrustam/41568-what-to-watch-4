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
};

const ActionType = {
  SET_AUTHORIZATION: `SET_AUTHORIZATION`,
  ADD_AVATAR: `ADD_AVATAR`,
  ADD_AUTH_ERROR: `ADD_AUTH_ERROR`,
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
  }
};

const Operation = {
  checkAuth: () => (dispatch, getState, api) => {
    return api.get(`/login`)
      .then(({data}) => {
        dispatch(ActionCreator.setAuthorization(AuthorizationStatus.AUTH));
        dispatch(ActionCreator.addAvatar(userAdapter(data).avatarUrl));
      })
      .catch((error) => {
        throw error;
      });
  },
  login: ({email, password}) => (dispatch, getState, api) => {
    return api.post(`/login`, {
      email,
      password
    })
      .then(({data}) => {
        dispatch(ActionCreator.setAuthorization(AuthorizationStatus.AUTH));
        dispatch(ActionCreator.addAvatar(data[`avatar_url`]));
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
    default:
      return state;
  }
};

export {reducer, ActionType, ActionCreator, Operation, AuthorizationStatus};
