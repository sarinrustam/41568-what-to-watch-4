import * as React from "react";
import * as renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {MemoryRouter} from 'react-router';
import NameSpace from "../../reducer/name-space";
import {AuthorizationStatus} from "../../reducer/user/user";

import SignIn from "./sign-in";

const mockStore = configureStore([]);

describe(`SignIn test`, () => {
  it(`SignIn renfer correctly`, () => {
    const store = mockStore({
      [NameSpace.USER]: {
        authorizationStatus: AuthorizationStatus.NO_AUTH,
        avatar: `s`,
        authorizationError: ``,
      }
    });
    const tree = renderer.create(
        <Provider store={store}>
          <MemoryRouter>
            <SignIn
            />
          </MemoryRouter>
        </Provider>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
