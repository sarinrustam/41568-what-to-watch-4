export const getRandomRating = (from, to) => {
  const number = from + Math.random() * (to + 1 - from);
  return number.toFixed(1);
};
