import React from "react";
import "./cart.css";
import { useCart } from "../contexts/cart-context";
import {
  increaseDecreaseQty,
  removeFromCart,
} from "../utilitites/cartUtilities";
import { useWishlist } from "../contexts/wishlist-context";
import { addToWishlist } from "../utilitites/wishlistUtils";

const Cart = () => {
  const { cartState, cartDispatch } = useCart();
  const { cartItems } = cartState;
  const { wishlistState, wishlistDispatch } = useWishlist();
  const { wishlistItems } = wishlistState;

  // calculation variables
  let finalMrp = 0;
  let totalDiscount = 0;
  let deliveryCharges = 0;

  cartItems.forEach((element) => {
    finalMrp += element.mrp * element.qty;
    totalDiscount += element.mrp * (element.discount / 100);
  });
  deliveryCharges = (finalMrp - totalDiscount) * (8 / 100);
  return (
    <>
      <div className="cart-page">
        <h2 className="main-h2">My cart({cartItems.length})</h2>
        <div className="main-cart">
          <div className="cart-items">
            {cartItems.map((item) => {
              return (
                <>
                  <div className="card-2" key={item._id}>
                    <div className="card-2-col-1">
                      <img src={item.image} alt={item.brand} />
                    </div>
                    <div className="card-2-col-2">
                      <h3>{item.name}</h3>
                      <p className="discount-price">
                        ₹{item.mrp - (item.mrp * item.discount) / 100}{" "}
                        <span className="original-price">₹{item.mrp}</span>
                      </p>
                      <p className="discount-percent">{item.discount}% off</p>
                      <div className="quantity">
                        Quantity:{" "}
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="quantity-minus"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            onClick={() =>
                              item.qty > 1
                                ? increaseDecreaseQty(
                                    item._id,
                                    cartDispatch,
                                    "decrement"
                                  )
                                : removeFromCart(item._id, cartDispatch)
                            }
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M18 12H6"
                            />
                          </svg>
                        </span>{" "}
                        <span className="quantity-number">{item.qty}</span>{" "}
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="quantity-plus"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            onClick={() =>
                              increaseDecreaseQty(
                                item._id,
                                cartDispatch,
                                "increment"
                              )
                            }
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M12 4v16m8-8H4"
                            />
                          </svg>
                        </span>
                      </div>
                      <div>
                        <button
                          className="card-2-button-1-cart"
                          onClick={() => removeFromCart(item._id, cartDispatch)}
                        >
                          Remove from Cart
                        </button>
                      </div>
                      <div>
                        <button
                          className="card-2-button-2-cart"
                          onClick={() =>
                            wishlistItems.some((i) => i._id === item._id)
                              ? removeFromCart(item._id, cartDispatch)
                              : (addToWishlist(item, wishlistDispatch),
                                removeFromCart(item._id, cartDispatch))
                          }
                        >
                          Move to Wishlist
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>

          {/* <!-- calculation part --> */}
          {cartItems.length > 0 && (
            <div className="cart-calculation">
              <h3 className="calc-heading">PRICE DETAILS</h3>
              <hr />
              <div className="price-right">
                <div>
                  <p>Price({cartItems.length} items)</p>
                  <p>₹{finalMrp}</p>
                </div>
                <div>
                  <p>Discount</p>
                  <p>-₹{totalDiscount}</p>
                </div>
                <div>
                  <p>Delivery Charge</p>
                  <p>₹{deliveryCharges}</p>
                </div>
                <hr />
                <div>
                  <p>TOTAL AMOUNT</p>
                  <p>₹{finalMrp - totalDiscount + deliveryCharges}</p>
                </div>
              </div>
              <hr />
              <p>You will save ₹{totalDiscount} on this order</p>
              <button className="payment-button">Make Payment</button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export { Cart };
