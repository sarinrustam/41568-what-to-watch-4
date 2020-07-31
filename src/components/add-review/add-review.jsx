import React from "react";
import PropTypes from "prop-types";
import UserBlock from "../user-block/user-block.jsx";

class AddReview extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  renderErrorMessage() {
    const {errorText} = this.props;

    return (
      <p className="add-review__text-error">{errorText}</p>
    );
  }

  render() {
    const {onInputComment, onChangeRating, onSendComment, isButtonDisabled, readOnly, errorText} = this.props;

    return (
      <section className="movie-card movie-card--full">
        <div className="movie-card__header">
          <div className="movie-card__bg">
            <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header">
            <div className="logo">
              <a href="main.html" className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </a>
            </div>

            <nav className="breadcrumbs">
              <ul className="breadcrumbs__list">
                <li className="breadcrumbs__item">
                  <a href="movie-page.html" className="breadcrumbs__link">The Grand Budapest Hotel</a>
                </li>
                <li className="breadcrumbs__item">
                  <a className="breadcrumbs__link">Add review</a>
                </li>
              </ul>
            </nav>

            <UserBlock/>
          </header>

          <div className="movie-card__poster movie-card__poster--small">
            <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" />
          </div>
        </div>

        <div className="add-review">
          <form
            onSubmit={onSendComment}
            action="#"
            className="add-review__form"
          >
            {errorText ? this.renderErrorMessage() : ``}
            <div className="rating">
              <div
                className="rating__stars"
                onChange={onChangeRating}
              >
                <input
                  className="rating__input"
                  id="star-1" type="radio"
                  name="rating"
                  value="1"
                  disabled={readOnly}
                />
                <label className="rating__label" htmlFor="star-1">Rating 1</label>

                <input
                  className="rating__input"
                  id="star-2" type="radio"
                  name="rating"
                  value="2"
                  disabled={readOnly}
                />
                <label className="rating__label" htmlFor="star-2">Rating 2</label>

                <input
                  className="rating__input"
                  id="star-3" type="radio"
                  name="rating"
                  value="3"
                  disabled={readOnly}
                />
                <label className="rating__label" htmlFor="star-3">Rating 3</label>

                <input
                  className="rating__input"
                  id="star-4" type="radio"
                  name="rating"
                  value="4"
                  disabled={readOnly}
                />
                <label className="rating__label" htmlFor="star-4">Rating 4</label>

                <input
                  className="rating__input"
                  id="star-5" type="radio"
                  name="rating"
                  value="5"
                  disabled={readOnly}
                />
                <label className="rating__label" htmlFor="star-5">Rating 5</label>
              </div>
            </div>

            <div className="add-review__text">
              <textarea
                onInput={onInputComment}
                className="add-review__textarea"
                name="review-text"
                id="review-text"
                placeholder="Review text"
                readOnly={readOnly}
              >

              </textarea>
              <div className="add-review__submit">
                <button
                  disabled={isButtonDisabled}
                  className="add-review__btn"
                  type="submit"
                >
                  Post
                </button>
              </div>
            </div>
          </form>
        </div>

      </section>
    );
  }
}

AddReview.propTypes = {
  onSendComment: PropTypes.func.isRequired,
  onInputComment: PropTypes.func.isRequired,
  onChangeRating: PropTypes.func.isRequired,
  rating: PropTypes.number.isRequired,
  comment: PropTypes.string.isRequired,
  isButtonDisabled: PropTypes.bool.isRequired,
  readOnly: PropTypes.bool.isRequired,
  errorText: PropTypes.string.isRequired,
};

export default AddReview;

