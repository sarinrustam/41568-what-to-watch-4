import React from "react";

import {PAGE_FILTERS} from "../../utils/utils.js";

const withMovieCardDescription = (Component) => {
  class WithMovieCardDescription extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeFilter: PAGE_FILTERS[0],
      };

      this.handlerSetActiveFilter = this.handlerSetActiveFilter.bind(this);
    }

    handlerSetActiveFilter(filter) {
      this.setState({
        activeFilter: filter,
      });
    }

    render() {
      return (
        <Component
          {...this.props}
          activeFilter={this.state.activeFilter}
          setActiveFilter={this.handlerSetActiveFilter}
        />
      );
    }
  }

  WithMovieCardDescription.propTypes = {};

  return WithMovieCardDescription;
};

export default withMovieCardDescription;
