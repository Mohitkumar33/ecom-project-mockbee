import React from "react";
import { useState } from "react";
import { Footer } from "../components/footer/Footer";
import { Navbar } from "../components/navbar/Navbar";
import { useWishlist } from "../contexts/wishlist-context";
import "./wishlist.css";

const Wishlist = () => {
  const [openToastRemove, setOpenToastRemove] = useState(false);
  const { wishlistState, wishlistDispatch } = useWishlist();
  const { wishlistItems } = wishlistState;
  console.log(wishlistItems)
  return (
    <>
      <Navbar />
      <div className="wishlist">
        <h2 className="main-h2">My Wishlist({wishlistItems.length})</h2>
        {openToastRemove && (
          <div className="toast-1">
            Item{" "}
            ✅
            removed from wishlist
          </div>
        )}
        <div className="all-products">
          {wishlistItems.map((item) => {
            return (
              <div className="card-1" key={item.temp_id}>
                <img src={item.image} alt={item.brand} />
                <p>{item.name}</p>
                <p>₹{item.mrp - (item.mrp * item.discount) / 100}</p>
                <button>Add to Cart</button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="card-icon"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  onClick={() => {
                    wishlistDispatch({
                      type: "REMOVE_FROM_WISHLIST",
                      payload: item.temp_id,
                    }),
                      setOpenToastRemove(true),
                      setTimeout(() => {
                        setOpenToastRemove(false);
                      }, 1000);
                    }
                  }
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export { Wishlist };
