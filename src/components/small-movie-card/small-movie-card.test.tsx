import * as React from "react";
import * as renderer from "react-test-renderer";
import {Movie as MovieType} from "../../types/types";
import SmallMovieCard from "./small-movie-card";
import {noop} from "../../utils/utils";

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

describe(`Render SMC`, () => {
  it(`SMC should render movie`, () => {
    const tree = renderer
    .create(<SmallMovieCard
      movie={mockMovie}
      onMovieClick={noop}
      onMouseEnter={noop}
      onMouseLeave={noop}
      isPlaying={true}
    />, {
      createNodeMock: () => {
        return {};
      }
    }
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
