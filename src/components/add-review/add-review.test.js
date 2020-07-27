import rerender from "react-test-renderer";
import React from "react";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import NameSpace from "../../reducer/name-space.js";
import {AuthorizationStatus} from "../../reducer/user/user.js";
import {MemoryRouter} from 'react-router';

import AddReview from "./add-review.jsx";

const mockStore = configureStore([]);

describe(`AddReview snapshot test`, () => {
  it(``, () => {
    const store = mockStore({
      [NameSpace.USER]: {
        authorizationStatus: AuthorizationStatus.NO_AUTH,
        avatar: `s`,
        authorizationError: ``,
      }
    });
    const tree = rerender.create(
        <Provider store={store}>
          <MemoryRouter>
            <AddReview/>
          </MemoryRouter>
        </Provider>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
