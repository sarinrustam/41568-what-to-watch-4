import React from "react";
import ReactDOM from "react-dom";

import App from "@components/app/app.jsx";
import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {Provider} from "react-redux";
import reducer from "./reducer/reducer.js";
import {ActionCreator, AuthorizationStatus} from "./reducer/user/user.js";
import thunk from "redux-thunk";
import {createAPI} from "./api/api.js";
import history from "./history.js";

const onUnauthorized = (error) => {
  store.dispatch(ActionCreator.setAuthorization(AuthorizationStatus.NO_AUTH));
  if (error.config.url !== `/login`) {
    history.push(`/login`);
  }
};

const api = createAPI(onUnauthorized);

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.querySelector(`#root`)
);
