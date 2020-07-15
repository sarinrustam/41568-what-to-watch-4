import React, {createRef} from "react";
import PropTypes from "prop-types";


const withFullVideoPlayer = (Component) => {
  class WithFullVideoPlayer extends React.PureComponent {
    constructor(props) {
      super(props);

      this.videoRef = createRef();

      this.state = {
        isPlaying: false
      };

      this.handleTogglePlay = this.handleTogglePlay.bind(this);
      this.handleEnterFullScreen = this.handleEnterFullScreen.bind(this);
    }

    componentDidMount() {
      const {videoLink, poster} = this.props.movie;
      const video = this.videoRef.current;


      video.src = videoLink;
      video.poster = poster;
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

    render() {
      return (
        <Component
          {...this.props}
          onTogglePlay={this.handleTogglePlay}
          onExitVideo={() => {}}
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
    movie: PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      genre: PropTypes.string.isRequired,
      coverBackground: PropTypes.string.isRequired,
      release: PropTypes.number.isRequired,
      poster: PropTypes.string.isRequired,
      videoLink: PropTypes.string.isRequired,
      rating: PropTypes.shape({
        score: PropTypes.number.isRequired,
        scoreDesc: PropTypes.string.isRequired,
        amount: PropTypes.number.isRequired,
      }).isRequired,
      crew: PropTypes.shape({
        director: PropTypes.string.isRequired,
        actors: PropTypes.string.isRequired
      }).isRequired,
    }).isRequired,
  };

  return WithFullVideoPlayer;
};

export default withFullVideoPlayer;
