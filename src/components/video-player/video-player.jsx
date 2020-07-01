import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";

class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this.videoRef = createRef();
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
      video.load();
    }
  }

  componentWillUnmount() {
    const video = this.videoRef.current;

    video.src = null;
    video.poster = null;
  }

  render() {
    return (
      <video
        ref={this.videoRef}
        width="280"
        height="175"
        crossOrigin="anonymous"
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
