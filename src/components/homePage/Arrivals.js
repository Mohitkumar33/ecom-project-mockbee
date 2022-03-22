import React from "react";
import { Link } from "react-router-dom";
import { useFilters } from "../../contexts/filters-context";
import "./arrivals.css";

const Arrivals = () => {
  const { filterDispatch } = useFilters();
  return (
    <>
      <div className="arrivals">
        <Link to="/products">
          <div
            className="summer-arrivals"
            onClick={()=>filterDispatch({ type: "SUMMER", payload: true })}
          >
            <div className="summer-image">
              <img
                src="https://res.cloudinary.com/dbfzfqfhl/image/upload/v1647523467/ecom%20item%20images/home%20page%20images/summer_cloths_qifpi2.jpg"
                alt=""
              />
            </div>
            <div className="summer-arrivals-info">
              <small>New arrivals</small>
              <h3>Summer Collection</h3>
              <p>Check out our best summer collection to stay out cool</p>
            </div>
          </div>
        </Link>
        <Link to="/products">
          <div
            className="winter-arrivals"
            onClick={()=>filterDispatch({ type: "WINTER", payload: true })}
          >
            <div className="winter-image">
              <img
                src="https://res.cloudinary.com/dbfzfqfhl/image/upload/v1647523467/ecom%20item%20images/home%20page%20images/winter_cloths_rg2tm7.jpg"
                alt=""
              />
            </div>
            <div className="winter-arrivals-info">
              <small>New arrivals</small>
              <h3>Winter Collection</h3>
              <p>Check out our best winter collection to stay out warm</p>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export { Arrivals };
