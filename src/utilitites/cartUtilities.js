import axios from "axios";

const addToCart = async (product, cartDispatch) => {
  try {
    const config = {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    };
    const { data } = await axios.post("/api/user/cart", { product }, config);
    cartDispatch({ type: "ADD_TO_CART", payload: data.cart });
  } catch (error) {
    console.error(error);
  }
};

const removeFromCart = async (pId, cartDispatch) => {
  try {
    const config = {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    };
    const { data } = await axios.delete(`/api/user/cart/${pId}`, config);
    cartDispatch({ type: "REMOVE_FROM_CART", payload: data.cart });
    console.log("removed from cart");
  } catch (error) {
    console.error(error);
  }
};

const increaseDecreaseQty = async (pId, cartDispatch, incDecQty) => {
  try {
    const config = {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    };
    const incOrDenc = {
      action: {
        type: incDecQty,
      },
    };

    const { data } = await axios.post(
      `/api/user/cart/${pId}`,
      incOrDenc,
      config
    );
    cartDispatch({ type: "INCREASE_AND_DECREASE_QTY", payload: data.cart });
    console.log("called", incDecQty);
  } catch (error) {
    console.log(error);
  }
};

export { increaseDecreaseQty, addToCart, removeFromCart };
