import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { addToWishlist, removeFromWishlist } from "../utilitites/wishlistUtils";
import { useWishlist } from "../contexts/wishlist-context";
import { useCart } from "../contexts/cart-context";
import { addToCart, removeFromCart } from "../utilitites/cartUtilities";
import { useAuth } from "../contexts/auth-context";
import "./singleProductDisplay.css";
const SingleProduct = () => {
  const { cartState, cartDispatch } = useCart();
  const { cartItems } = cartState;
  const navigate = useNavigate();
  const { authState } = useAuth();
  const { isAuth } = authState;
  const [loader, setLoader] = useState(false);
  const { wishlistState, wishlistDispatch } = useWishlist();
  const [openToast, setOpenToast] = useState(false);
  const [openToastRemove, setOpenToastRemove] = useState(false);
  const { wishlistItems } = wishlistState;
  const { productId } = useParams();
  const [i, setProduct] = useState(null);
  let location = useLocation();
  const handleAddToWishlist = (i) => {
    addToWishlist(i, wishlistDispatch),
      setOpenToast(true),
      setTimeout(() => {
        setOpenToast(false);
      }, 1000);
  };

  const handleRemoveFromWishlist = (i) => {
    removeFromWishlist(i._id, wishlistDispatch),
      setOpenToastRemove(true),
      setTimeout(() => {
        setOpenToastRemove(false);
      }, 1000);
  };

  useEffect(() => {
    (async () => {
      // as product id is in parent so no need of putting it in arguments due to closures
      try {
        setLoader(true);
        const { data } = await axios.get(`/api/products/${productId}`);
        setLoader(false);
        setProduct(data.product);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);
  return (
    <>
      {loader && (
        <img
          className="loading-image"
          src="https://res.cloudinary.com/dbfzfqfhl/image/upload/v1648755213/ecom%20item%20images/video%20library%20data/loading_vja82z.gif"
        />
      )}
      {openToast && <div className="toast-1">Item ✅ added from wishlist</div>}
      {openToastRemove && (
        <div className="toast-1">Item ✅ removed from wishlist</div>
      )}
      {i && (
        <div className="single-product">
          <div className="card-2" key={i._id}>
            <div className="card-2-col-1">
              <img src={i.image} alt={i.name} />
            </div>
            <div className="card-2-col-2">
              <h3>{i.name}</h3>
              <small className="brand-style">by {i.brand}</small>
              <p className="discount-price">
                ₹{i.mrp - (i.mrp * i.discount) / 100}{" "}
                <span className="original-price">₹{i.mrp}</span>
              </p>
              <p className="discount-percent">{i.discount}% off</p>
              <div className="rating">
                <p>{i.rating}.0</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="star-rating"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  ></path>
                </svg>
              </div>
              <div>
                <button
                  className="card-2-button-1"
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
              <div>
                {cartItems.some((item) => item._id === i._id) ? (
                  <button
                    className="card-2-button-2"
                    onClick={() =>
                      isAuth
                        ? removeFromCart(i._id, cartDispatch)
                        : navigate("/login")
                    }
                  >
                    Remove From Cart
                  </button>
                ) : (
                  <button
                    className="card-2-button-2"
                    onClick={() => {
                      isAuth ? addToCart(i, cartDispatch) : navigate("/login");
                    }}
                  >
                    Add To Cart
                  </button>
                )}
              </div>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={
                wishlistItems.some((item) => item.temp_id === i.temp_id)
                  ? "card-icon-products-red"
                  : "card-icon-products"
              }
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              onClick={() => {
                isAuth
                  ? wishlistItems.some((item) => item.temp_id === i.temp_id)
                    ? handleRemoveFromWishlist(i)
                    : handleAddToWishlist(i)
                  : navigate("/login", { state: { from: location } });
              }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </div>
        </div>
      )}
    </>
  );
};

export { SingleProduct };
