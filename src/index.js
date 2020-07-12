import React from "react";
import ReactDOM from "react-dom";

import App from "@components/app/app.jsx";
import movies from "./mocks/films.js";
import {createStore} from "redux";
import {Provider} from "react-redux";
import {reducer, setMovies} from "./reducer.js";

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);

store.dispatch(setMovies(movies));

const MovieData = {
  TITLE: `The Grand Budapest Hotel`,
  GENRE: `Drama`,
  YEAR: 2014,
};

ReactDOM.render(
    <Provider store={store}>
      <App
        title={MovieData.TITLE}
        genre={MovieData.GENRE}
        year={MovieData.YEAR}
        movies={movies}
      />
    </Provider>,
    document.querySelector(`#root`)
);
