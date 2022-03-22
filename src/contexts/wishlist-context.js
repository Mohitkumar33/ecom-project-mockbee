import { createContext, useContext, useReducer } from "react";

const wishlistContext = createContext(null);
const wishlistReducer = (wishlistState, wishlistAction) => {
  const { wishlistItems } = wishlistState;
  switch (wishlistAction.type) {
    case "ADD_TO_WISHLIST":
      // return{...wishlistState,wishlistItems:wishlistItems.concat(wishlistAction.payload)}
      return {
        ...wishlistState,
        wishlistItems: [...wishlistItems, wishlistAction.payload],
      };
    case "REMOVE_FROM_WISHLIST":
      return {
        ...wishlistState,
        wishlistItems: wishlistItems.filter(
          (item) => item.temp_id !== wishlistAction.payload.temp_id
        ),
      };
    default:
      return wishlistState;
  }
};

const WishlistProvider = ({ children }) => {
  const [wishlistState, wishlistDispatch] = useReducer(wishlistReducer, {
    wishlistItems: [],
  });
  return (
    <wishlistContext.Provider value={{ wishlistState, wishlistDispatch }}>
      {children}
    </wishlistContext.Provider>
  );
};

const useWishlist = () => useContext(wishlistContext);

export { WishlistProvider, useWishlist };
