import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import "../styles/navbar.css";

// Component for rendering the navigation bar.
const Navbar = () => {
  const { cartProductIds } = useSelector((state) => state.cart);
  const cartNumOfItems = cartProductIds.length;

  return (
    <nav className="navbar">
      <NavLink to="/" end>
        <i className="bi bi-shop-window" />
      </NavLink>

      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "selected" : "")}
        title="products"
        end
      >
        <i className="bi bi-grid" />
      </NavLink>

      <NavLink
        to="/cart"
        title="cart"
        className={({ isActive }) => `${isActive && "selected"}`}
      >
        <i className="bi bi-cart3" />
        {!!cartNumOfItems && (
          <sup className="cart-number">{cartNumOfItems}</sup>
        )}
      </NavLink>
    </nav>
  );
};

export default React.memo(Navbar);
