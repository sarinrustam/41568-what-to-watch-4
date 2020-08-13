import * as React from "react";
import {Router, Route, Switch} from "react-router-dom";
import {connect} from "react-redux";
import AddReview from "../add-review/add-review";
import withAddReview from "../../hocs/with-add-review/with-add-review";
import Main from "../main/main";
import MoviePage from "../movie-page/movie-page";
import MyList from "../my-list/my-list";
import VideoPlayerFull from "../video-player-full/video-player-full";
import withFullVideoPlayer from "../../hocs/with-full-video-player/with-full-video-player";
import SignIn from "../sign-in/sign-in";
import {getCheckAuthIsLoaded} from "../../reducer/user/selectors";
import {getIsMoviesLoaded, getIsPromoMovieLoaded} from "../../reducer/data/selectors";
import {AppRoute} from "../../utils/utils";
import {Operation as CommentOperation} from "../../reducer/comments/comments";
import {getMovies} from "../../reducer/data/selectors";
import {Movie as MovieType} from "../../types/types";

import history from "../../history";
import PrivateRoute from "../private-route/private-route";

const VideoPlayerFullWrapped = withFullVideoPlayer(VideoPlayerFull);
const AddReviewWrapped = withAddReview(AddReview);

interface Props {
  isLoaded: boolean;
  onSendComment: (obj: {movieId: string; rating: number; comment: string}) => void;
  movies: [MovieType];
}

const App = (props: Props): React.ReactElement => {
  const {onSendComment, movies} = props;

  if (!props.isLoaded) {
    return <div>...Loading. Wait a few seconds</div>;
  }

  return (
    <Router
      history={history}
    >
      <Switch>
        <Route exact path={AppRoute.ROOT} component={Main}/>
        <Route exact path={`${AppRoute.FILMS}/:id`} component={MoviePage}/>
        <Route exact path={`${AppRoute.PLAYER}/:id`}
          render={(localProps) => {
            const movieId = parseInt(localProps.match.params.id, 10);
            const movie = movies.find((movieItem) => movieItem.id === movieId);

            return (
              <VideoPlayerFullWrapped
                movie={movie}
              />
            );
          }}
        />
        <Route exact path={AppRoute.LOGIN} component={SignIn}/>
        <PrivateRoute
          exact
          path={`${AppRoute.FILMS}/:id${AppRoute.REVIEW}`}
          render={(localProps) => {
            return (
              <AddReviewWrapped
                movieId={localProps.computedMatch.params.id}
                onSendComment={onSendComment}
              />
            );
          }}
        />
        <PrivateRoute
          exact
          path={AppRoute.MY_LIST}
          render={() => {
            return (
              <MyList />
            );
          }}
        />
      </Switch>
    </Router>
  );
};

const mapStateToProps = (state) => {
  const movies = getMovies(state);

  return {
    isLoaded: getIsPromoMovieLoaded(state) && getIsMoviesLoaded(state) && getCheckAuthIsLoaded(state),
    movies
  };
};

const mapDispatchToProps = {
  onSendComment: CommentOperation.sendComment,
};

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
