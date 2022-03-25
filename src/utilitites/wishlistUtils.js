import axios from "axios";

const setWishList = async () => {
  try {
    const config = {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    };
    const { data } = await axios.get("/api/user/wishlist", config);
    console.log("set wishlist function called");
    return data.wishlist;
  } catch (error) {
    console.error(error);
  }
};

const addToWishlist = async (product, wishlistDispatch) => {
  try {
    const config = {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    };
    const { data } = await axios.post(
      "/api/user/wishlist",
      { product },
      config
    );
    console.log("thisis add towish list");
    wishlistDispatch({ type: "ADD_TO_WISHLIST", payload: data.wishlist });
  } catch (error) {
    console.error(error);
  }
};

const removeFromWishlist = async (id, wishlistDispatch) => {
  try {
    const config = {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    };
    const { data } = await axios.delete(`/api/user/wishlist/${id}`, config);
    console.log("remove from wishlist called");
    console.log("this is data after removed ", data);
    wishlistDispatch({ type: "REMOVE_FROM_WISHLIST", payload: id });
  } catch (error) {
    console.error(error);
  }
};
// wishlistDispatch({
//   type: "REMOVE_FROM_WISHLIST",
//   payload: removeFromWishlist(id),
// });

// wishlistDispatch({ type: "ADD_TO_WISHLIST", payload: addToWishlist(product) });
export { setWishList, addToWishlist, removeFromWishlist };
