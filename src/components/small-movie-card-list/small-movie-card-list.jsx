import React, {PureComponent} from "react";
import PropTypes from "prop-types";

import SmallMovieCard from "../small-movie-card/small-movie-card.jsx";

class SmallMovieCardList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeCard: null
    };

    this.handlerCardMouseOver = this.handlerCardMouseOver.bind(this);
  }

  handlerCardMouseOver(id) {
    this.setState({
      activeCard: id
    });
  }

  render() {
    const {movies, onMovieTitleClick} = this.props;

    return (
      <div
        className="catalog__movies-list">
        {movies.map((movie) => (
          <SmallMovieCard
            key={movie.id}
            movie={movie}
            onMouseOver={this.handlerCardMouseOver}
            onMovieTitleClick={onMovieTitleClick}
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
  onMovieTitleClick: PropTypes.func.isRequired
};

export default SmallMovieCardList;
