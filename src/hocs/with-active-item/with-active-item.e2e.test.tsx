import * as React from "react";
import {configure, mount} from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import withActiveItem from "./with-active-item";
import {PAGE_FILTERS} from "../../utils/utils";

configure({
  adapter: new Adapter()
});

interface MockComponentProps {
  onSetActiveItem: (string) => void;
}

const MockComponent = (props: MockComponentProps) => {
  const {onSetActiveItem} = props;

  return (
    <div>
      <ul>
        {PAGE_FILTERS.map((item) => (
          <li
            key={item}
            onClick={() => {
              onSetActiveItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

describe(`withActiveItem tests`, () => {
  it(`Checks that HOC's callback click on the item return activeFilter`, () => {
    const MockComponentWrapped = withActiveItem(MockComponent);
    const changeActiveFilter = jest.fn();

    const wrapper = mount(
        <MockComponentWrapped
          activeFilter={PAGE_FILTERS[0]}
          onChangeActiveItem={changeActiveFilter}
        />
    );

    const li = wrapper.find(`li`);
    li.at(1).simulate(`click`);

    expect(changeActiveFilter.mock.calls[0][0]).toBe(PAGE_FILTERS[1]);
  });
});
