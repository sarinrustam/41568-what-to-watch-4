import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {setCurrentGenre, setMovies} from "../../reducer.js";

import PropTypes from "prop-types";

import SmallMovieCardList from "../small-movie-card-list/small-movie-card-list.jsx";
import GenreList from "../genres-list/genres-list.jsx";
import {FILTER_ALL_GENRES} from "../../utils/utils.js";

class Main extends PureComponent {
  constructor(props) {
    super(props);

    this.handlerMovieClick = this.handlerMovieClick.bind(this);
    this.handlerChangeGenre = this.handlerChangeGenre.bind(this);
  }

  componentWillMount() {
    this.props.onSetMovies(this.props.movies);
  }

  handlerMovieClick(movie) {
    this.props.onMovieClick(movie);
  }

  getGenresList() {
    return [FILTER_ALL_GENRES, ...new Set(this.props.movies.map((movie) => movie.genre))];
  }

  handlerChangeGenre(genre) {
    this.props.onSetCurrentGenre(genre);
    this.props.onSetMovies(this.props.movies.filter((movie) => {
      if (genre === FILTER_ALL_GENRES) {
        return true;
      }
      return movie.genre === genre;
    }));
  }

  render() {
    const {headerMovieTitle, headerMovieGenre, headerMovieYear, currentGenre, moviesList} = this.props;

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
              genresList={this.getGenresList()}
              currentGenre={currentGenre}
              setCurrentGenre={this.handlerChangeGenre}
            />

            <SmallMovieCardList
              movies={moviesList}
              onMovieClick={this.handlerMovieClick}
            />

            <div className="catalog__more">
              <button className="catalog__button" type="button">Show more</button>
            </div>
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
};

const mapStateToProps = (state) => ({
  currentGenre: state.currentGenre,
  moviesList: state.movies,
});

const mapDispatchToProps = (dispatch) => ({
  onSetCurrentGenre(genre) {
    dispatch(setCurrentGenre(genre));
  },
  onSetMovies(movies) {
    dispatch(setMovies(movies));
  },
});

export {Main};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
