import * as React from "react";
import {configure, mount} from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";

import MyListButton from "./my-list-button";

configure({
  adapter: new Adapter(),
});

describe(`MyListButton tests`, () => {
  it(`MyListButton will be pressed ok`, () => {
    const handlerButtonClick = jest.fn();
    const button = mount(
        <MyListButton
          isFavorite={true}
          onToggleButton={handlerButtonClick}
        />
    );

    const myButton = button.find(`button`);

    myButton.simulate(`click`);

    expect(handlerButtonClick).toHaveBeenCalledTimes(1);
  });
});

