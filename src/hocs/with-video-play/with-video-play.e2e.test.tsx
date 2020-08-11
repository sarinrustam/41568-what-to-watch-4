import * as React from "react";
import {configure, mount} from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import withVideoPlay from "./with-video-play";

configure({
  adapter: new Adapter()
});

jest.useFakeTimers();

interface MockComponentProps {
  onMouseEnter: () => void;
}

const MockComponent = (props: MockComponentProps) => {
  const {onMouseEnter} = props;

  return (
    <div>
      <button onMouseEnter={onMouseEnter} />
    </div>
  );
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
