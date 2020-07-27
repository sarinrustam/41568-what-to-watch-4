import {reducer, ActionCreator} from "./app.js";
import {FILTER_ALL_GENRES, COUNT_LIMIT_MOVIES} from "../../utils/utils.js";

const initialState = {
  currentGenre: FILTER_ALL_GENRES,
  countMoviesShow: COUNT_LIMIT_MOVIES
};

const movies = [
  {
    id: 0,
    title: `Pulp Fuction`,
    img: `img/pulp-fiction.jpg`,
    release: 1994,
    genre: `Action`,
    poster: `https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,686,1000_AL_.jpg`,
    coverBackground: `https://m.media-amazon.com/images/M/MV5BNTY1MzgzOTYxNV5BMl5BanBnXkFtZTgwMDI4OTEwMjE@._V1_SY1000_CR0,0,1463,1000_AL_.jpg`,
    rating: {
      score: 2.5,
      scoreDesc: `Very good`,
      amount: 2323
    },
    description: `The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.`,
    crew: {
      director: `Quentin Tarantino`,
      actors: `Tim Roth, Amanda Plummer, Laura Lovelace, John Travolta, Samuel L. Jackson`
    },
    preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    videoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    review: {
      text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
      author: `Kate Moss`,
      rating: 8.6
    },
    duration: `1h 2m`
  },
  {
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
      actors: `Tilda Swinton, Quentin Crisps, John Bott`
    },
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    videoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    review: {
      text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
      author: `Kate Moss`,
      rating: 8.7
    },
    duration: `1h 2m`
  }
];

describe(`App reducer tests`, () => {
  it(`Action working correctly`, () => {
    const newInitialState = {
      currentGenre: movies[1].genre,
      countMoviesShow: COUNT_LIMIT_MOVIES
    };

    expect(reducer(initialState, ActionCreator.setCurrentGenre(movies[1].genre))).toEqual(newInitialState);
  });

  it(`incrementCountMoviesRender working correctly`, () => {
    const newInitialState = {
      currentGenre: FILTER_ALL_GENRES,
      countMoviesShow: COUNT_LIMIT_MOVIES + 8
    };
    expect(reducer(initialState, ActionCreator.incrementCountMoviesShow())).toEqual(newInitialState);
  });

  it(`resetCountMoviesRender`, () => {
    const newInitialState = {
      currentGenre: FILTER_ALL_GENRES,
      countMoviesShow: COUNT_LIMIT_MOVIES + COUNT_LIMIT_MOVIES,
    };
    expect(reducer(newInitialState, ActionCreator.resetCountMoviesShow())).toEqual(initialState);
  });
});
