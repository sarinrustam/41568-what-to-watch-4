import React from "react";
import Adapter from "enzyme-adapter-react-16";
import Enzyme, {mount} from "enzyme";

import GenresList from "./genres-list.jsx";


Enzyme.configure({
  adapter: new Adapter(),
});

const genres = [`Overview`, `Details`, `Reviews`];

describe(`GenresList button click test`, () => {
  it(`Should button will be press`, () => {
    const handleCurrentGenre = jest.fn();
    const currentGenre = `Details`;
    const genresList = mount(
        <GenresList
          genresList={genres}
          currentGenre={currentGenre}
          onSetCurrentGenre={handleCurrentGenre}
        />
    );

    const links = genresList.find(`a`);
    console.log(genresList)
    console.log(links);

    //links[0].props().simulate(`click`);
    links.forEach((titleLink) => {
      titleLink.props().simulate(`click`);
    });

    expect(handleCurrentGenre).toHaveBeenCalledTimes(1);
  });
});
