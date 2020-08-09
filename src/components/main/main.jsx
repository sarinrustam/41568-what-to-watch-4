import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer/app/app.js";
import {withRouter} from "react-router-dom";
import {AppRoute} from "../../utils/utils.js";

import PropTypes from "prop-types";

import SmallMovieCardList from "../small-movie-card-list/small-movie-card-list.jsx";
import ShowMoreButton from "../show-more-button/show-more-button.jsx";
import GenresList from "../genres-list/genres-list.jsx";
import withActiveItem from "../../hocs/with-active-item/with-active-item.js";
import {getPromoMovie, getMoviesByGenre, uniqueGenres} from "../../reducer/data/selectors.js";
import {getCurrentGenre, getCountMoviesShow} from "../../reducer/app/selectors.js";
import UserBlock from "../user-block/user-block.jsx";
import MyListButton from "../my-list-button/my-list-button.jsx";
import {Operation as DataOperation} from "../../reducer/data/data.js";

const SmallMovieCardListWrapped = withActiveItem(SmallMovieCardList);

class Main extends PureComponent {
  constructor(props) {
    super(props);

    this.handlerMovieClick = this.handlerMovieClick.bind(this);
    this.handlerShowMoreButtonClick = this.handlerShowMoreButtonClick.bind(this);
    this.handlerSetCurrentGenre = this.handlerSetCurrentGenre.bind(this);
    this.handlePlay = this.handlePlay.bind(this);
    this.handleToggleIsFavorite = this.handleToggleIsFavorite.bind(this);
  }

  handlerMovieClick(movie) {
    this.props.history.push(`${AppRoute.FILMS}/${movie.id}`);
  }

  handlerShowMoreButtonClick() {
    this.props.onIncrementCountMoviesShow();
  }

  handlerSetCurrentGenre(genre) {
    const {onSetCurrentGenre, onResetCountMoviesShow} = this.props;

    onSetCurrentGenre(genre);
    onResetCountMoviesShow();
  }

  handleToggleIsFavorite(isFavorite) {
    const {onSetFavoriteStatus, promoMovie: {id}} = this.props;
    onSetFavoriteStatus(id, isFavorite);
  }

  handlePlay() {
    this.props.history.push(`${AppRoute.PLAYER}/${this.props.promoMovie.id}`);
  }

  render() {
    const {currentGenre, genres, slicedMoviesByGenre, showMoreButton, promoMovie} = this.props;

    return (
      <React.Fragment>
        <section className="movie-card">
          <div className="movie-card__bg">
            <img src={promoMovie.coverBackground} alt={promoMovie.title} />
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

            <UserBlock/>
          </header>

          <div className="movie-card__wrap">
            <div className="movie-card__info">
              <div className="movie-card__poster">
                <img src={promoMovie.poster} alt={promoMovie.title} width="218" height="327" />
              </div>

              <div className="movie-card__desc">
                <h2 className="movie-card__title">{promoMovie.title}</h2>
                <p className="movie-card__meta">
                  <span className="movie-card__genre">{promoMovie.genre}</span>
                  <span className="movie-card__year">{promoMovie.release}</span>
                </p>

                <div className="movie-card__buttons">
                  <button
                    className="btn btn--play movie-card__button"
                    type="button"
                    onClick={this.handlePlay}
                  >
                    <svg viewBox="0 0 19 19" width="19" height="19">
                      <use xlinkHref="#play-s"></use>
                    </svg>
                    <span>Play</span>
                  </button>
                  <MyListButton
                    onToggleButton={this.handleToggleIsFavorite}
                    isFavorite={promoMovie.isFavorite}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="page-content">
          <section className="catalog">
            <h2 className="catalog__title visually-hidden">Catalog</h2>

            <GenresList
              genresList={genres}
              currentGenre={currentGenre}
              onSetCurrentGenre={this.handlerSetCurrentGenre}
            />

            <SmallMovieCardListWrapped
              movies={slicedMoviesByGenre}
              onChangeActiveItem={this.handlerMovieClick}>
            </SmallMovieCardListWrapped>

            {showMoreButton ?
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
  promoMovie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    release: PropTypes.number.isRequired,
    coverBackground: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    isFavorite: PropTypes.bool.isRequired,
  }).isRequired,
  currentGenre: PropTypes.string.isRequired,
  onSetCurrentGenre: PropTypes.func.isRequired,
  genres: PropTypes.arrayOf(
      PropTypes.string.isRequired
  ).isRequired,
  onIncrementCountMoviesShow: PropTypes.func.isRequired,
  onResetCountMoviesShow: PropTypes.func.isRequired,
  slicedMoviesByGenre: PropTypes.array.isRequired,
  showMoreButton: PropTypes.bool.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  onSetFavoriteStatus: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  const currentGenre = getCurrentGenre(state);
  const countMoviesShow = getCountMoviesShow(state);
  const promoMovie = getPromoMovie(state);
  const moviesByGenre = getMoviesByGenre(state);
  const genres = uniqueGenres(state);
  const slicedMoviesByGenre = moviesByGenre.slice(0, countMoviesShow);
  const showMoreButton = moviesByGenre.length > countMoviesShow;

  return {
    currentGenre,
    genres,
    slicedMoviesByGenre,
    showMoreButton,
    promoMovie
  };
};

const mapDispatchToProps = {
  onSetCurrentGenre: ActionCreator.setCurrentGenre,
  onResetCountMoviesShow: ActionCreator.resetCountMoviesShow,
  onIncrementCountMoviesShow: ActionCreator.incrementCountMoviesShow,
  onSetFavoriteStatus: DataOperation.setFavoriteStatus,
};

export {Main};
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Main));
