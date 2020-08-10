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

import history from "../../history";
import PrivateRoute from "../private-route/private-route";

const VideoPlayerFullWrapped = withFullVideoPlayer(VideoPlayerFull);
const AddReviewWrapped = withAddReview(AddReview);

interface Props {
  isLoaded: boolean;
}

const App = (props: Props): React.ReactElement => {
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
        <Route exact path={`${AppRoute.PLAYER}/:id`} component={VideoPlayerFullWrapped}/>
        <Route exact path={AppRoute.LOGIN} component={SignIn}/>
        <PrivateRoute exact path={`${AppRoute.FILMS}/:id${AppRoute.REVIEW}`} component={AddReviewWrapped}/>
        <PrivateRoute exact path={AppRoute.MY_LIST} component={MyList}/>
      </Switch>
    </Router>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoaded: getIsPromoMovieLoaded(state) && getIsMoviesLoaded(state) && getCheckAuthIsLoaded(state)
  };
};

export {App};
export default connect(mapStateToProps)(App);
