import rerender from "react-test-renderer";
import React from "react";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import NameSpace from "./../../reducer/name-space.js";
import {MemoryRouter} from 'react-router';

import AddReview from "./add-review.jsx";

const mockStore = configureStore([]);

describe(`AddReview snapshot test`, () => {
  it(``, () => {
    const store = mockStore({
      [NameSpace.USER]: {
        authorizationStatus: ``,
        avatar: `defaultAvatar`,
        authorizationError: ``,
      }
    });
    const tree = rerender.create(
        <Provider
          store={store}
        >
          <MemoryRouter>
            <AddReview
              onInputComment={() => {}}
              onChangeRating={() => {}}
              onSendComment={() => {}}
              rating={3}
              comment={`Hello world`}
              isButtonDisabled={true}
              readOnly={true}
              errorText={`Error`}
            />
          </MemoryRouter>
        </Provider>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
