import React from "react";

const withSmallMovieCard = (Component) => {
  class WithSmallMovieCard extends React.PureComponent {
    constructor(props) {
      super(props);

      this.timerId = null;

      this.state = {
        isPlaying: false,
      };

      this.handlerMouseEnter = this.handlerMouseEnter.bind(this);
      this.handlerMouseLeave = this.handlerMouseLeave.bind(this);
    }

    componentWillUnmount() {
      if (this.timerId) {
        clearTimeout(this.timerId);
      }
    }

    handlerMouseEnter() {
      this.timerId = setTimeout(() =>
        this.setState({
          isPlaying: true
        }), 1000);
    }

    handlerMouseLeave() {
      clearTimeout(this.timerId);

      this.setState({
        isPlaying: false
      });
    }

    render() {
      return (
        <Component
          {...this.props}
          isPlaying={this.state.isPlaying}
          handlerMouseEnter={this.handlerMouseEnter}
          handlerMouseLeave={this.handlerMouseLeave}
        />
      );
    }
  }

  WithSmallMovieCard.propTypes = {};

  return WithSmallMovieCard;
};

export default withSmallMovieCard;
