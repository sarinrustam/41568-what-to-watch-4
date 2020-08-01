import React, {PureComponent} from "react";
import {Router, Route, Switch} from "react-router-dom";

import AddReview from "../add-review/add-review.jsx";
import withAddReview from "../../hocs/with-add-review/with-add-review.js";
import Main from "@components/main/main.jsx";
import MoviePage from "../movie-page/movie-page.jsx";
import VideoPlayerFull from "../video-player-full/video-player-full.jsx";
import withFullVideoPlayer from "../../hocs/with-full-video-player/with-full-video-player.js";
import SignIn from "../../components/sign-in/sign-in.jsx";

import history from "../../history.js";

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
        </Switch>
      </Router>
    );
  }
}

export default App;
