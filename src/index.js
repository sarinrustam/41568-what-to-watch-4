import React from "react";
import ReactDOM from "react-dom";
import App from "@components/app/app.jsx";

const FilmData = {
  TITLE: `The Grand Budapest Hotel`,
  GENRE: `Drama`,
  YEAR: `2014`,
};

ReactDOM.render(
    <App
      title={FilmData.TITLE}
      genre={FilmData.GENRE}
      year={FilmData.YEAR}
    />,
    document.querySelector(`#root`)
);
