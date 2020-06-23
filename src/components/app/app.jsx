import React, {PureComponent} from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";

import Main from "@components/main/main.jsx";
import MoviePage from "../movie-page/movie-page.jsx";
import PropTypes from "prop-types";


class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeMovie: null
    };

    this.handlerMovieClick = this.handlerMovieClick.bind(this);
  }

  handlerMovieClick(movie) {
    this.setState({
      activeMovie: movie
    });
  }

  renderApp() {
    const {title, genre, year, movies} = this.props;
    const {activeMovie} = this.state;

    if (activeMovie) {
      return <MoviePage
        movie={activeMovie}
        movies={movies}
        onMovieClick={this.handlerMovieClick}
      />;
    }

    return (
      <Main
        headerMovieTitle={title}
        headerMovieGenre={genre}
        headerMovieYear={year}
        movies={movies}
        onMovieClick={this.handlerMovieClick}
      />
    );
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this.renderApp()}
          </Route>
          <Route exact path="/dev-movie">
            <MoviePage
              movie={this.props.movies[0]}
              movies={this.props.movies}
              onMovieClick={this.handlerMovieClick}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  movies: PropTypes.array.isRequired
};

export default App;
