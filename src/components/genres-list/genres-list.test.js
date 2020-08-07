import React from "react";
import renderer from "react-test-renderer";
import {GENRES} from "../../mocks/films.js";

import GenresList from "./genres-list.jsx";

describe(`Render correctly`, () => {
  it(`should GenreList render correctly`, () => {
    const handlerSetCurrentGenre = jest.fn();
    const tree = renderer.create(
        <GenresList
          genresList={GENRES}
          currentGenre={GENRES[0]}
          setCurrentGenre={handlerSetCurrentGenre}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
