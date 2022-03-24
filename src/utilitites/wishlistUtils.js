import axios from "axios";

const setWishList = async () => {
  let items = null;
  try {
    const config = {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    };
    const { data } = await axios.get("/api/user/wishlist", config);
    items = data.wishlist;
    console.log(items)
  } catch (error) {
    console.error(error);
  }
  return items;
};

const addToWishlist = async (product) => {
  let items = null;
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
    items = data.wishlist;
  } catch (error) {
    console.error(error);
  }
  return items;
};

const removeFromWishlist = async (id) => {
  let items = null;
  try {
    const config = {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    };
    const { data } = await axios.delete(`/api/user/wishlist/${id}`, config);
    items = data.wishlist;
  } catch (error) {
    console.error(error);
  }
  return items;
};

export { setWishList, addToWishlist, removeFromWishlist };
