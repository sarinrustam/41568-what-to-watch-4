import React from "react";
import renderer from "react-test-renderer";

import MoviePageOverview from "./movie-page-overview.jsx";

const movie = {
  id: 0,
  title: `Pulp Fuction`,
  img: `img/pulp-fiction.jpg`,
  release: 1994,
  genre: `Action`,
  poster: `https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,686,1000_AL_.jpg`,
  coverBackground: `https://m.media-amazon.com/images/M/MV5BNTY1MzgzOTYxNV5BMl5BanBnXkFtZTgwMDI4OTEwMjE@._V1_SY1000_CR0,0,1463,1000_AL_.jpg`,
  rating: {
    score: 5.5,
    scoreDesc: `Very good`,
    amount: 2323
  },
  description: `The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.`,
  crew: {
    director: `Quentin Tarantino`,
    actors: [`Tim Roth, Amanda Plummer, Laura Lovelace, John Travolta, Samuel L. Jackson`]
  },
  preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  review: {
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    author: [`Kate Moss`],
    rating: 2.2
  }
};

describe(`render MPO`, () => {
  it(`should MPO render correctly`, () => {
    const tree = renderer.create(
        <MoviePageOverview
          movie={movie}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
