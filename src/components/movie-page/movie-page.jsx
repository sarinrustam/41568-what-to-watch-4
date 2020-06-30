import React, {PureComponent} from "react";
import PropTypes from "prop-types";

import MoviePageReviews from "../movie-page-review/movie-page-reviews.jsx";
import MoviePageOverview from "../movie-page-overview/movie-page-overview.jsx";
import MoviePageDetails from "../movie-page-details/movie-page-details.jsx";

import SmallMovieCardList from "../small-movie-card-list/small-movie-card-list.jsx";
import PAGE_FILTERS from "../../utils/utils.jsx";

class MoviePage extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeFilter: PAGE_FILTERS[0]
    };

    this.handlerMovieClick = this.handlerMovieClick.bind(this);
  }

  setActiveFilter(filter) {
    this.setState({
      activeFilter: filter
    });
  }

  handlerMovieClick(movie) {
    this.props.onMovieClick(movie);
  }

  renderActiveMovieSection() {
    
  }

  render() {
    const {movie, relativeMovies} = this.props;
    const {title, genre, img, coverBackground, poster, release, rating, description, crew} = movie;
    const {score, scoreDesc, amount} = rating;
    const {director, actors} = crew;
    const {activeFilter} = this.state;

    return (
      <React.Fragment>
        <section className="movie-card movie-card--full">
          <div className="movie-card__hero">
            <div className="movie-card__bg">
              <img src={coverBackground} alt={title} />
            </div>

            <h1 className="visually-hidden">WTW</h1>

            <header className="page-header movie-card__head">
              <div className="logo">
                <a href="main.html" className="logo__link">
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
              <div className="movie-card__desc">
                <h2 className="movie-card__title">{title}</h2>
                <p className="movie-card__meta">
                  <span className="movie-card__genre">{genre}</span>
                  <span className="movie-card__year">{release}</span>
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
                  <a href="add-review.html" className="btn movie-card__button">Add review</a>
                </div>
              </div>
            </div>
          </div>

          <div className="movie-card__wrap movie-card__translate-top">
            <div className="movie-card__info">
              <div className="movie-card__poster movie-card__poster--big">
                <img src={poster} alt={title} width="218" height="327" />
              </div>

              <div className="movie-card__desc">
                <nav className="movie-nav movie-card__nav">
                  <ul className="movie-nav__list">
                    {PAGE_FILTERS.map((filter) => (
                      <li
                        key={filter}
                        onClick={() => this.setActiveFilter(filter)}
                        className={activeFilter === filter ? `movie-nav__item movie-nav__item--active` : `movie-nav__item`}
                      >
                        <a href="#" className="movie-nav__link">{filter}</a>
                      </li>
                    ))}
                  </ul>
                </nav>
                {}
                {/* <div className="movie-rating">
                  <div className="movie-rating__score">{score}</div>
                  <p className="movie-rating__meta">
                    <span className="movie-rating__level">{scoreDesc}</span>
                    <span className="movie-rating__count">{amount} ratings</span>
                  </p>
                </div>

                <div className="movie-card__text">
                  <p>{description}</p>

                  <p className="movie-card__director"><strong>Director: {director}</strong></p>

                  <p className="movie-card__starring"><strong>Starring: {actors} and other</strong></p>
                </div> */}
              </div>
            </div>
          </div>
        </section>

        <div className="page-content">
          <section className="catalog catalog--like-this">
            <h2 className="catalog__title">More like this</h2>

            <SmallMovieCardList
              movies={relativeMovies}
              onMovieClick={this.handlerMovieClick}
            />
          </section>

          <footer className="page-footer">
            <div className="logo">
              <a href="main.html" className="logo__link logo__link--light">
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

MoviePage.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    coverBackground: PropTypes.string.isRequired,
    release: PropTypes.number.isRequired,
    poster: PropTypes.string.isRequired,
    rating: PropTypes.shape({
      score: PropTypes.number.isRequired,
      scoreDesc: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
    }).isRequired,
    description: PropTypes.string.isRequired,
    crew: PropTypes.shape({
      director: PropTypes.string.isRequired,
      actors: PropTypes.string.isRequired
    }).isRequired,
  }).isRequired,
  onMovieClick: PropTypes.func.isRequired,
  relativeMovies: PropTypes.array.isRequired
};

export default MoviePage;
