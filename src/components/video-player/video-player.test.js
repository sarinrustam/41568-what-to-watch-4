import * as React from "react";
import rerender from "react-test-renderer";

import VideoPlayer from "./video-player";

const movie = {
  id: 2,
  title: `Avatar`,
  img: `img/avatar.jpg`,
  release: 2009,
  genre: `SCI-FI`,
  poster: `https://m.media-amazon.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_.jpg`,
  coverBackground: `https://m.media-amazon.com/images/M/MV5BMTUxMDI1MDI5MV5BMl5BanBnXkFtZTcwOTY3MTUzNA@@._V1_SX1777_CR0,0,1777,999_AL_.jpg`,
  rating: {
    score: 7.8,
    scoreDesc: `Not Bad`,
    amount: 43332
  },
  description: `A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.`,
  crew: {
    director: `James Cameron`,
    actors: `Sam Worthington, Zoe Saldana, Sigourney Weaver`
  },
  preview: `https://www.imdb.com/video/vi531039513?`
};

describe(`Correctly VP render`, () => {
  it(`Should VideoPlayer render correctly`, () => {
    const tree = rerender.create(
        <VideoPlayer
          isMuted={true}
          isPlaying={true}
          poster={movie.poster}
          src={movie.preview}
        />,
        {
          createNodeMock: () => {
            return {};
          }
        }).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
