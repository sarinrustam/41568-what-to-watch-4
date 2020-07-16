import React from "react";
import renderer from "react-test-renderer";

import MovieCardNavigationItem from './movie-card-navigation-item.jsx';


describe(`MovieCardDescriptionItem render`, () => {
  it(`MovieCardDescriptionItem render correctly`, () => {
    const handlerSetActive = jest.fn();
    const tree = renderer.create(
        <MovieCardNavigationItem
          filter={`Default`}
          isActive={true}
          setActiveFilter={handlerSetActive}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
