import * as React from "react";
import * as renderer from "react-test-renderer";
import {noop} from "../../utils/utils";
import MyListButton from "./my-list-button";

describe(`MLB test`, () => {
  it(`Should MLB render correctly`, () => {
    const tree = renderer.create(
        <MyListButton
          isFavorite={true}
          onToggleButton={noop}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
