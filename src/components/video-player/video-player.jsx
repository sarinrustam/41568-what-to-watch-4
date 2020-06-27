import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";

class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this.videoRef = createRef();

    this.state = {
      isPlaying: props.isPlaying
    };
  }

  componentDidMount() {
    const {poster, src, isMuted} = this.props;
    const video = this.videoRef.current;

    if (isMuted) {
      video.muted = true;
    }

    video.src = src;
    video.poster = poster;
  }

  componentDidUpdate() {
    const {isPlaying} = this.props;
    const video = this.videoRef.current;

    if (isPlaying) {
      video.play();
    } else {
      video.pause();
    }
  }

  componentWillUnmount() {
    const video = this.videoRef.current;

    video.onplay = null;
    video.onpause = null;
    video.src = null;

    video.ontimeupdate = null;
    video.oncanplaythrough = null;
  }

  render() {
    return (
      <video
        ref={this.videoRef} width="280" height="175"
      />
    );
  }
}

VideoPlayer.propTypes = {
  poster: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  isMuted: PropTypes.bool.isRequired,
  isPlaying: PropTypes.bool.isRequired,
};

export default VideoPlayer;
