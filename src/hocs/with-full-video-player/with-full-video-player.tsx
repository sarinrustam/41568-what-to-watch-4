import * as React from "react";
import {createRef} from "react";
import {connect} from "react-redux";
import {Buttons} from "../../utils/utils";
import {getMovies} from "../../reducer/data/selectors";
import {Movie as MovieType} from "../../types/types";
import history from "../../history";

interface Props {
  match: {
    params: {
      id: string
    }
  }
  movie: MovieType,
};

interface State {
  isPlaying: boolean,
  progress: number,
};

const withFullVideoPlayer = (Component) => {
  class WithFullVideoPlayer extends React.PureComponent<Props, State> {
    private videoRef: React.RefObject<HTMLVideoElement>;

    constructor(props) {
      super(props);

      this.videoRef = createRef();

      this.state = {
        isPlaying: false,
        progress: 0,
      };

      this.handleTogglePlay = this.handleTogglePlay.bind(this);
      this.handleEnterFullScreen = this.handleEnterFullScreen.bind(this);
      this.handleExitVideo = this.handleExitVideo.bind(this);
    }

    componentDidMount() {
      const {videoLink, poster} = this.props.movie;
      const video = this.videoRef.current;

      video.src = videoLink;
      video.poster = poster;

      video.ontimeupdate = () => {
        this.setState({
          progress: Math.trunc(video.currentTime)
        });
      };

      document.addEventListener(`keydown`, this.handleExitVideo);
    }

    componentDidUpdate() {
      const {isPlaying} = this.state;
      const video = this.videoRef.current;

      if (isPlaying) {
        video.play();
      } else {
        video.pause();
      }
    }

    componentWillUnmount() {
      const video = this.videoRef.current;

      video.src = null;
      video.poster = null;
      video.ontimeupdate = null;
      video.onplay = null;
      video.onpause = null;
      document.removeEventListener(`keydown`, this.handleExitVideo);
    }

    handleTogglePlay() {
      this.setState({
        isPlaying: !this.state.isPlaying
      });
    }

    handleEnterFullScreen() {
      const video = this.videoRef.current;
      video.requestFullscreen();
    }

    handleExitVideo(event) {
      if (event.type === `keydown` && event.key === Buttons.ESC || event.type === `click`) {
        history.goBack();
      }
    }

    render() {
      const video = this.videoRef.current;
      const duration = video ? video.duration : null;
      const timeLeft = duration ? duration - this.state.progress : 0;
      const percentProgress = timeLeft ? Math.round(this.state.progress / duration * 100) : 0;

      return (
        <Component
          movie={this.props.movie}
          timeLeft={timeLeft}
          percentProgress={percentProgress}
          onTogglePlay={this.handleTogglePlay}
          onExitVideo={this.handleExitVideo}
          onFullScreen={this.handleEnterFullScreen}
        >
          <video
            ref={this.videoRef}
            className="player__video"
            autoPlay={true}
          />
        </Component>
      );
    }
  }

  const mapStateToProps = (state, props) => {
    const movies = getMovies(state);
    const movie = movies.find((movieItem) => movieItem.id === props.match.params.id);

    return {
      movie
    };
  };

  return connect(mapStateToProps)(WithFullVideoPlayer);
};


export default withFullVideoPlayer;

