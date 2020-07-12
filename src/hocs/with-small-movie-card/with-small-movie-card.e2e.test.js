import React from "react";
import PropTypes from "prop-types";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withSmallMovieCard from "./with-small-movie-card.js";
import movies from "../../mocks/films.js";

configure({adapter: new Adapter()});

const MockComponent = (props) => {
  const {handlerMovieClick, movie} = props;

  return (
    <div>
      <button onClick={() => {
        handlerMovieClick(movie);
      }} />
    </div>
  );
};

MockComponent.propTypes = {
  handlerMovieClick: PropTypes.func.isRequired,
  movie: PropTypes.object.isRequired,
};

describe(`withSmallMovieCard tests`, () => {
  it(`Checks that HOC's callback click on the item return Movie`, () => {
    const MockComponentWrapped = withSmallMovieCard(MockComponent);
    const onMovieClick = jest.fn();

    const wrapper = mount(
        <MockComponentWrapped
          movie={movies[0]}
          onMovieClick={onMovieClick}
        />
    );

    const button = wrapper.find(`button`);
    button.simulate(`click`);

    expect(onMovieClick.mock.calls[0][0]).toBe(movies[0]);
  });
});
