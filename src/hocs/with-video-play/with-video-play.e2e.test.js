import * as React from "react";
import PropTypes from "prop-types";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withVideoPlay from "./with-video-play";

configure({adapter: new Adapter()});

jest.useFakeTimers();

const MockComponent = (props) => {
  const {onMouseEnter} = props;

  return (
    <div>
      <button onMouseEnter={onMouseEnter} />
    </div>
  );
};

MockComponent.propTypes = {
  onMouseEnter: PropTypes.func.isRequired,
};

describe(`withVideoPlay tests`, () => {
  it(`Checks that HOC's state will change after mouseEnter`, () => {
    const MockComponentWrapped = withVideoPlay(MockComponent);
    const onaHandlerMouseEnter = jest.fn();

    const wrapper = mount(
        <MockComponentWrapped
          onMouseEnter={onaHandlerMouseEnter}
        />
    );

    const button = wrapper.find(`button`);
    button.simulate(`mouseEnter`);
    jest.runAllTimers();

    expect(wrapper.state().isPlaying).toEqual(true);
  });
});
