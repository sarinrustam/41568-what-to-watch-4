import * as React from "react";
import {configure, mount} from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import {MemoryRouter} from 'react-router';
import {noop} from "../../utils/utils";
import {SignIn} from "./sign-in";

configure({
  adapter: new Adapter(),
});

describe(`Sign in send test`, () => {
  it(`Should onLogin will be call when user send form`, () => {
    const handleSend = jest.fn();
    const event = {preventDefault: noop};
    const wrapper = mount(
        <MemoryRouter>
          <SignIn
            onLogin={handleSend}
            statusAuth={``}
            errorMessage={``}
          />
        </MemoryRouter>
    );

    const form = wrapper.find(`form`);
    form.simulate(`submit`, event);

    expect(handleSend).toHaveBeenCalledTimes(1);
  });
});
