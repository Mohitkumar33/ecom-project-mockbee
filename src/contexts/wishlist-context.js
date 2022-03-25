import { createContext, useContext, useReducer } from "react";
import { useEffect } from "react";
import { useAuth } from "./auth-context";
import { setWishList } from "../utilitites/wishlistUtils";

const wishlistContext = createContext(null);
const wishlistReducer = (wishlistState, wishlistAction) => {
  switch (wishlistAction.type) {
    case "SET_WISHLIST":
      return {
        ...wishlistState,
        wishlistItems: wishlistAction.payload,
      };
    case "ADD_TO_WISHLIST":
      return {
        ...wishlistState,
        wishlistItems: wishlistAction.payload,
      };
    case "REMOVE_FROM_WISHLIST":
      return {
        ...wishlistState,
        wishlistItems: wishlistAction.payload,
      };
    default:
      return wishlistState;
  }
};

const WishlistProvider = ({ children }) => {
  const { authState } = useAuth();
  const { isAuth } = authState;
  const [wishlistState, wishlistDispatch] = useReducer(wishlistReducer, {
    wishlistItems: [],
  });
  useEffect(() => {
    if (!isAuth) return;

    (async () => {
      const data = await setWishList();
      console.log(data);
      console.log("set wishlist called");
      console.log(wishlistState.wishlistItems);
      wishlistDispatch({ type: "SET_WISHLIST", payload: data });
    })();
  }, []);
  return (
    <wishlistContext.Provider value={{ wishlistState, wishlistDispatch }}>
      {children}
    </wishlistContext.Provider>
  );
};

const useWishlist = () => useContext(wishlistContext);

export { WishlistProvider, useWishlist };
