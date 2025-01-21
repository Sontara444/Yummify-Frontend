import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-section">
        <div className="hero-content">
          <h1>Welcome to Yummify</h1>
          <p>
            Discover delicious recipes and your favorite meals, all in one
            place.
          </p>
          <a href="#recipes" className="btn">
            Explore Recipes
          </a>
        </div>
      </div>
      
    </div>
  );
};

export default Hero;
