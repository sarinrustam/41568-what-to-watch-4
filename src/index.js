import React from "react";
import ReactDOM from "react-dom";

import App from "@components/app/app.jsx";

const MovieData = {
  TITLE: `The Grand Budapest Hotel`,
  GENRE: `Drama`,
  YEAR: 2014,
};

const MOVIES = [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`, `Avatar`, `Aviator`, `Pulp fiction`];

ReactDOM.render(
    <App
      title={MovieData.TITLE}
      genre={MovieData.GENRE}
      year={MovieData.YEAR}
      movies={MOVIES}
    />,
    document.querySelector(`#root`)
);
