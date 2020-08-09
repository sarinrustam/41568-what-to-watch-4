import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../api/api.js";
import {reducer, ActionCreator, ActionType, Operation, AuthorizationStatus} from "./user.js";

const api = createAPI(() => {});

const defaultAvatar = `img/avatar.jpg`;

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  avatar: defaultAvatar,
  authorizationError: ``,
  checkAuthIsLoaded: false
};

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual(initialState);
});

describe(`Operation working correctly`, () => {
  it(`Should make a correct API get call to /login`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const getState = () => {};
    const checkAuth = Operation.checkAuth();
    const response = {
      [`avatar_url`]: `sss`
    };

    apiMock
      .onGet(`/login`)
      .reply(200, response);

    return checkAuth(dispatch, getState, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_AUTHORIZATION,
          payload: AuthorizationStatus.AUTH,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.ADD_AVATAR,
          payload: response[`avatar_url`],
        });
        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: ActionType.SET_CHECK_AUTH_IS_LOADED,
          payload: true,
        });
      });
  });

  it(`Should make a correct API post call to /login`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const getState = () => {};
    const body = {email: `22@s.com`, password: `33`};
    const login = Operation.login(body);
    const response = {
      [`avatar_url`]: `sss`
    };

    apiMock
      .onPost(`/login`, body)
      .reply(200, response);

    return login(dispatch, getState, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_AUTHORIZATION,
          payload: AuthorizationStatus.AUTH,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.ADD_AVATAR,
          payload: response[`avatar_url`],
        });
      });
  });

  it(`Should make a correct API post call to /login throw error`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const getState = () => {};
    const body = {email: `22@s.com`, password: `33`};
    const login = Operation.login(body);
    const errorMessage = `sdf`;

    apiMock
      .onPost(`/login`, body)
      .reply(400, errorMessage);

    return login(dispatch, getState, api)

      .catch(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.ADD_AUTH_ERROR,
          payload: errorMessage,
        });
      });
  });
});

describe(`Actions working correctly`, () => {
  it(`Action setAuthorization working correctly`, () => {
    const newInitialState = {
      authorizationStatus: AuthorizationStatus.AUTH,
      avatar: defaultAvatar,
      authorizationError: ``,
      checkAuthIsLoaded: false
    };

    expect(reducer(initialState, ActionCreator.setAuthorization(AuthorizationStatus.AUTH))).toEqual(newInitialState);
  });

  it(`Action addAvatar working correctly`, () => {
    const avatar = `img/avatar.jpg`;

    const newInitialState = {
      authorizationStatus: AuthorizationStatus.NO_AUTH,
      avatar,
      authorizationError: ``,
      checkAuthIsLoaded: false
    };

    expect(reducer(initialState, ActionCreator.addAvatar(avatar))).toEqual(newInitialState);
  });

  it(`Action addAuthError working correctly`, () => {
    const errorMessage = `Ошибка`;
    const newInitialState = {
      authorizationStatus: AuthorizationStatus.NO_AUTH,
      avatar: defaultAvatar,
      authorizationError: errorMessage,
      checkAuthIsLoaded: false
    };

    expect(reducer(initialState, ActionCreator.addAuthError(errorMessage))).toEqual(newInitialState);
  });

  it(`Action setCheckAuthIsLoaded working correctly`, () => {
    const newInitialState = {
      authorizationStatus: AuthorizationStatus.NO_AUTH,
      avatar: defaultAvatar,
      authorizationError: ``,
      checkAuthIsLoaded: true
    };

    expect(reducer(initialState, ActionCreator.setCheckAuthIsLoaded(true))).toEqual(newInitialState);
  });
});
