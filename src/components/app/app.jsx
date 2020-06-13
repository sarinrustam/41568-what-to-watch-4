import React from "react";

import Main from "@components/main/main.jsx";
import PropTypes from "prop-types";

const App = (props) => {
  const {title, genre, year, films} = props;
  return (
    <Main
      headerFilmTitle={title}
      headerFilmGenre={genre}
      headerFilmYear={year}
      films={films}
    />
  );
};

App.propTypes = {
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  films: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default App;
