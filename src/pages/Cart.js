import React from "react";
import { Footer } from "../components/footer/Footer";
import { Navbar } from "../components/navbar/Navbar";
import "./cart.css";

const Cart = () => {
  return (
    <>
      <Navbar />
      <div className="cart-page">
        <h2 className="main-h2">My cart(2)</h2>
        <div className="main-cart">
          <div className="cart-items">
            <div className="card-2">
              <div className="card-2-col-1">
                <img src="/images/card-image.jpeg" alt="" />
              </div>
              <div className="card-2-col-2">
                <h3>Men Premium Jacket</h3>
                <p className="discount-price">
                  ₹2000{" "}
                  <span className="original-price">
                    ₹3999 <span className="line-on-price"></span>
                  </span>
                </p>
                <p className="discount-percent">50% off</p>
                <div className="quantity">
                  Quantity:{" "}
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="quantity-minus"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M18 12H6"
                      />
                    </svg>
                  </span>{" "}
                  <span className="quantity-number">1</span>{" "}
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="quantity-plus"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
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
                  <button className="card-2-button-1">Go to Cart</button>
                </div>
                <div>
                  <button className="card-2-button-2">Remove from Wishlist</button>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- calculation part --> */}

          <div className="cart-calculation">
            <h3>PRICE DETAILS</h3>
            <hr />
            <div className="price-right">
              <div>
                <p>Price(2 items)</p>
                <p>₹7998</p>
              </div>
              <div>
                <p>Discount</p>
                <p>-₹3998</p>
              </div>
              <div>
                <p>Delivery Charge</p>
                <p>₹499</p>
              </div>
              <hr />
              <div>
                <p>TOTAL AMOUNT</p>
                <p>₹4499</p>
              </div>
            </div>
            <hr />
            <p>You will save ₹3998 on this order</p>
            <button className="payment-button">Go to Cart</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export { Cart };
