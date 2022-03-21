import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="brand-name">
          <i>
            <h2>
              <Link to="/" className="brand-name-link">
                Fastcom
              </Link>
            </h2>
          </i>
        </div>
        <div className="input-field">
          <input type="text" placeholder="search" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="fa-search"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <div className="nav-icons">
          
          <Link to="/login">
            <button className="nav-login">Login</button>
          </Link>
          
          <Link to="/signup">
            <button className="nav-signup">Signup</button>
          </Link>
          <Link to="/wishlist">
            <div className="nav-heart-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              <div className="marker-icon">0</div>
            </div>
          </Link>
          <Link to="/cart"><div className="nav-cart-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <div className="marker-icon">0</div>
          </div></Link>
          
        </div>
      </nav>
    </>
  );
};

export { Navbar };
