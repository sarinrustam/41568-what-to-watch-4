import React from "react";
import PropTypes from "prop-types";

const withActiveItem = (Component) => {
  class WithActiveItem extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeItem: null,
      };

      this.setActiveItem = this.setActiveItem.bind(this);
    }

    setActiveItem(item) {
      this.setState({
        activeItem: item,
      });

      this.props.changeActiveItem(item);
    }

    render() {
      return (
        <Component
          {...this.props}
          activeItem={this.state.activeItem}
          setActiveItem={this.setActiveItem}
        />
      );
    }
  }

  WithActiveItem.propTypes = {
    changeActiveItem: PropTypes.func.isRequired,
  };

  return WithActiveItem;
};

export default withActiveItem;