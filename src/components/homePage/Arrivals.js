import React from "react";
import "./arrivals.css";

const Arrivals = () => {
  return (
    <>
      <div className="arrivals">
        <div className="summer-arrivals">
          <div className="summer-image">
            <img src="https://res.cloudinary.com/dbfzfqfhl/image/upload/v1647523467/ecom%20item%20images/home%20page%20images/summer_cloths_qifpi2.jpg" alt="" />
          </div>
          <div className="summer-arrivals-info">
            <small>New arrivals</small>
            <h3>Summer Collection</h3>
            <p>Check out our best summer collection to stay out cool</p>
          </div>
        </div>
        <div className="winter-arrivals">
          <div className="winter-image">
            <img src="https://res.cloudinary.com/dbfzfqfhl/image/upload/v1647523467/ecom%20item%20images/home%20page%20images/winter_cloths_rg2tm7.jpg" alt="" />
          </div>
          <div className="winter-arrivals-info">
            <small>New arrivals</small>
            <h3>Winter Collection</h3>
            <p>Check out our best winter collection to stay out warm</p>
          </div>
        </div>
      </div>
    </>
  );
};

export {Arrivals}