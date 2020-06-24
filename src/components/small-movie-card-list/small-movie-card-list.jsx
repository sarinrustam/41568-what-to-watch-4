import React, {PureComponent} from "react";
import PropTypes from "prop-types";

import SmallMovieCard from "../small-movie-card/small-movie-card.jsx";

class SmallMovieCardList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeCard: this.props.movies[0]
    };

    this.handlerCardMouseOver = this.handlerCardMouseOver.bind(this);
    this.handlerMovieClick = this.handlerMovieClick.bind(this);
  }

  handlerCardMouseOver(id) {
    this.setState({
      activeCard: id
    });
  }

  handlerMovieClick(movie) {
    this.props.onMovieClick(movie);
  }

  render() {
    const {movies} = this.props;

    return (
      <div
        className="catalog__movies-list">
        {movies.map((movie) => (
          <SmallMovieCard
            key={movie.id}
            movie={movie}
            onMouseOver={this.handlerCardMouseOver}
            onMovieClick={this.handlerMovieClick}
          />
        ))}
      </div>
    );
  }
}

SmallMovieCardList.propTypes = {
  movies: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
      })
  ).isRequired,
  onMovieClick: PropTypes.func.isRequired
};

export default SmallMovieCardList;
