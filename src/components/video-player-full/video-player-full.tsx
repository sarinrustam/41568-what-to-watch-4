import * as React from "react";
import {Movie as MovieType} from "../../types/types";

interface Props {
  movie: MovieType,
  onExitVideo: (event: React.FormEvent<HTMLButtonElement>) => void,
  onTogglePlay: () => {},
  onFullScreen: () => {},
  children: React.ReactNode,
  percentProgress: number,
  timeLeft: number,
};

const VideoPlayerFull = (props: Props): React.ReactElement => {
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

export default VideoPlayerFull;
