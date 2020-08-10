export interface Movie {
  id: number,
  title: string,
  poster: string,
  release: number,
  genre: string,
  isFavorite: boolean,
  coverBackground: string,
  rating: {
    score: number,
    amount: number
  },
  description: string,
  crew: {
    director: string,
    actors: [string]
  },
  preview: string,
  videoLink: string,
  duration: number,
};

export interface Comment {
  id: number,
  comment: string,
  date: string,
  rating: number,
  user: {
    name: string,
  }
};
