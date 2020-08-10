import * as React from "react";
import {PAGE_FILTERS} from "../../utils/utils";

import MoviePageReviews from "../movie-page-review/movie-page-reviews";
import MoviePageOverview from "../movie-page-overview/movie-page-overview";
import MoviePageDetails from "../movie-page-details/movie-page-details";
import MovieCardNavigationItem from "../movie-card-navigation-item/movie-card-navigation-item";
import {Movie as MovieType, Comment as CommentType} from "../../types/types";

interface Props {
  movie: MovieType,
  activeItem: string,
  onSetActiveItem: (filter: string) => void,
  comments: [CommentType],
};

class MovieCardDescription extends React.PureComponent<Props, {}> {
  constructor(props) {
    super(props);
  }

  renderActiveMovieSection() {
    switch (this.props.activeItem) {
      case PAGE_FILTERS[1]:
        return <MoviePageDetails
          movie={this.props.movie}
        />;
      case PAGE_FILTERS[2]:
        return <MoviePageReviews
          comments={this.props.comments}
        />;
      default:
        return <MoviePageOverview
          movie={this.props.movie}
        />;
    }
  }

  render() {
    const {activeItem, onSetActiveItem} = this.props;

    return (
      <div className="movie-card__desc">
        <nav className="movie-nav movie-card__nav">
          <ul className="movie-nav__list">
            {PAGE_FILTERS.map((filter) => (
              <MovieCardNavigationItem
                key={filter}
                filter={filter}
                isActive={activeItem === filter}
                onSetActiveFilter={onSetActiveItem}
              />
            ))}
          </ul>
        </nav>
        {this.renderActiveMovieSection()}
      </div>
    );
  }
}

export default MovieCardDescription;
