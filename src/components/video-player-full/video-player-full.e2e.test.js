import React from "react";
import Adapter from "enzyme-adapter-react-16";
import Enzyme, {mount} from "enzyme";

import VideoPlayerFull from "./video-player-full.jsx";


Enzyme.configure({
  adapter: new Adapter(),
});

const movies = [
  {
    id: 0,
    title: `Pulp Fuction`,
    img: `img/pulp-fiction.jpg`,
    release: 1994,
    genre: `Action`,
    isFavorite: false,
    videoLink: ``,
    poster: `https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,686,1000_AL_.jpg`,
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
    preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
  },
  {
    id: 1,
    title: `Pulp Fuction`,
    img: `img/pulp-fiction.jpg`,
    release: 1994,
    genre: `Action`,
    isFavorite: false,
    poster: `https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,686,1000_AL_.jpg`,
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
    preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
  }
];


describe(`VideoPlayerFull button click tests`, () => {
  it(`Should button exit will be press`, () => {
    const handler = jest.fn();

    const wrapper = mount(
        <VideoPlayerFull
          movie={movies[0]}
          onExitVideo={handler}
          onTogglePlay={() => {}}
          onFullScreen={() => {}}
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
          movie={movies[0]}
          onExitVideo={() => {}}
          onTogglePlay={() => {}}
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
