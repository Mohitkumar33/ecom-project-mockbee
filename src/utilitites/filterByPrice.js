const filterByPrice = (sortByPrice, data) => {
  if (sortByPrice === null) {
    return data;
  } else if (sortByPrice === "PRICE_LOW_TO_HIGH") {
    return data.sort(
      (a, b) =>
        a.mrp -
        (a.mrp * a.discount) / 100 -
        (b.mrp - (b.mrp * b.discount) / 100)
    );
  } else if (sortByPrice === "PRICE_HIGH_TO_LOW") {
    return data.sort(
      (a, b) =>
        b.mrp -
        (b.mrp * b.discount) / 100 -
        (a.mrp - (a.mrp * a.discount) / 100)
    );
  }
};

export { filterByPrice };
