import React from "react";
import Main from "@components/main/main.jsx";

const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const {title, genre, year} = props;
  return (
    <Main headerFilmTitle={title} headerFilmGenre={genre} headerFilmYear={year}/>
  );
};

export default App;
