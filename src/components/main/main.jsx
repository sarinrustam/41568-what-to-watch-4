import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {setCurrentGenre, setMovies, incrementCountMoviesShow, resetCountMoviesShow} from "../../reducer.js";

import PropTypes from "prop-types";

import SmallMovieCardList from "../small-movie-card-list/small-movie-card-list.jsx";
import ShowMoreButton from "../show-more-button/show-more-button.jsx";
import GenreList from "../genres-list/genres-list.jsx";
import {FILTER_ALL_GENRES} from "../../utils/utils.js";

class Main extends PureComponent {
  constructor(props) {
    super(props);

    this.handlerMovieClick = this.handlerMovieClick.bind(this);
    this.handlerShowMoreButtonClick = this.handlerShowMoreButtonClick.bind(this);
    this.handlerSetCurrentGenre = this.handlerSetCurrentGenre.bind(this);
  }

  componentDidMount() {
    const {onSetMovies, movies} = this.props;
    onSetMovies(movies);
  }

  handlerMovieClick(movie) {
    this.props.onMovieClick(movie);
  }

  handlerShowMoreButtonClick() {
    const {moviesList, onincrementCountMoviesShow, countMoviesShow} = this.props;

    if (moviesList.length > countMoviesShow) {
      onincrementCountMoviesShow();
    }
  }

  handlerSetCurrentGenre(genre) {
    const {onSetCurrentGenre, onresetCountMoviesShow} = this.props;

    onSetCurrentGenre(genre);
    onresetCountMoviesShow();
  }

  render() {
    const {headerMovieTitle, headerMovieGenre, headerMovieYear, currentGenre, moviesList, countMoviesShow, genres} = this.props;
    const slicedMoviesByGenre = moviesList.slice(0, countMoviesShow);

    return (
      <React.Fragment>
        <section className="movie-card">
          <div className="movie-card__bg">
            <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header movie-card__head">
            <div className="logo">
              <a className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </a>
            </div>

            <div className="user-block">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </div>
          </header>

          <div className="movie-card__wrap">
            <div className="movie-card__info">
              <div className="movie-card__poster">
                <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" />
              </div>

              <div className="movie-card__desc">
                <h2 className="movie-card__title">{headerMovieTitle}</h2>
                <p className="movie-card__meta">
                  <span className="movie-card__genre">{headerMovieGenre}</span>
                  <span className="movie-card__year">{headerMovieYear}</span>
                </p>

                <div className="movie-card__buttons">
                  <button className="btn btn--play movie-card__button" type="button">
                    <svg viewBox="0 0 19 19" width="19" height="19">
                      <use xlinkHref="#play-s"></use>
                    </svg>
                    <span>Play</span>
                  </button>
                  <button className="btn btn--list movie-card__button" type="button">
                    <svg viewBox="0 0 19 20" width="19" height="20">
                      <use xlinkHref="#add"></use>
                    </svg>
                    <span>My list</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="page-content">
          <section className="catalog">
            <h2 className="catalog__title visually-hidden">Catalog</h2>

            <GenreList
              genresList={genres}
              currentGenre={currentGenre}
              setCurrentGenre={this.handlerSetCurrentGenre}
            />

            <SmallMovieCardList
              movies={slicedMoviesByGenre}
              onMovieClick={this.handlerMovieClick}
            />

            {moviesList.length > countMoviesShow ?
              <ShowMoreButton
                onButtonClick={this.handlerShowMoreButtonClick}
              /> : ``}
          </section>

          <footer className="page-footer">
            <div className="logo">
              <a className="logo__link logo__link--light">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </a>
            </div>

            <div className="copyright">
              <p>© 2019 What to watch Ltd.</p>
            </div>
          </footer>
        </div>
      </React.Fragment>
    );
  }
}

Main.propTypes = {
  headerMovieTitle: PropTypes.string.isRequired,
  headerMovieGenre: PropTypes.string.isRequired,
  headerMovieYear: PropTypes.number.isRequired,
  movies: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
      })
  ).isRequired,
  onMovieClick: PropTypes.func.isRequired,
  currentGenre: PropTypes.string.isRequired,
  onSetCurrentGenre: PropTypes.func.isRequired,
  onSetMovies: PropTypes.func.isRequired,
  moviesList: PropTypes.array.isRequired,
  genres: PropTypes.arrayOf(
      PropTypes.string.isRequired
  ).isRequired,
  onincrementCountMoviesShow: PropTypes.func.isRequired,
  onresetCountMoviesShow: PropTypes.func.isRequired,
  countMoviesShow: PropTypes.number.isRequired
};

const mapStateToProps = (state) => {
  const moviesByGenre = state.movies.filter((movie) => {
    if (state.currentGenre === FILTER_ALL_GENRES) {
      return true;
    }
    return movie.genre === state.currentGenre;
  });

  const genres = state.movies.map((movie) => movie.genre);
  const uniqueGenres = [FILTER_ALL_GENRES].concat(Array.from(new Set(genres)));

  return {
    currentGenre: state.currentGenre,
    moviesList: moviesByGenre,
    genres: uniqueGenres,
    countMoviesShow: state.countMoviesShow
  };
};

const mapDispatchToProps = {
  onSetCurrentGenre: setCurrentGenre,
  onSetMovies: setMovies,
  onresetCountMoviesShow: resetCountMoviesShow,
  onincrementCountMoviesShow: incrementCountMoviesShow
};

export {Main};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
