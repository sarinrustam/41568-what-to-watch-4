import React from "react";
import Adapter from "enzyme-adapter-react-16";
import Enzyme, {mount} from "enzyme";

import MovieCardNavigationItem from "./movie-card-navigation-item.jsx";


Enzyme.configure({
  adapter: new Adapter(),
});

const FILTERS = [`Overview`, `Details`, `Reviews`];


describe(`MovieCardNavigationItem button click test`, () => {
  it(`Should button will be press`, () => {
    const handler = jest.fn();

    const movieCardNavigationItem = mount(
        <MovieCardNavigationItem
          filter={FILTERS[0]}
          onSetActiveFilter={handler}
          isActive={true}
        />
    );

    const li = movieCardNavigationItem.find(`li`);

    li.simulate(`click`);

    expect(handler).toHaveBeenCalledTimes(1);
  });
});
