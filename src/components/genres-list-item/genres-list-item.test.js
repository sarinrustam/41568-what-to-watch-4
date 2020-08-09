import React from "react";
import renderer from "react-test-renderer";
import {PAGE_FILTERS} from "../../utils/utils.js";

import GenresListItem from "./genres-list-item.jsx";

describe(`Render GLI`, () => {
  it(`should GenresListItem render correctly`, () => {
    const handleSetCurrentGenre = jest.fn();

    const tree = renderer.create(
        <GenresListItem
          genre={PAGE_FILTERS[0]}
          isActive={true}
          onSetCurrentGenre={handleSetCurrentGenre}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
