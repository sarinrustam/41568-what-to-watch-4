import React from "react";
import renderer from "react-test-renderer";

import MovieCardDescription from './movie-card-description.jsx';

import movies from "../../mocks/films.js";

describe(`MovieCardDescription render`, () => {
  it(`MovieCardDescription render`, () => {
    const handlerSetActive = jest.fn();
    const tree = renderer.create(
        <MovieCardDescription
          movie={movies[0]}
          activeItem={`Overview`}
          setActiveItem={handlerSetActive}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
