import * as React from "react";
import * as ReactDOM from "react-dom";

import App from "./components/app/app";
import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {Provider} from "react-redux";
import reducer from "./reducer/reducer";
import {Operation as UserOperation, ActionCreator, AuthorizationStatus} from "./reducer/user/user";
import thunk from "redux-thunk";
import {createAPI} from "./api/api";
import history from "./history";
import {Operation as DataOperation} from "./reducer/data/data";

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

store.dispatch(DataOperation.loadPromo());
store.dispatch(DataOperation.loadMovies());
store.dispatch(UserOperation.checkAuth());

ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.querySelector(`#root`)
);
