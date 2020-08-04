import React from "react";
import renderer from "react-test-renderer";

import MoviePageDetails from "./movie-page-details.jsx";

const movie = {
  id: 5,
  title: `Macbeth`,
  img: `img/macbeth.jpg`,
  release: 2015,
  genre: `Action`,
  duration: 22,
  poster: `https://m.media-amazon.com/images/M/MV5BNzgyNDczMjU4NV5BMl5BanBnXkFtZTgwMTUwMDI3NjE@._V1_SY1000_SX675_AL_.jpg`,
  coverBackground: `https://m.media-amazon.com/images/M/MV5BMTkwOTA2YTQtNDNkNi00YWZiLTg2ZGEtODAwOGFjMmZlYTUyXkEyXkFqcGdeQXVyNDAxOTExNTM@._V1_.jpg`,
  rating: {
    score: 8.3,
    scoreDesc: `Very good`,
    amount: 383
  },
  description: `Macbeth, the Thane of Glamis, receives a prophecy from a trio of witches that one day he will become King of Scotland. Consumed by ambition and spurred to action by his wife, Macbeth murders his king and takes the throne for himself.`,
  crew: {
    director: `Justin Kurzel`,
    actors: [`Michael Fassbender, Marion Cotillard, Jack Madigan`]
  },
  preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  review: {
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    author: `Kate Moss`,
    rating: 2.5
  }
};

describe(`MPD render`, () => {
  it(`should MPD render correctly`, () => {
    const tree = renderer.create(
        <MoviePageDetails
          movie={movie}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
