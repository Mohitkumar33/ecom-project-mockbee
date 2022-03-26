import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/auth-context";
import { useCart } from "../../contexts/cart-context";
import { useProducts } from "../../contexts/products-context";
import { addToCart } from "../../utilitites/cartUtilities";

import "./dealsOfTheDay.css";
const DealsOfTheDay = () => {
  const navigate = useNavigate();
  const { authState, setAuthState } = useAuth();
  const { isAuth } = authState;
  const { cartState, cartDispatch } = useCart();
  const { cartItems } = cartState;
  const { productsState } = useProducts();
  const maxDiscountProducts = productsState.productsData.filter(
    (i) => i.discount >= 50
  );
  return (
    <>
      <h2>Deals of the Day</h2>
      {console.log("Maximum discount all products", maxDiscountProducts)}

      <div className="card-4">
        {maxDiscountProducts.map((i) => (
          <div className="card-4-item" key={i._id}>
            <img
              src={i.image}
              alt={i.brand}
              onClick={() => navigate("/products")}
            />
            <p>{i.name}</p>
            <p>₹{i.mrp - (i.mrp * i.discount) / 100}</p>
            <p>{i.discount}% off</p>

            <button
              onClick={() =>
                isAuth
                  ? cartItems.some((item) => item._id === i._id)
                    ? navigate("/cart")
                    : (addToCart(i, cartDispatch), navigate("/cart"))
                  : navigate("/login")
              }
            >
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export { DealsOfTheDay };
