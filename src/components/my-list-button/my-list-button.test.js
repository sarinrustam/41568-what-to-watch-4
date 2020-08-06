import React from "react";
import renderer from "react-test-renderer";

import MyListButton from "./my-list-button.jsx";

describe(`MLB test`, () => {
  it(`Should MLB render correctly`, () => {
    const tree = renderer.create(
        <MyListButton
          isFavorite={true}
          onToggleButton={() => {}}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
