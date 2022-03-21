import React from "react";
import { Link } from "react-router-dom";
import "./advertisements.css";

const Advertisements = () => {
  return (
    <>
      <Link to="/products">
        <div class="advertisement-box">
          <img
            src="https://res.cloudinary.com/dbfzfqfhl/image/upload/v1647523467/ecom%20item%20images/home%20page%20images/crazydealss_ijqotk.webp"
            alt="advertisement_image"
          />
        </div>
      </Link>
    </>
  );
};

export { Advertisements };
