import React from "react";
import PropTypes from "prop-types";
import UserBlock from "../user-block/user-block.jsx";
import SmallMovieCardList from "../small-movie-card-list/small-movie-card-list.jsx";
import {connect} from "react-redux";
import {Operation as DataOperation} from "../../reducer/data/data.js";
import {getFavoriteMovies, getFavoriteLoadedStatus} from "../../reducer/data/selectors.js";
import {AppRoute} from "../../utils/utils.js";

class MyList extends React.PureComponent {
  constructor(props) {
    super(props);

    this.handleActiveMovie = this.handleActiveMovie.bind(this);
  }

  componentDidMount() {
    const {onLoadFavoriteMovies} = this.props;

    onLoadFavoriteMovies();
  }

  handleActiveMovie(movie) {
    this.props.history.push(`${AppRoute.FILMS}/${movie.id}`);
  }

  render() {
    const {favoriteMovies} = this.props;

    if (!this.props.favoriteLoadedStatus) {
      return <div>...Loading. Wait a few seconds</div>;
    }

    return (
      <div className="user-page">
        <header className="page-header user-page__head">
          <div className="logo">
            <a href="main.html" className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <h1 className="page-title user-page__title">My list</h1>
          <UserBlock/>
        </header>

        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <SmallMovieCardList
            movies={favoriteMovies}
            setActiveItem={this.handleActiveMovie}
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
    );
  }
}

MyList.propTypes = {
  onLoadFavoriteMovies: PropTypes.func.isRequired,
  favoriteMovies: PropTypes.array.isRequired,
  favoriteLoadedStatus: PropTypes.bool.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

const mapStateToProps = (state) => {
  const favoriteMovies = getFavoriteMovies(state);
  const favoriteLoadedStatus = getFavoriteLoadedStatus(state);

  return {
    favoriteMovies,
    favoriteLoadedStatus
  };
};

const mapDispatchToProps = {
  onLoadFavoriteMovies: DataOperation.loadFavoriteMovies,
};

export {MyList};
export default connect(mapStateToProps, mapDispatchToProps)(MyList);
