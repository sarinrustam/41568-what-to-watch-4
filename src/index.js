import React from "react";
import ReactDOM from "react-dom";

import App from "@components/app/app.jsx";

const FilmData = {
  TITLE: `The Grand Budapest Hotel`,
  GENRE: `Drama`,
  YEAR: 2014,
};

const FILMS = [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`, `Avatar`, `Aviator`, `Pulp fiction`];

ReactDOM.render(
    <App
      title={FilmData.TITLE}
      genre={FilmData.GENRE}
      year={FilmData.YEAR}
      films={FILMS}
    />,
    document.querySelector(`#root`)
);
