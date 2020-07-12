import React from "react";
import renderer from "react-test-renderer";

import ShowMoreButton from "./show-more-button.jsx";

describe(`Render ShowMoreButton`, () => {
  it(`Should ShowMoreButton render correctly`, () => {
    const handlerButtonClick = jest.fn();
    const tree = renderer.create(
        <ShowMoreButton
          onButtonClick={handlerButtonClick}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
