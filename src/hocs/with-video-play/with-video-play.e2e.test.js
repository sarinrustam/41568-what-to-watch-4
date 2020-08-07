import React from "react";
import PropTypes from "prop-types";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withVideoPlay from "./with-video-play.js";

configure({adapter: new Adapter()});

jest.useFakeTimers();

const MockComponent = (props) => {
  const {handlerMouseEnter} = props;

  return (
    <div>
      <button onMouseEnter={handlerMouseEnter} />
    </div>
  );
};

MockComponent.propTypes = {
  handlerMouseEnter: PropTypes.func.isRequired,
};

describe(`withVideoPlay tests`, () => {
  it(`Checks that HOC's state will change after mouseEnter`, () => {
    const MockComponentWrapped = withVideoPlay(MockComponent);
    const onaHandlerMouseEnter = jest.fn();

    const wrapper = mount(
        <MockComponentWrapped
          handlerMouseEnter={onaHandlerMouseEnter}
        />
    );

    const button = wrapper.find(`button`);
    button.simulate(`mouseEnter`);
    jest.runAllTimers();

    expect(wrapper.state().isPlaying).toEqual(true);
  });
});
