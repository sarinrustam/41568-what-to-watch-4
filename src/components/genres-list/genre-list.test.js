import React from "react";
import renderer from "react-test-renderer";
import {GENRES} from "../../mocks/films.js";

import GenreList from "./genres-list.jsx";

describe(`Render correctly`, () => {
  it(`should GenreList render correctly`, () => {
    const handlerSetCurrentGenre = jest.fn();
    const tree = renderer.create(
        <GenreList
          genresList={GENRES}
          currentGenre={GENRES[0]}
          setCurrentGenre={handlerSetCurrentGenre}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
