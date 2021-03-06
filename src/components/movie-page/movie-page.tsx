import * as React from "react";
import {connect} from "react-redux";
import {withRouter, Link} from "react-router-dom";
import {PAGE_FILTERS, AppRoute, SHOWING_MOVIES_COUNT} from "../../utils/utils";
import history from "../../history";
import SmallMovieCardList from "../small-movie-card-list/small-movie-card-list";
import withActiveItem from "../../hocs/with-active-item/with-active-item";
import MovieCardDescription from "../movie-card-description/movie-card-description";
import {getMovies} from "../../reducer/data/selectors";
import MyListButton from "../my-list-button/my-list-button";
import {Operation as DataOperation} from "../../reducer/data/data";
import UserBlock from "../user-block/user-block";
import {Operation as CommentsOperation} from "../../reducer/comments/comments";
import {getComments} from "../../reducer/comments/selectors";
import {Movie as MovieType} from "../../types/types";

interface Props {
  movie: MovieType;
  relativeMovies: [MovieType];
  onSetFavoriteStatus: (id: number, isFavorite: boolean) => void;
  onLoadComments: (id: number) => void;
  comments: [object];
  match: {
    params: {
      id: string;
    };
  };
}

const SmallMovieCardListWrapped = withActiveItem(SmallMovieCardList);
const MovieCardDescriptionWrapped = withActiveItem(MovieCardDescription, PAGE_FILTERS[0]);

class MoviePage extends React.PureComponent<Props, {}> {
  constructor(props) {
    super(props);

    this.handlePlay = this.handlePlay.bind(this);
    this.handleToggleIsFavorite = this.handleToggleIsFavorite.bind(this);
    this.handleMovieClick = this.handleMovieClick.bind(this);
  }

  componentDidMount() {
    this.props.onLoadComments(this.props.movie.id);
  }

  handlePlay() {
    history.push(`${AppRoute.PLAYER}/${this.props.movie.id}`);
  }

  handleToggleIsFavorite(isFavorite) {
    const {onSetFavoriteStatus, movie: {id}} = this.props;
    onSetFavoriteStatus(id, isFavorite);
  }

  handleMovieClick(movie) {
    history.push(`${AppRoute.FILMS}/${movie.id}`);
  }

  render() {
    const {movie, relativeMovies, comments} = this.props;
    const {title, genre, coverBackground, poster, release, isFavorite, id} = movie;

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
                <Link
                  to={AppRoute.ROOT}
                  className="logo__link"
                >
                  <span className="logo__letter logo__letter--1">W</span>
                  <span className="logo__letter logo__letter--2">T</span>
                  <span className="logo__letter logo__letter--3">W</span>
                </Link>
              </div>

              <UserBlock/>
            </header>

            <div className="movie-card__wrap">
              <div className="movie-card__desc">
                <h2 className="movie-card__title">{title}</h2>
                <p className="movie-card__meta">
                  <span className="movie-card__genre">{genre}</span>
                  <span className="movie-card__year">{release}</span>
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
                    isFavorite={isFavorite}
                  />
                  <Link
                    className="btn movie-card__button"
                    to={`${AppRoute.FILMS}/${id}${AppRoute.REVIEW}`}
                  >
                    Add review
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="movie-card__wrap movie-card__translate-top">
            <div className="movie-card__info">
              <div className="movie-card__poster movie-card__poster--big">
                <img src={poster} alt={title} width="218" height="327" />
              </div>
              <MovieCardDescriptionWrapped
                movie={movie}
                comments={comments}
              />
            </div>
          </div>
        </section>

        <div className="page-content">
          <section className="catalog catalog--like-this">
            <h2 className="catalog__title">More like this</h2>

            <SmallMovieCardListWrapped
              movies={relativeMovies}
              onChangeActiveItem={this.handleMovieClick}
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

const mapStateToProps = (state, props) => {
  const movies = getMovies(state);
  const movieId = parseInt(props.match.params.id, 10);
  const movie = movies.find((movieItem) => movieItem.id === movieId);
  const comments = getComments(state);

  const moviesByGenre = movies.filter((movieItem) => {
    if (movieItem.id !== movie.id) {
      return movieItem.genre === movie.genre;
    }

    return false;
  });

  return {
    relativeMovies: moviesByGenre.slice(0, SHOWING_MOVIES_COUNT),
    movie,
    comments,
  };
};

const mapDispatchToProps = {
  onSetFavoriteStatus: DataOperation.setFavoriteStatus,
  onLoadComments: CommentsOperation.getComments,
};
export {MoviePage};
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(MoviePage));
