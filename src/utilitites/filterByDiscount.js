const filterByDiscount = (discountFromState, data) => {
  if (discountFromState === null) {
    return data;
  }
  return data.filter(({ discount }) => discount >= discountFromState);
};

export { filterByDiscount };
