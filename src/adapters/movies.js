export const movieAdapter = (movieData) => {
  return {
    id: movieData[`id`],
    title: movieData[`name`],
    poster: movieData[`poster_image`],
    release: movieData[`released`],
    genre: movieData[`genre`],
    isFavorite: movieData[`is_favorite`],
    coverBackground: movieData[`background_image`],
    rating: {
      score: movieData[`rating`],
      scoreDesc: `FUNCTION`,
      amount: movieData[`scores_count`]
    },
    description: movieData[`description`],
    crew: {
      director: movieData[`director`],
      actors: movieData[`starring`]
    },
    preview: movieData[`preview_video_link`],
    videoLink: movieData[`video_link`],
    duration: movieData[`run_time`],
  };
};

export const moviesAdapter = (dataFromBackend) => {
  return dataFromBackend.map(movieAdapter);
};
