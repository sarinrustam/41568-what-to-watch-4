import React from "react";
import rerender from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import NameSpace from "../../reducer/name-space.js";
import {AuthorizationStatus} from "../../reducer/user/user.js";

import SignIn from "./sign-in.jsx";

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
    const tree = rerender.create(
        <Provider store={store}>
          <SignIn
          />
        </Provider>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
