import * as React from "react";
import {configure, mount} from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import {Movie as MovieType} from "../../types/types";
import VideoPlayer from "./video-player";

configure({
  adapter: new Adapter(),
});

const movie: MovieType = {
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

describe(`VideoPlayer tests`, () => {
  it(`Can VideoPlayer component play a video`, () => {
    const pleer = mount(
        <VideoPlayer
          poster={movie.poster}
          src={movie.preview}
          isMuted={true}
          isPlaying={true}
        />
    );

    expect(pleer.props().isPlaying).toEqual(true);
  });

  it(`Can VideoPlayer component play a video`, () => {
    const pleer = mount(
        <VideoPlayer
          poster={movie.poster}
          src={movie.preview}
          isMuted={true}
          isPlaying={false}
        />
    );

    expect(pleer.props().isPlaying).toEqual(false);
  });
});
