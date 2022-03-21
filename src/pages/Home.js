import "./home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <p>This is Home</p>
      <Link to="/">Home</Link>||
      <Link to="/products">products</Link>||
      <Link to="/wishlist">wishlist</Link>||
      <Link to="/cart">Cart</Link>||
      <Link to="/login">Login</Link>||
      <Link to="/signup">Signup</Link>
    </>
  );
};

export { Home };
