import * as React from "react";
import {Subtract} from "utility-types";
import {Movie as MovieType} from "../../types/types";

interface Props {
  onChangeActiveItem: (item: MovieType | string) => void;
}

interface State {
  activeItem: MovieType | string;
}

const withActiveItem = (Component, defaultValue = null) => {
  type P = React.ComponentProps<typeof Component>;
  type T = Subtract<P, Props>;

  class WithActiveItem extends React.PureComponent<T, State> {
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

  return WithActiveItem;
};

export default withActiveItem;
