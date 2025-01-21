import React from "react";
import "./Footer.css"; // Import the CSS file
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <h4>About Us</h4>
          <p>We bring delicious food right to your doorstep.</p>
          <p>Enjoy fresh meals with a variety of options,
          only at Yummyfy!</p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/menu">Menu</a>
            </li>
            <li>
              <a href="/order">Order Online</a>
            </li>
            <li>
              <a href="/contact">Contact Us</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Learn more</h4>
          <ul>
            <li>
              <a href="privacy/">Privacy</a>
            </li>
            <li>
              <a href="/security">Security</a>
            </li>
            <li>
              <a href="/terms">Terms</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Customer Support: <br />
            support@yummify.com</p>
          <p>Franchise Enquiry: <br />
            info@yummify.com</p>
          <p>Phone: 123-456-7890</p>
        </div>

        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="/" className="social-icon">
              <img src={assets.facebook_icon} alt="" />
            </a>
            <a href="/" className="social-icon">
              <img src={assets.twitter_icon} alt="" />
            </a>
            <a href="/" className="social-icon">
              <img src={assets.linkedin_icon} alt="" />
            </a>
            <a href="/" className="social-icon">
              <img src={assets.insta_icon} alt="" />
            </a>
          </div>
          <div className="footer-app-store">
            <a href="/">
              <img className="hero_store" src={assets.app_store} alt="" />
            </a>
            <a href="/">
              <img className="hero_store" src={assets.play_store} alt="" />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom ">
        <p>&copy; 2025 Yummyfy. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
