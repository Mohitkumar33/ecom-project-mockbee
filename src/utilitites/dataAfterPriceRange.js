const dataAfterPriceRange = (priceRange, data) => {
  if (priceRange >= 5000) {
    return data;
  }
  return data.filter(
    ({ mrp, discount }) => mrp - (mrp * discount) / 100 <= priceRange
  );
};
export { dataAfterPriceRange };
