import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../api/api.js";
import {ActionType, Operation, AuthorizationStatus} from "./user.js";

const api = createAPI(() => {});

describe(`Operation for user auth working correctly`, () => {
  it(`Will the AuthStatus change`, () => {
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

  it(`Will the login operation work`, () => {
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

  it(`Will the login throw error`, () => {
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
