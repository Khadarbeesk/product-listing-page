import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Filters from "./components/Filters";
import ProductGrid from "./components/ProductGrid";
import Footer from "./components/Footer";

function App() {
  const [products, setProducts] = useState([]);
  const [openDropdown, setOpenDropdown] = useState(false); // desktop
  const [mobileDropdown, setMobileDropdown] = useState(false); // mobile
  const [showFilter, setShowFilter] = useState(true);
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <>
      <Header />

      <section className="container">
        {/* 🔥 CLICK OUTSIDE CLOSE */}
        <div
          className="main-container"
          onClick={() => {
            setMobileDropdown(false);
            setOpenDropdown(false);
          }}
        >

          {/* DESKTOP TOOLBAR */}
          <div className="toolbar">
            <div className="toolbar-left">
              <span className="items">3425 ITEMS</span>

              <span
                className="filter-toggle"
                onClick={() => setShowFilter(!showFilter)}
              >
                <img src="/arrow-left.png"  alt="arrow" className="filter-arrow" />
                {showFilter ? "HIDE FILTER" : "SHOW FILTER"}
              </span>
            </div>

            <div className="toolbar-right">
              <div
                className={`dropdown-container ${openDropdown ? "open" : ""}`}
                onClick={(e) => e.stopPropagation()}
              >
                <div
                  className="sort"
                  onClick={(e) => {
                    e.stopPropagation();
                    setOpenDropdown(!openDropdown);
                  }}
                >
                  RECOMMENDED
                  <img src="/arrow-down.png"  alt="arrow" className="dropdown-arrow" />
                </div>

                {openDropdown && (
                  <div
                    className="dropdown-menu"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <p>✓ RECOMMENDED</p>
                    <p>NEWEST FIRST</p>
                    <p>POPULAR</p>
                    <p>PRICE : HIGH TO LOW</p>
                    <p>PRICE : LOW TO HIGH</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* MOBILE BAR */}
          <div className="mobile-bar">

            {/* FILTER BUTTON */}
            <span
              className="mobile-filter"
              onClick={(e) => {
                e.stopPropagation();
                setMobileFilterOpen(true);
                setMobileDropdown(false);
              }}
            >
              FILTER
            </span>

            {/* FILTER PANEL */}
            {mobileFilterOpen && (
              <>
                <div
                  className="overlay-bg"
                  onClick={() => setMobileFilterOpen(false)}
                ></div>

                <div
                  className="mobile-filter-panel"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="filter-header-mobile">
                    <h3>FILTER</h3>
                    <span onClick={() => setMobileFilterOpen(false)}>✕</span>
                  </div>

                  <Filters />
                </div>
              </>
            )}

            {/* SORT BUTTON */}
            <div
              className="mobile-sort"
              onClick={(e) => {
                e.stopPropagation();
                setMobileDropdown(!mobileDropdown);
              }}
            >
              RECOMMENDED
              <img src="/arrow-left.png"  alt="arrow" className="dropdown-arrow" />
            </div>

            {/* MOBILE DROPDOWN */}
            {mobileDropdown && (
              <div
                className="mobile-dropdown"
                onClick={(e) => e.stopPropagation()}
              >
                <p>✓ RECOMMENDED</p>
                <p>NEWEST FIRST</p>
                <p>POPULAR</p>
                <p>PRICE : HIGH TO LOW</p>
                <p>PRICE : LOW TO HIGH</p>
              </div>
            )}

          </div>

          {/* CONTENT */}
          <div className={`content ${!showFilter ? "full" : ""}`}>
            {showFilter && <Filters />}
            <ProductGrid products={products} />
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}

export default App;