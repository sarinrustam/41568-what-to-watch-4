import * as React from "react";
import Adapter from "enzyme-adapter-react-16";
import Enzyme, {mount} from "enzyme";

import GenresListItem from "./genres-list-item";


Enzyme.configure({
  adapter: new Adapter(),
});

const genres = [`Overview`, `Details`, `Reviews`];

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
