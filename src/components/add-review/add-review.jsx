import React, {createRef} from "react";
import PropTypes from "prop-types";
import UserBlock from "../user-block/user-block.jsx";
import {connect} from "react-redux";
import {Operation as CommentOperation} from "../../reducer/comments/comments.js";
import {CommentLength} from "../../utils/utils.js";
import {AuthorizationStatus} from "../../reducer/user/user.js";
import {getAuthStatus} from "../../reducer/user/selectors.js";
import {Redirect} from "react-router-dom";

class AddReview extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      rating: null,
      comment: ``,
      isButtonDisabled: true,
      readOnly: false,
      errorText: ``,
    };

    this.buttonRef = createRef();

    this.handleInputComment = this.handleInputComment.bind(this);
    this.handleChangeRating = this.handleChangeRating.bind(this);
    this.handleSendComment = this.handleSendComment.bind(this);
  }

  handleInputComment(event) {
    this.setState({
      comment: event.target.value,
    });

    this.checkDisableButton();
  }

  handleChangeRating(event) {
    this.setState({
      rating: +event.target.value,
    });
    this.checkDisableButton();
  }

  handleSendComment(event) {
    event.preventDefault();

    this.setState({
      readOnly: true,
      isButtonDisabled: true,
      errorText: ``,
    });

    const onSuccess = () => {
      this.setState({
        readOnly: false,
        isButtonDisabled: false,
      });
      this.props.history.push(`/dev-movie/${this.props.match.params.id}`);
    };

    const onError = (errorText) => {
      this.setState({
        readOnly: false,
        isButtonDisabled: false,
        errorText,
      });
    };

    this.props.onSendComment({
      movieId: this.props.match.params.id,
      comment: this.state.comment,
      rating: this.state.rating,
    }, onSuccess, onError);
  }

  checkDisableButton() {
    const commentLength = this.state.comment.length;
    if (commentLength < CommentLength.MIN && commentLength >= CommentLength.MAX && !this.state.rating) {
      this.setState({
        isButtonDisabled: true,
      });
    } else {
      this.setState({
        isButtonDisabled: false,
      });
    }
  }

  renderErrorMessage() {
    const {errorText} = this.state;
    return (
      <p className="add-review__text-error">{errorText}</p>
    );
  }

  render() {
    const {statusAuth} = this.props;

    if (statusAuth === AuthorizationStatus.NO_AUTH) {
      return <Redirect to='/login'/>;
    }

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
            onSubmit={this.handleSendComment}
            action="#"
            className="add-review__form"
          >
            {this.state.errorText ? this.renderErrorMessage() : ``}
            <div className="rating">
              <div
                className="rating__stars"
                onChange={this.handleChangeRating}
              >
                <input
                  className="rating__input"
                  id="star-1" type="radio"
                  name="rating"
                  value="1"
                  disabled={this.state.readOnly}
                />
                <label className="rating__label" htmlFor="star-1">Rating 1</label>

                <input
                  className="rating__input"
                  id="star-2" type="radio"
                  name="rating"
                  value="2"
                  disabled={this.state.readOnly}
                />
                <label className="rating__label" htmlFor="star-2">Rating 2</label>

                <input
                  className="rating__input"
                  id="star-3" type="radio"
                  name="rating"
                  value="3"
                  disabled={this.state.readOnly}
                />
                <label className="rating__label" htmlFor="star-3">Rating 3</label>

                <input
                  className="rating__input"
                  id="star-4" type="radio"
                  name="rating"
                  value="4"
                  disabled={this.state.readOnly}
                />
                <label className="rating__label" htmlFor="star-4">Rating 4</label>

                <input
                  className="rating__input"
                  id="star-5" type="radio"
                  name="rating"
                  value="5"
                  disabled={this.state.readOnly}
                />
                <label className="rating__label" htmlFor="star-5">Rating 5</label>
              </div>
            </div>

            <div className="add-review__text">
              <textarea
                onInput={this.handleInputComment}
                className="add-review__textarea"
                name="review-text"
                id="review-text"
                placeholder="Review text"
                readOnly={this.state.readOnly}
              >

              </textarea>
              <div className="add-review__submit">
                <button
                  disabled={this.state.isButtonDisabled}
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
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired
  }).isRequired,
  onSendComment: PropTypes.func.isRequired,
  statusAuth: PropTypes.string.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

const mapStateToProps = (state) => {
  const statusAuth = getAuthStatus(state);

  return {
    statusAuth,
  };
};

const mapDispatchToProps = {
  onSendComment: CommentOperation.sendComment,
};

export {AddReview};
export default connect(mapStateToProps, mapDispatchToProps)(AddReview);
