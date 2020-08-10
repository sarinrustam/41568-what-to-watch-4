import * as React from "react";
import renderer from "react-test-renderer";

import MovieCardDescription from './movie-card-descriptionx';

const movie = {
  id: 1,
  title: `Orlando`,
  img: `img/orlando.jpg`,
  release: 1992,
  genre: `Drama`,
  poster: `https://m.media-amazon.com/images/M/MV5BYmY1OTA3MjAtYjQxOC00OTlkLWExZWQtMjc3ZjExOWFhM2UwXkEyXkFqcGdeQXVyMTA0MjU0Ng@@._V1_.jpg`,
  coverBackground: `https://m.media-amazon.com/images/M/MV5BOTNlZDExZDgtZjMzMS00NDZkLWFlNTItNDM1YTAxODQyMzM4XkEyXkFqcGdeQXVyOTc5MDI5NjE@._V1_.jpg`,
  rating: {
    score: 7.1,
    scoreDesc: `Very awesome`,
    amount: 4333
  },
  description: `After Queen Elizabeth I commands him not to grow old, a young nobleman struggles with love and his place in the world.`,
  crew: {
    director: `Sally Potter`,
    actors: [`Tilda Swinton`, `Quentin Crisps`, `John Bott`]
  },
  preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  videoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  review: {
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    author: `Kate Moss`,
    rating: 8.7
  },
  duration: `1h 2m`
};

describe(`MovieCardDescription render`, () => {
  it(`MovieCardDescription render`, () => {
    const handlerSetActive = jest.fn();
    const tree = renderer.create(
        <MovieCardDescription
          movie={movie}
          activeItem={`Overview`}
          onSetActiveItem={handlerSetActive}
          comments={[]}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
