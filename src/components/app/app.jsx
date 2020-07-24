import React, {PureComponent} from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";

import Main from "@components/main/main.jsx";
import MoviePage from "../movie-page/movie-page.jsx";
import VideoPlayerFull from "../video-player-full/video-player-full.jsx";
import withFullVideoPlayer from "../../hocs/with-full-video-player/with-full-video-player.js";

const VideoPlayerFullWrapped = withFullVideoPlayer(VideoPlayerFull);

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
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this.renderApp()}
          </Route>
          <Route exact path="/dev-movie">
            <MoviePage
              onMovieClick={this.handlerMovieClick}
            />
          </Route>
          <Route exact path="/player/:id" component={VideoPlayerFullWrapped} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
