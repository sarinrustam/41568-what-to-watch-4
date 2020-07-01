import React from "react";
import Adapter from "enzyme-adapter-react-16";
import Enzyme, {mount} from "enzyme";

import VideoPlayer from "./video-player.jsx";

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
    actors: `Tim Roth, Amanda Plummer, Laura Lovelace, John Travolta, Samuel L. Jackson`
  },
  preview: ``
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
    // console.log(pleer.state(`isPlaying`), `1`);

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
    // console.log(pleer.state(`isPlaying`), `2`);

    expect(pleer.props().isPlaying).toEqual(false);
  });
});
