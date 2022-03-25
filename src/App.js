import { Route, Routes } from "react-router-dom";
import { Footer } from "./components/footer/Footer";
import { Navbar } from "./components/navbar/Navbar";
import { MockAPI } from "./mockman";
import { Cart } from "./pages/Cart";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Products } from "./pages/Products";
import { Signup } from "./pages/Signup";
import { Wishlist } from "./pages/Wishlist";

const App = () => {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/mock" element={<MockAPI />} />
      </Routes>
      <Footer />
    </div>
  );
};

export { App };
