import React, { useContext, useState } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { AppContext } from "../../context/AppContext";
import { toast } from "react-toastify";
import axios from "axios";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const { userData, backendUrl, setIsLoggedin, setUserData } = useContext(AppContext);

  const navigate = useNavigate();
  const location = useLocation();

  const logout = async()=>{
    try {

      axios.defaults.withCredentials = true

      const {data} = await axios.post(backendUrl + '/api/auth/logout')

      data.success && setIsLoggedin(false)
      data.success && setUserData(false)
      navigate('/')
      
    } catch (error) {
      toast.error(error.message)
    }
  }

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?q=${searchQuery}`);
    setIsSearchVisible(false);
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
            <Link
              to="/order-online"
              className={isActive("/order-online") ? "active" : ""}
            >
              Order Online
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={isActive("/contact") ? "active" : ""}
            >
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
       <div className="navbar-profile-section group">
        {userData ? (
          <div className="navbar-profile">
            {userData.name[0].toUpperCase()}
            <div className="navbar-list-items" >
              <ul  className="navbar-list">
                {!userData.isAccountVerified && <li className="email-verify">Verify email</li>}
                
                <li onClick={logout} className="navbar-logout">Logout</li>
              </ul>
            </div>
          </div>
        ) : (
          <button onClick={()=> navigate('/login-signup')} className="login-button">
            login
            </button>
        )}
        </div>

        <button className="cart-button">
          <img src={assets.cart_img} alt="Cart" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
