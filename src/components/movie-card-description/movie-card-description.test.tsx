import * as React from "react";
import * as renderer from "react-test-renderer";
import {Movie as MovieType, Comment as CommentType} from "../../types/types";
import MovieCardDescription from './movie-card-description';

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

const comments: [CommentType] = [{
  id: 1,
  user: {
    name: `Kate Muir`
  },
  rating: 8.9,
  comment: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
  date: `2019-05-08T14:13:56.569Z`
}];

describe(`MovieCardDescription render`, () => {
  it(`MovieCardDescription render`, () => {
    const handlerSetActive = jest.fn();
    const tree = renderer.create(
        <MovieCardDescription
          movie={mockMovie}
          activeItem={`Overview`}
          onSetActiveItem={handlerSetActive}
          comments={comments}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
