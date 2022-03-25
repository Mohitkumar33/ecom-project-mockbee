import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import { useAuth } from "./auth-context";

const cartContex = createContext(null);

const cartReducer = (cartState, cartAction) => {
  switch (cartAction.type) {
    case "SET_CART":
      return { ...cartState, cartItems: cartAction.payload };
    case "ADD_TO_CART":
      return { ...cartState, cartItems: cartAction.payload };
    case "REMOVE_FROM_CART":
      return { ...cartState, cartItems: cartAction.payload };
    case "INCREASE_AND_DECREASE_QTY":
      return { ...cartState, cartItems: cartAction.payload };
    default:
      return cartState;
  }
};

const CartProvider = ({ children }) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, { cartItems: [] });
  const { authState } = useAuth();
  const { isAuth } = authState;
  useEffect(() => {
    if (!isAuth) return;
    (async () => {
      try {
        const config = {
          headers: {
            authorization: localStorage.getItem("token"),
          },
        };
        const { data } = await axios.get("/api/user/cart", config);
        cartDispatch({ type: "SET_CART", payload: data.cart });
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);
  return (
    <cartContex.Provider value={{ cartState, cartDispatch }}>
      {children}
    </cartContex.Provider>
  );
};

const useCart = () => useContext(cartContex);

export { useCart, CartProvider };
