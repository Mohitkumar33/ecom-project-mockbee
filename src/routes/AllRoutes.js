import { Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login";
import { Products } from "../pages/Products";
import { Signup } from "../pages/Signup";
import { SingleProduct } from "../pages/SingleProductDisplay";
import { MockAPI } from "../mockman";
import { Cart } from "../pages/Cart";
import { Wishlist } from "../pages/Wishlist";
import { Error } from "../pages/error page/error";
import { Home } from "../pages/Home";
import { PrivateRoute } from "./PrivateRoute";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/mock" element={<MockAPI />} />
      <Route path="/product/:productId" element={<SingleProduct />} />
      <Route
        path="/wishlist"
        element={
          <PrivateRoute>
            <Wishlist />
          </PrivateRoute>
        }
      />
      <Route
        path="/cart"
        element={
          <PrivateRoute>
            <Cart />
          </PrivateRoute>
        }
      />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export { AllRoutes };
