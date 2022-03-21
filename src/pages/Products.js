import React from "react";
import "./products.css";
import { Navbar } from "../components/navbar/Navbar";
import { Footer } from "../components/footer/Footer";
import { useFilters } from "../contexts/filters-context";
import { useProducts } from "../contexts/products-context";
import {
  filterByPrice,
  dataAfterPriceRange,
  filterByDiscount,
  filterByGender,
  filterByRating,
  filterBySeason,
  filterBySearch,
} from "../utilitites/index";

const Products = () => {
  const { productsState } = useProducts();
  const { filterState, filterDispatch } = useFilters();
  console.log(productsState.productsState);
  const dataWithoutSearch = filterByDiscount(
    filterState.discount,
    filterByGender(
      filterState.men,
      filterState.women,
      filterByRating(
        filterState.rating,
        filterBySeason(
          filterState.summer,
          filterState.winter,
          filterByPrice(
            filterState.sortByPrice,
            dataAfterPriceRange(
              filterState.priceRange,
              productsState.productsData
            )
          )
        )
      )
    )
  );

  const finalData = filterBySearch(filterState.searchInput, dataWithoutSearch);

  return (
    <>
      <Navbar />
      <div className="filters">
        {/* <!-- left side filter started --> */}
        <aside className="sort-filter">
          <div className="clear-button">
            <h3>Filters</h3>
            <button
              onClick={() =>
                filterDispatch({
                  type: "CLEAR_ALL",
                })
              }
            >
              Clear
            </button>
          </div>
          <h3>Price</h3>
          <div className="slider-input-setting">
            <label htmlFor="slider-input">
              0 <span>2500</span> <span>5000</span>
            </label>
            <input
              className="slider-input"
              type="range"
              id="points"
              name="points"
              min={0}
              max={5000}
              defaultValue={filterState.priceRange}
              onChange={(e) =>
                filterDispatch({ type: "PRICE_RANGE", payload: e.target.value })
              }
            />
            <div>Price range: 0 to{filterState.priceRange}</div>
          </div>

          <h3>Gender</h3>
          <div className="checkbox-input">
            <label>
              <input
                type="checkbox"
                checked={filterState.men}
                onChange={(e) =>
                  filterDispatch({ type: "MEN", payload: e.target.checked })
                }
              />
              Men Clothing
            </label>
            <label>
              <input
                type="checkbox"
                checked={filterState.women}
                onChange={(e) =>
                  filterDispatch({ type: "WOMEN", payload: e.target.checked })
                }
              />
              Women Clothing
            </label>
          </div>
          <h3>Season</h3>
          <div className="checkbox-input">
            <label>
              <input
                type="checkbox"
                checked={filterState.summer}
                onChange={(e) =>
                  filterDispatch({ type: "SUMMER", payload: e.target.checked })
                }
              />
              Summer
            </label>

            <label>
              <input
                type="checkbox"
                checked={filterState.winter}
                onChange={(e) =>
                  filterDispatch({ type: "WINTER", payload: e.target.checked })
                }
              />
              Winter
            </label>
          </div>
          <h3>Rating</h3>
          <div className="radio-input">
            <label>
              <input
                type="radio"
                value={4}
                name="star_rating"
                onChange={(e) =>
                  filterDispatch({
                    type: "STAR_RATING",
                    payload: e.target.value,
                  })
                }
              />
              4 Stars & above
            </label>
            <label>
              <input
                type="radio"
                value={3}
                name="star_rating"
                onChange={(e) =>
                  filterDispatch({
                    type: "STAR_RATING",
                    payload: e.target.value,
                  })
                }
              />
              3 Stars & above
            </label>
            <label>
              <input
                type="radio"
                value={2}
                name="star_rating"
                onChange={(e) =>
                  filterDispatch({
                    type: "STAR_RATING",
                    payload: e.target.value,
                  })
                }
              />
              2 Stars & above
            </label>
            <label>
              <input
                type="radio"
                value={1}
                name="star_rating"
                onChange={(e) =>
                  filterDispatch({
                    type: "STAR_RATING",
                    payload: e.target.value,
                  })
                }
              />
              1 Stars & above
            </label>
          </div>
          <h3>Sort by</h3>
          <div className="radio-input">
            <label>
              <input
                type="radio"
                value="PRICE_LOW_TO_HIGH"
                name="price_sort"
                onChange={(e) =>
                  filterDispatch({
                    type: "PRICE_SORT",
                    payload: e.target.value,
                  })
                }
              />
              Price - Low to High
            </label>
            <label>
              <input
                type="radio"
                value="PRICE_HIGH_TO_LOW"
                name="price_sort"
                onChange={(e) =>
                  filterDispatch({
                    type: "PRICE_SORT",
                    payload: e.target.value,
                  })
                }
              />
              Price - High to Low
            </label>
          </div>
          <h3>Discount</h3>
          <div className="radio-input">
            <label>
              <input
                type="radio"
                value={50}
                name="discount"
                onChange={(e) =>
                  filterDispatch({ type: "DISCOUNT", payload: e.target.value })
                }
              />
              50% & above
            </label>
            <label>
              <input
                type="radio"
                value={40}
                name="discount"
                onChange={(e) =>
                  filterDispatch({ type: "DISCOUNT", payload: e.target.value })
                }
              />
              40% & above
            </label>
            <label>
              <input
                type="radio"
                value={30}
                name="discount"
                onChange={(e) =>
                  filterDispatch({ type: "DISCOUNT", payload: e.target.value })
                }
              />
              30% & above
            </label>
            <label>
              <input
                type="radio"
                value={20}
                name="discount"
                onChange={(e) =>
                  filterDispatch({ type: "DISCOUNT", payload: e.target.value })
                }
              />
              20% & above
            </label>
            <label>
              <input
                type="radio"
                value={10}
                name="discount"
                onChange={(e) =>
                  filterDispatch({ type: "DISCOUNT", payload: e.target.value })
                }
              />
              10% & above
            </label>
            <label>
              <input
                type="radio"
                value={0}
                name="discount"
                onChange={(e) =>
                  filterDispatch({ type: "DISCOUNT", payload: e.target.value })
                }
              />
              No discount
            </label>
          </div>
        </aside>
        {/* <!-- left side filter ended --> */}

        {/* <!-- all products listing started --> */}
        <div className="product-listing-setting">
          <div className="products-listing">
            <h3 className="listing-heading">
              Showing All Products
              <span>
                <small>(Showing {finalData.length} products)</small>
              </span>
            </h3>
            <div className="listing-column">
              {finalData.map((i) => (
                <div className="card-2" key={i._id}>
                  <div className="card-2-col-1">
                    <img src={i.image} alt={i.name} />
                  </div>
                  <div className="card-2-col-2">
                    <h3>{i.name}</h3>
                    <small className="brand-style">by {i.brand}</small>
                    <p className="discount-price">
                      ₹{i.mrp - (i.mrp * i.discount) / 100}{" "}
                      <span className="original-price">
                        ₹{i.mrp} <span className="line-on-price"></span>
                      </span>
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
                      <button className="card-2-button-1">Buy Now</button>
                    </div>
                    <div>
                      <button className="card-2-button-2">Add To Cart</button>
                    </div>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="card-icon-products"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    // onClick={() => {
                    //   state.wishlist = state.wishlist.concat(i);
                    // doInWishlist(i._id)
                    // }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export { Products };
