import React from "react";
import PropTypes from "prop-types";

const VideoPlayerFull = (props) => {
  const {movie, onExitVideo, onTogglePlay, onFullScreen, children, percentProgress, timeLeft} = props;

  return (
    <div className="player">
      {children}
      <button
        type="button"
        className="player__exit"
        onClick={onExitVideo}
      >
          Exit
      </button>
      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={percentProgress} max="100"></progress>
            <div
              className="player__toggler"
              style={{left: `${percentProgress}%`}}
            >
              Toggler
            </div>
          </div>
          <div className="player__time-value">{timeLeft}</div>
        </div>

        <div className="player__controls-row">
          <button
            type="button"
            className="player__play"
            onClick={onTogglePlay}
          >
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref="#play-s"/>
            </svg>
            <span>Play</span>
          </button>
          <div className="player__name">
            {movie.title}
          </div>

          <button
            type="button"
            className="player__full-screen"
            onClick={onFullScreen}
          >
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"/>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
};

VideoPlayerFull.propTypes = {
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
      actors: PropTypes.array.isRequired
    }).isRequired,
  }).isRequired,
  onExitVideo: PropTypes.func.isRequired,
  onTogglePlay: PropTypes.func.isRequired,
  onFullScreen: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  percentProgress: PropTypes.number.isRequired,
  timeLeft: PropTypes.number.isRequired,
};

export default VideoPlayerFull;
