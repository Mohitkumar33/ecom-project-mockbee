import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { ProductsProvider } from "./contexts/products-context";
import { FilterProvider } from "./contexts/filters-context";
import { WishlistProvider } from "./contexts/wishlist-context";
import { AuthProvider } from "./contexts/auth-context";
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
    <BrowserRouter>
      <ProductsProvider>
        <FilterProvider>
        <WishlistProvider>
          <App />
          </WishlistProvider>
        </FilterProvider>
      </ProductsProvider>
    </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
