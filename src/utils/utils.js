import moment from "moment";

export const FILTER_ALL_GENRES = `All Genres`;

export const PAGE_FILTERS = [`Overview`, `Details`, `Reviews`];

export const COUNT_LIMIT_MOVIES = 8;

export const MAX_GENRES_SHOW = 9;

export const SHOWING_MOVIES_COUNT = 4;

export const API_URL = `https://4.react.pages.academy`;

const MINUTES = 60;

const RATING_DESCRIPTION = {
  BAD: `Bad`,
  NORMAL: `Normal`,
  GOOD: `Good`,
  VERY_GOOD: `Very good`,
  AWESOME: `Awesome`,
};

export const CommentLength = {
  MIN: 50,
  MAX: 400,
};

export const Buttons = {
  ESC: `ESC`,
};

export const AppRoute = {
  ROOT: `/`,
  LOGIN: `/login`,
  MY_LIST: `/mylist`,
  FILMS: `/films`,
  PLAYER: `/player`,
  REVIEW: `/review`,
};

export const setRatingDesc = (rating) => {
  if (rating < 3) {
    return RATING_DESCRIPTION.BAD;
  }
  if (rating >= 3 && rating < 5) {
    return RATING_DESCRIPTION.NORMAL;
  }
  if (rating >= 5 && rating < 8) {
    return RATING_DESCRIPTION.GOOD;
  }
  if (rating >= 8 && rating < 10) {
    return RATING_DESCRIPTION.VERY_GOOD;
  }

  return RATING_DESCRIPTION.AWESOME;
};

export const setTime = (minutes) => {
  const hours = minutes / MINUTES;
  const fullHours = Math.floor(hours);
  const fullMinutes = Math.trunc((hours - fullHours) * MINUTES);

  return [fullHours, fullMinutes];
};

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const formatDateForReviews = (date) => {
  return moment(date).format(`MMMM DD, YYYY`);
};
