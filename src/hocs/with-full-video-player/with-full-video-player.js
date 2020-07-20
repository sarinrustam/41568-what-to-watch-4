import React, {createRef} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Buttons} from "../../utils/utils.js";


const withFullVideoPlayer = (Component) => {
  class WithFullVideoPlayer extends React.PureComponent {
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
          progress: video.currentTime
        });
      };

      document.addEventListener(`keydown`, this.handleExitVideo);
    }

    componentDidUpdate() {
      const video = this.videoRef.current;

      if (this.state.isPlaying) {
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
        this.props.history.goBack();
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
            crossOrigin="anonymous"
          />
        </Component>
      );
    }
  }

  WithFullVideoPlayer.propTypes = {
    history: PropTypes.shape({
      goBack: PropTypes.func.isRequired,
    }).isRequired,
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string.isRequired,
      }).isRequired
    }).isRequired,
    movie: PropTypes.object.isRequired,
  };

  const mapStateToProps = (state, props) => {
    return {
      movie: state.movies.find((item) => item.id === Number(props.match.params.id))
    };
  };

  return connect(mapStateToProps)(WithFullVideoPlayer);
};


export default withFullVideoPlayer;

