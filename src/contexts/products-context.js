import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";

const productsContext = createContext(null);
// reducer function of useReduce started
const productsReducer = (productsState, productsAction) => {
  switch (productsAction.type) {
    case "SET_PRODUCTS":
      return { ...productsState, productsData: productsAction.payload };
    default:
      return productsState;
  }
};

// reducer function of useReduce ended

const ProductsProvider = ({ children }) => {
  const [productsState, productsDispatch] = useReducer(productsReducer, {
    productsData: [],
  });

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/api/products");
        productsDispatch({
          type: "SET_PRODUCTS",
          payload: response.data.products,
        });
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  return (
    <productsContext.Provider value={{ productsState, productsDispatch }}>
      {children}
    </productsContext.Provider>
  );
};

const useProducts = () => useContext(productsContext);

export { ProductsProvider, useProducts };
