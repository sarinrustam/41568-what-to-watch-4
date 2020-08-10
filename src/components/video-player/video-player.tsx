import * as React from "react";
import {PureComponent, createRef} from "react";

interface Props {
  poster: string;
  src: string;
  isMuted: boolean;
  isPlaying: boolean;
}

class VideoPlayer extends PureComponent<Props, {}> {
  private videoRef: React.RefObject<HTMLVideoElement>;

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

export default VideoPlayer;
