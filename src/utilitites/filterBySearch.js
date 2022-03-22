const filterBySearch = (searchInputFromState, data) => {

  return searchInputFromState == null
    ? data
    : data.filter((product) =>
        product.brand.toLowerCase().includes(searchInputFromState.toLowerCase())||
        product.name.toLowerCase().includes(searchInputFromState.toLowerCase())||
        product.season.toLowerCase().includes(searchInputFromState.toLowerCase())
      );
};
export {filterBySearch}