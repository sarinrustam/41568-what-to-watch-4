import * as React from "react";
import {configure, mount} from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";

import GenresListItem from "./genres-list-item";

configure({
  adapter: new Adapter(),
});

const genres: [string] = [`Overview`];

describe(`GenresListItem button click test`, () => {
  it(`Should button will be press`, () => {
    const handleCurrentGenre = jest.fn();
    const genresListItem = mount(
        <GenresListItem
          genre={genres[0]}
          isActive={true}
          onSetCurrentGenre={handleCurrentGenre}
        />
    );

    const link = genresListItem.find(`a`);

    link.simulate(`click`);

    expect(handleCurrentGenre).toHaveBeenCalledTimes(1);
  });
});
