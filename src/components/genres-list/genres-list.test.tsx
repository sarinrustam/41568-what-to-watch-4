import * as React from "react";
import * as renderer from "react-test-renderer";
import GenresList from "./genres-list";

const mockGenres: [string] = [`Comedy`];

describe(`Render correctly`, () => {
  it(`should GenreList render correctly`, () => {
    const handlerSetCurrentGenre = jest.fn();
    const tree = renderer.create(
        <GenresList
          genresList={mockGenres}
          currentGenre={mockGenres[0]}
          onSetCurrentGenre={handlerSetCurrentGenre}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
