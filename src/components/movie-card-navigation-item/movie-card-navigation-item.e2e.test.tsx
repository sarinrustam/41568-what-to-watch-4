import * as React from "react";
import {configure, mount} from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";

import MovieCardNavigationItem from "./movie-card-navigation-item";

configure({
  adapter: new Adapter(),
});

describe(`MovieCardNavigationItem button click test`, () => {
  it(`Should button will be press`, () => {
    const handler = jest.fn();

    const movieCardNavigationItem = mount(
        <MovieCardNavigationItem
          filter={`Details`}
          onSetActiveFilter={handler}
          isActive={true}
        />
    );

    const li = movieCardNavigationItem.find(`li`);

    li.simulate(`click`);

    expect(handler).toHaveBeenCalledTimes(1);
  });
});
