import * as React from "react";
import {configure, mount} from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import ShowMoreButton from "./show-more-button";

configure({
  adapter: new Adapter(),
});

describe(`ShowMoreButton tests`, () => {
  it(`ShowMoreButton will be pressed ok`, () => {
    const handlerButtonClick = jest.fn();
    const button = mount(
        <ShowMoreButton
          onButtonClick={handlerButtonClick}
        />
    );

    const showMoreButton = button.find(`button`);

    showMoreButton.simulate(`click`);

    expect(handlerButtonClick).toHaveBeenCalledTimes(1);
  });
});

