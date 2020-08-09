import React from "react";
import PropTypes from "prop-types";

const withActiveItem = (Component, defaultValue = null) => {
  class WithActiveItem extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeItem: defaultValue,
      };

      this.setActiveItem = this.setActiveItem.bind(this);
    }

    setActiveItem(item) {
      this.setState({
        activeItem: item,
      });

      if (this.props.onChangeActiveItem) {
        this.props.onChangeActiveItem(item);
      }
    }

    render() {
      return (
        <Component
          {...this.props}
          activeItem={this.state.activeItem}
          onSetActiveItem={this.setActiveItem}
        />
      );
    }
  }

  WithActiveItem.propTypes = {
    onChangeActiveItem: PropTypes.func,
  };

  return WithActiveItem;
};

export default withActiveItem;
