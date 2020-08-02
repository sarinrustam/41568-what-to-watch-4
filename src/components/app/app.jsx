import React, {PureComponent} from "react";
import {Router, Route, Switch} from "react-router-dom";
import {connect} from "react-redux";
import AddReview from "../add-review/add-review.jsx";
import withAddReview from "../../hocs/with-add-review/with-add-review.js";
import Main from "@components/main/main.jsx";
import MoviePage from "../movie-page/movie-page.jsx";
import VideoPlayerFull from "../video-player-full/video-player-full.jsx";
import withFullVideoPlayer from "../../hocs/with-full-video-player/with-full-video-player.js";
import SignIn from "../../components/sign-in/sign-in.jsx";
import {getCheckAuthIsLoaded} from "../../reducer/user/selectors.js";
import {getIsMoviesLoaded, getIsPromoMovieLoaded} from "../../reducer/data/selectors.js";
import PropTypes from "prop-types";
import {AppRoute} from "../../utils/utils.js";

import history from "../../history.js";
import PrivateRoute from "../private-route/private-route.jsx";

const VideoPlayerFullWrapped = withFullVideoPlayer(VideoPlayerFull);
const AddReviewWrapped = withAddReview(AddReview);

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeMovie: null
    };

    this.handlerMovieClick = this.handlerMovieClick.bind(this);
  }

  handlerMovieClick(movie) {
    this.setState({
      activeMovie: movie
    });
  }

  renderApp() {
    const {activeMovie} = this.state;

    if (activeMovie) {
      return <MoviePage
        movie={activeMovie}
        onMovieClick={this.handlerMovieClick}
      />;
    }

    return (
      <Main
        onMovieClick={this.handlerMovieClick}
      />
    );
  }

  render() {
    if (!this.props.isLoaded) {
      return <div>...Loading. Wait a few seconds</div>;
    }

    return (
      <Router
        history={history}
      >
        <Switch>
          <Route exact path={AppRoute.ROOT}>
            {this.renderApp()}
          </Route>
          <Route exact path={`${AppRoute.FILMS}/:id`}>
            <MoviePage
              onMovieClick={this.handlerMovieClick}
            />
          </Route>
          <Route exact path={`${AppRoute.PLAYER}/:id`} component={VideoPlayerFullWrapped}/>
          <Route exact path={AppRoute.LOGIN} component={SignIn}/>
          <PrivateRoute exact path={`${AppRoute.FILMS}/:id/review`} component={AddReviewWrapped}/>
        </Switch>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoaded: getIsPromoMovieLoaded(state) && getIsMoviesLoaded(state) && getCheckAuthIsLoaded(state)
  };
};

App.propTypes = {
  isLoaded: PropTypes.bool.isRequired,
};

export {App};
export default connect(mapStateToProps)(App);
