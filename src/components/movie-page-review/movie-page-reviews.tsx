import * as React from "react";
import {formatDateForReviews} from "../../utils/utils";
import {Comment as CommentType} from "../../types/types";

interface Props {
  comments: [CommentType],
};

const MoviePageReviews = (props: Props): React.ReactElement => {
  const {comments} = props;

  return (
    <>
      <div className="movie-card__reviews movie-card__row">
        <div className="movie-card__reviews-col">
          {comments.map((comment) => {
            const formatDate = formatDateForReviews(comment.date);
            return (
              <div
                key={comment.id}
                className="review"
              >
                <blockquote className="review__quote">
                  <p className="review__text">{comment.comment}</p>

                  <footer className="review__details">
                    <cite className="review__author">{comment.user.name}</cite>
                    <time className="review__date" dateTime={comment.date}>{formatDate}</time>
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

export default MoviePageReviews;
