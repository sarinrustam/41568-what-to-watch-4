import React from "react";
import PropTypes from "prop-types";

const MoviePageReviews = (props) => {
  const {comments} = props;

  return (
    <>
      <div className="movie-card__reviews movie-card__row">
        <div className="movie-card__reviews-col">
          {comments.map((comment) => {
            return (
              <div
                key={comment.id}
                className="review"
              >
                <blockquote className="review__quote">
                  <p className="review__text">{comment.comment}</p>

                  <footer className="review__details">
                    <cite className="review__author">{comment.user.name}</cite>
                    <time className="review__date" dateTime={comment.date}>{comment.date}</time>
                  </footer>
                </blockquote>

                <div className="review__rating">{comment.rating}</div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

MoviePageReviews.propTypes = {
  comments: PropTypes.arrayOf({
    id: PropTypes.number.isRequired,
    comment: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    user: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired
  }).isRequired,
};

export default MoviePageReviews;
