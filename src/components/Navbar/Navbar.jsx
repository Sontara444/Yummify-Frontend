import React, { useState } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import { assets } from "../../assets/assets";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?q=${searchQuery}`);
    setIsSearchVisible(false);
  };

  const handleLoginClick = () => {
    setIsLoggedIn(!isLoggedIn);
    navigate(isLoggedIn ? "/" : "/login-signup");
  };

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
  };
  const isActive = (path) => location.pathname === path;
  return (
    <nav className="navbar">
      <div className="brand">
        <a href="/" className="brand">
          Yummify
        </a>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/" className={isActive("/") ? "active" : ""}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/menu" className={isActive("/menu") ? "active" : ""}>
              Menu
            </Link>
          </li>
          <li>
            <Link to="/about" className={isActive("/about") ? "active" : ""}>
              About
            </Link>
          </li>
          <li>
            <Link to="/order-online" className={isActive("/order-online") ? "active" : ""}>
              Order Online
            </Link>
          </li>
          <li>
            <Link to="/contact" className={isActive("/contact") ? "active" : ""}>
              Contact
            </Link>
          </li>
        </ul>

        {!isSearchVisible && (
          <button onClick={toggleSearch} className="search-button">
            <img src={assets.search_img} alt="Search" />
          </button>
        )}

        {isSearchVisible && (
          <form onSubmit={handleSearchSubmit} className="search-form">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search for food..."
            />
            <button type="submit">Search</button>
          </form>
        )}

        <button onClick={handleLoginClick} className="login-button">
          {isLoggedIn ? "Logout" : "Login"}
        </button>

        <button className="cart-button">
          <img src={assets.cart_img} alt="Cart" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
