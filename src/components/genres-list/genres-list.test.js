import * as React from "react";
import renderer from "react-test-renderer";
import {GENRES} from "../../mocks/films";

import GenresList from "./genres-list";

describe(`Render correctly`, () => {
  it(`should GenreList render correctly`, () => {
    const handlerSetCurrentGenre = jest.fn();
    const tree = renderer.create(
        <GenresList
          genresList={GENRES}
          currentGenre={GENRES[0]}
          onSetCurrentGenre={handlerSetCurrentGenre}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
