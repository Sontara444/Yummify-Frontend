import React from "react";
import "./About.css";
import { assets } from "../../assets/assets";
import Testimonial from "../Testimonial/Testimonial";

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

     
      <Testimonial/>
      
    </div>
    
  );
};

export default About;
