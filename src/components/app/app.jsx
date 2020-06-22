import React from "react";

import Main from "@components/main/main.jsx";
import PropTypes from "prop-types";

const titleMovieLinkHandler = () => {};

const App = (props) => {
  const {title, genre, year, movies} = props;
  return (
    <Main
      headerMovieTitle={title}
      headerMovieGenre={genre}
      headerMovieYear={year}
      movies={movies}
      onTitleMovieLinkClick={titleMovieLinkHandler}
    />
  );
};

App.propTypes = {
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  movies: PropTypes.array.isRequired
};

export default App;
