import * as React from "react";
import {configure, mount} from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import {Movie as MovieType} from "../../types/types";
import VideoPlayerFull from "./video-player-full";
import {noop} from "../../utils/utils";

configure({
  adapter: new Adapter(),
});

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

describe(`VideoPlayerFull button click tests`, () => {
  it(`Should button exit will be press`, () => {
    const handler = jest.fn();

    const wrapper = mount(
        <VideoPlayerFull
          movie={mockMovie}
          onExitVideo={handler}
          onTogglePlay={noop}
          onFullScreen={noop}
          percentProgress={12}
          timeLeft={24}
        >
          <div></div>
        </VideoPlayerFull>
    );

    const buttonExit = wrapper.find(`.player__exit`);

    buttonExit.simulate(`click`);

    expect(handler).toHaveBeenCalledTimes(1);
  });

  it(`Should button Full Screen will be press`, () => {
    const handler = jest.fn();

    const wrapper = mount(
        <VideoPlayerFull
          movie={mockMovie}
          onExitVideo={noop}
          onTogglePlay={noop}
          onFullScreen={handler}
          percentProgress={12}
          timeLeft={24}
        >
          <div></div>
        </VideoPlayerFull>
    );

    const buttonFullScreen = wrapper.find(`.player__full-screen`);

    buttonFullScreen.simulate(`click`);

    expect(handler).toHaveBeenCalledTimes(1);
  });
});
