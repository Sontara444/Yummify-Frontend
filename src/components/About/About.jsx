import React from "react";
import "./About.css";
import { assets, menu_list } from "../../assets/assets";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-sub-container">
        <img src={assets.hero3_img} alt="About Us" className="about-image" />
        <div className="about-content-text">
          <h1 className="about-title">About Us</h1>
          <p className="about-content">
            Welcome to <span className="about-highlight">Yummify </span>, your
            ultimate destination for delicious meals and inspiring recipes. Our
            mission is to bring people together through the joy of food,
            celebrating its power to connect, comfort, and delight. Whether
            you’re an experienced chef or a beginner, we provide a wide range of
            recipes, tips, and resources to make cooking fun and approachable.
            At Yummify, we believe in using fresh, wholesome ingredients and
            simple techniques to create memorable meals for any occasion. From
            quick, everyday dinners to indulgent weekend treats, our collection
            has something for everyone. Discover new flavors, master essential
            cooking skills, and make every meal special with Yummify. Join us in
            creating moments of joy, one delicious dish at a time!
          </p>
        </div>
      </div>

      <p className="about-content">
        At <span className="about-highlight">Yummify</span>, we value quality
        ingredients, sustainable practices, and the art of cooking. Join our
        community and explore the endless possibilities of flavor and
        creativity.
      </p>
      <div className="about-explore-container">
        <h2 className="about-explore">Explore</h2>
        <div className="hero-food-container">
          {menu_list.map((item, index) => (
            <div className="hero-food-gallery" key={index}>
              <div className="hero-food-item">
                <img src={item.menu_image} alt="dishes" />
                <p className="hero-food-para">{item.menu_name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
