import React from "react";
import PropTypes from "prop-types";

const SmallMovieCard = (props) => {
  const {movie, onMouseOver, onMovieClick} = props;

  const onArticleMouseOver = () => {
    onMouseOver(movie.id);
  };

  const handlerMovieClick = (event) => {
    event.preventDefault();
    onMovieClick(movie);
  };

  return (
    <article className="small-movie-card catalog__movies-card"
      onMouseOver={onArticleMouseOver}>
      <div
        className="small-movie-card__image"
        onClick={handlerMovieClick}
      >
        <img
          src={movie.img}
          alt={movie.title}
          width="280"
          height="175"
        />
      </div>
      <h3 className="small-movie-card__title">
        <a
          className="small-movie-card__link"
          href="movie-page.html"
          onClick={handlerMovieClick}
        >
          {movie.title}
        </a>
      </h3>
    </article>
  );
};

SmallMovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
  }).isRequired,
  onMouseOver: PropTypes.func.isRequired,
  onMovieClick: PropTypes.func.isRequired,
};

export default SmallMovieCard;
