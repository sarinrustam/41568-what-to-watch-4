import React from "react";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import NameSpace from "./../../reducer/name-space.js";

import rerender from "react-test-renderer";
import App from "./app.jsx";

const mockStore = configureStore([]);

describe(`Render component`, () => {
  it(`Should App render correctly`, () => {
    const store = mockStore({
      [NameSpace.DATA]: {
        movies: [],
        promoMovie: {}
      },
      [NameSpace.APP]: {
        currentGenre: ``,
        countMoviesShow: ``,
      },
      [NameSpace.USER]: {
        authorizationStatus: ``,
        avatar: `defaultAvatar`,
        authorizationError: ``,
      }
    });

    const tree = rerender
      .create(
          <Provider store={store}>
            <App/>
          </Provider>, {
            createNodeMock: () => {
              return {};
            }}
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
