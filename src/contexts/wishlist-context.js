import { createContext, useContext, useReducer } from "react";
import { useEffect } from "react";
import { useAuth } from "./auth-context";
import {
  setWishList,
  addToWishlist,
  removeFromWishlist,
} from "../utilitites/wishlistUtils";

const wishlistContext = createContext(null);
const wishlistReducer = (wishlistState, wishlistAction) => {
  console.log(wishlistState)
  switch (wishlistAction.type) {
    case "SET_WISHLIST":
      return{
        ...wishlistState, wishlistItems:setWishList()
      }
    case "ADD_TO_WISHLIST":
      return{
        ...wishlistState, wishlistItems:addToWishlist(wishlistAction.payload)
      }
    case "REMOVE_FROM_WISHLIST":
      return{
        ...wishlistState, wishlistItems:removeFromWishlist(wishlistAction.payload)
      }
    default:
      return wishlistState;
  }
};

const WishlistProvider = ({ children }) => {
  const {authState} = useAuth();
  const { isAuth } = authState;
  const [wishlistState, wishlistDispatch] = useReducer(wishlistReducer, {
    wishlistItems: [],
  });
  useEffect(() => {
    if (!isAuth) return;
    console.log("after return")
    wishlistDispatch({type:"SET_WISHLIST"})
  },[]);
  return (
    <wishlistContext.Provider value={{ wishlistState, wishlistDispatch }}>
      {children}
    </wishlistContext.Provider>
  );
};

const useWishlist = () => useContext(wishlistContext);

export { WishlistProvider, useWishlist };
