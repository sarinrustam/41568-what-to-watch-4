import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {Router, Route, Switch} from "react-router-dom";
import {connect} from "react-redux";

import AddReview from "../add-review/add-review.jsx";
import withAddReview from "../../hocs/with-add-review/with-add-review.js";
import Main from "@components/main/main.jsx";
import MoviePage from "../movie-page/movie-page.jsx";
import VideoPlayerFull from "../video-player-full/video-player-full.jsx";
import withFullVideoPlayer from "../../hocs/with-full-video-player/with-full-video-player.js";
import SignIn from "../../components/sign-in/sign-in.jsx";
import {Operation as DataOperation} from "../../reducer/data/data.js";
import {Operation as UserOperation} from "../../reducer/user/user.js";

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

  componentDidMount() {
    this.props.init();
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
    return (
      <Router
        history={history}
      >
        <Switch>
          <Route exact path="/">
            {this.renderApp()}
          </Route>
          <Route exact path="/2">
            <MoviePage
              onMovieClick={this.handlerMovieClick}
            />
          </Route>
          <Route exact path="/player/:id" component={VideoPlayerFullWrapped}/>
          <Route exact path="/login" component={SignIn}/>
          <Route exact path="/" component={AddReviewWrapped}/>
          <PrivateRoute
          >

          </PrivateRoute>
        </Switch>
      </Router>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  init: () => {
    dispatch(DataOperation.loadPromo());
    dispatch(DataOperation.loadMovies());
    dispatch(UserOperation.checkAuth());
  }
});

App.propTypes = {
  init: PropTypes.func.isRequired,
};

export {App};
export default connect(null, mapDispatchToProps)(App);
