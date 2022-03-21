import React from "react";
import { Link } from "react-router-dom";
import "./dealsOfTheDay.css";

const DealsOfTheDay = () => {
  return (
    <>
      <h2>Deals of the Day</h2>
      <Link to="/products">
        <div className="card-4">
            <div className="card-4-item" >
              <img src="" alt="image" />
              <p>jacket</p>
              <p>₹100</p>
              <button>Add to cart</button>
            </div>
        </div>
      </Link>
    </>
  );
};

export { DealsOfTheDay };
