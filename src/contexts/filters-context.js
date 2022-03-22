import { createContext, useReducer, useContext } from "react";

const filterContext = createContext(null);

const filterReducer = (filterState, filterAction) => {
  switch (filterAction.type) {
    case "CLEAR_ALL":
      return {
        priceRange: 5000,
        men: null,
        women: null,
        summer: null,
        winter: null,
        sortByPrice: null,
        rating: null,
        discount: null,
        searchInput: "",
      };
    case "PRICE_RANGE":
      return { ...filterState, priceRange: filterAction.payload };
    case "MEN":
      return { ...filterState, men: filterAction.payload };
    case "WOMEN":
      return { ...filterState, women: filterAction.payload };
    case "SUMMER":
      return { ...filterState, summer: filterAction.payload };
    case "WINTER":
      return { ...filterState, winter: filterAction.payload };
    case "STAR_RATING":
      return { ...filterState, rating: filterAction.payload };
    case "PRICE_SORT":
      return { ...filterState, sortByPrice: filterAction.payload };
    case "DISCOUNT":
      return { ...filterState, discount: filterAction.payload };
    case "SEARCH_INPUT":
      return { ...filterState, searchInput: filterAction.payload };
    default:
      return filterState;
  }
};

const FilterProvider = ({ children }) => {
  const [filterState, filterDispatch] = useReducer(filterReducer, {
    priceRange: 5000,
    men: null,
    women: null,
    summer: null,
    winter: null,
    sortByPrice: null,
    rating: null,
    discount: null,
    searchInput: null,
  });
  return (
    <filterContext.Provider value={{ filterState, filterDispatch }}>
      {children}
    </filterContext.Provider>
  );
};

const useFilters = () => useContext(filterContext);

export { FilterProvider, useFilters };
