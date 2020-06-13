import React from "react";

import Main from "@components/main/main.jsx";
import PropTypes from "prop-types";

const App = (props) => {
  const {title, genre, year, movies} = props;
  return (
    <Main
      headerMovieTitle={title}
      headerMovieGenre={genre}
      headerMovieYear={year}
      movies={movies}
    />
  );
};

App.propTypes = {
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  movies: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default App;
