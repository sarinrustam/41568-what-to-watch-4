import React from "react";
import Adapter from "enzyme-adapter-react-16";
import Enzyme, {shallow} from "enzyme";

import AddReview from "./add-review.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

const movie = {
  id: 0,
  title: `Pulp Fuction`,
  img: `img/pulp-fiction.jpg`,
  release: 1994,
  genre: `Action`,
  poster: ``,
  coverBackground: `https://m.media-amazon.com/images/M/MV5BNTY1MzgzOTYxNV5BMl5BanBnXkFtZTgwMDI4OTEwMjE@._V1_SY1000_CR0,0,1463,1000_AL_.jpg`,
  rating: {
    score: 8.9,
    scoreDesc: `Very good`,
    amount: 2323
  },
  description: `The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.`,
  crew: {
    director: `Quentin Tarantino`,
    actors: [`Tim Roth, Amanda Plummer, Laura Lovelace, John Travolta, Samuel L. Jackson`]
  },
  preview: ``
};

describe(`AddReview tests`, () => {
  it(`Should onInputComment will be call when user type in textarea`, () => {
    const handleInputComment = jest.fn();
    const event = {target: {value: `sometext`}};
    const addReview = shallow(
        <AddReview
          movie={movie}
          onSendComment={() => {}}
          onInputComment={handleInputComment}
          onChangeRating={() => {}}
          rating={5}
          comment={`Test comment`}
          isLoading={true}
          errorText={`Hello My name is error`}
        />
    );

    const textarea = addReview.find(`textarea`);

    textarea.simulate(`input`, event);

    expect(handleInputComment).toHaveBeenCalledTimes(1);
    expect(handleInputComment).toHaveBeenLastCalledWith(event);
  });

  it(`Should onChangeRating will be call when pick a star`, () => {
    const handleChangeRating = jest.fn();
    const event = {target: {value: `1`}};
    const addReview = shallow(
        <AddReview
          movie={movie}
          onSendComment={() => {}}
          onInputComment={() => {}}
          onChangeRating={handleChangeRating}
          rating={5}
          comment={`Test comment`}
          isLoading={true}
          errorText={`Hello My name is error`}
        />
    );

    const wrapperRatings = addReview.find(`.rating__stars`);
    wrapperRatings.simulate(`change`, event);

    expect(handleChangeRating).toHaveBeenCalledTimes(1);
    expect(handleChangeRating).toHaveBeenLastCalledWith(event);
  });

  it(`Should onSendComment will be call when user send comment`, () => {
    const handleSendComment = jest.fn();

    const addReview = shallow(
        <AddReview
          movie={movie}
          onSendComment={handleSendComment}
          onInputComment={() => {}}
          onChangeRating={() => {}}
          rating={5}
          comment={`Test comment`}
          isLoading={false}
          errorText={`Hello My name is error`}
        />
    );

    const form = addReview.find(`form`);
    form.simulate(`submit`);

    expect(handleSendComment).toHaveBeenCalledTimes(1);
  });
});
