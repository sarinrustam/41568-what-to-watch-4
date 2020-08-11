import * as React from "react";
import * as renderer from "react-test-renderer";
import {Comment as CommentType} from "../../types/types";
import MoviePageReviews from "./movie-page-reviews";

const comments: [CommentType] = [{
  id: 1,
  user: {
    name: `Kate Muir`
  },
  rating: 8.9,
  comment: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
  date: `2019-05-08T14:13:56.569Z`
}];

describe(`render MoviePageReviews`, () => {
  it(`should MPR render correctly`, () => {
    const tree = renderer.create(
        <MoviePageReviews
          comments={comments}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
