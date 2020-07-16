import React from "react";
import PropTypes from "prop-types";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withActiveItem from "./with-active-item.js";

import {PAGE_FILTERS} from "../../utils/utils.js";

configure({adapter: new Adapter()});

const MockComponent = (props) => {
  const {setActiveItem} = props;

  return (
    <div>
      <ul>
        {PAGE_FILTERS.map((item) => (
          <li
            key={item}
            onClick={() => {
              setActiveItem(item);
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
  setActiveItem: PropTypes.func.isRequired,
  activeFilter: PropTypes.string.isRequired,
};

describe(`withActiveItem tests`, () => {
  it(`Checks that HOC's callback click on the item return activeFilter`, () => {
    const MockComponentWrapped = withActiveItem(MockComponent);
    const changeActiveFilter = jest.fn();

    const wrapper = mount(
        <MockComponentWrapped
          activeFilter={PAGE_FILTERS[0]}
          changeActiveItem={changeActiveFilter}
        />
    );

    const li = wrapper.find(`li`);
    li.at(1).simulate(`click`);

    expect(changeActiveFilter.mock.calls[0][0]).toBe(PAGE_FILTERS[1]);
  });
});
