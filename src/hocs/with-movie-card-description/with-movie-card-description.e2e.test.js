import React from "react";
import PropTypes from "prop-types";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withMovieCardDescription from "./with-movie-card-description.js";
import {PAGE_FILTERS} from "../../utils/utils.js";

configure({adapter: new Adapter()});

const MockComponent = (props) => {
  const {setActiveFilter} = props;

  return (
    <div>
      <ul>
        {PAGE_FILTERS.map((item) => (
          <li
            key={item}
            onClick={() => {
              setActiveFilter(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

MockComponent.propTypes = {
  setActiveFilter: PropTypes.func.isRequired,
};

describe(`withMovieCardDescription tests`, () => {
  it(`activeFilter toggle correcty`, () => {
    const MockComponentWrapped = withMovieCardDescription(MockComponent);

    const wrapper = mount(
        <MockComponentWrapped/>
    );

    const li = wrapper.find(`li`);
    li.at(1).simulate(`click`);

    expect(wrapper.state().activeFilter).toBe(PAGE_FILTERS[1]);
  });
});
