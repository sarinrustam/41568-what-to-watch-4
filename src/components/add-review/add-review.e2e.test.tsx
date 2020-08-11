import * as React from "react";
import {configure, shallow} from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import {Movie as MovieType} from "../../types/types";
import AddReview from "./add-review";
import {noop} from "../../utils/utils";

configure({adapter: new Adapter()});

const mockMovie: MovieType = {
  id: 2,
  title: `Avatar`,
  isFavorite: true,
  release: 2009,
  genre: `SCI-FI`,
  poster: `https://m.media-amazon.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_.jpg`,
  coverBackground: `https://m.media-amazon.com/images/M/MV5BMTUxMDI1MDI5MV5BMl5BanBnXkFtZTcwOTY3MTUzNA@@._V1_SX1777_CR0,0,1777,999_AL_.jpg`,
  rating: {
    score: 7.8,
    amount: 43332
  },
  description: `A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.`,
  crew: {
    director: `James Cameron`,
    actors: [`Sam Worthington, Zoe Saldana, Sigourney Weaver`]
  },
  preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  videoLink: ``,
  duration: 2
};

describe(`AddReview tests`, () => {
  it(`Should onInputComment will be call when user type in textarea`, () => {
    const handleInputComment = jest.fn();
    const event = {target: {value: `sometext`}};
    const addReview = shallow(
        <AddReview
          movie={mockMovie}
          onSendComment={noop}
          onInputComment={handleInputComment}
          onChangeRating={noop}
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
          movie={mockMovie}
          onSendComment={noop}
          onInputComment={noop}
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
          movie={mockMovie}
          onSendComment={handleSendComment}
          onInputComment={noop}
          onChangeRating={noop}
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
