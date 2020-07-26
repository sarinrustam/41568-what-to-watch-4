import React from "react";
import rerender from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import NameSpace from "../../reducer/name-space.js";
import {AuthorizationStatus} from "../../reducer/user/user.js";

import UserBlock from "./user-block.jsx";

const mockStore = configureStore([]);

describe(`UserBlock test`, () => {
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
          <UserBlock
          />
        </Provider>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
