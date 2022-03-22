const filterByRating = (ratingFromState, data) => {
  if (ratingFromState === null) {
    return data;
  }
  return data.filter(({ rating }) => rating >= ratingFromState);
};

export { filterByRating };
