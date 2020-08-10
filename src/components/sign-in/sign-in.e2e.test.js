import * as React from "react";
import Adapter from "enzyme-adapter-react-16";
import Enzyme, {mount} from "enzyme";
import {MemoryRouter} from 'react-router';

import {SignIn} from "./sign-in";

Enzyme.configure({
  adapter: new Adapter(),
});


describe(`Sign in send test`, () => {
  it(`Should onLogin will be call when user send form`, () => {
    const handleSend = jest.fn();
    const event = {preventDefault: () => {}};
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
