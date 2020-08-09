import React from "react";
import Adapter from "enzyme-adapter-react-16";
import Enzyme, {mount} from "enzyme";

import MyListButton from "./my-list-button.jsx";

Enzyme.configure({
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

