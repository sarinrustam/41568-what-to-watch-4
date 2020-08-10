import * as React from "react";
import renderer from "react-test-renderer";

import MovieCardNavigationItem from './movie-card-navigation-itemx';


describe(`MovieCardDescriptionItem render`, () => {
  it(`MovieCardDescriptionItem render correctly`, () => {
    const handlerSetActive = jest.fn();
    const tree = renderer.create(
        <MovieCardNavigationItem
          filter={`Default`}
          isActive={true}
          onSetActiveFilter={handlerSetActive}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
