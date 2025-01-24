import React from "react";
import "./FoodItem.css";
import { assets } from "../../assets/assets";

const FoodItem = ({ id, name, price, description, image }) => {
  return (
    <div className="food-item-container">
      <img src={image} alt={name} />
      <div className="food-item-card">
        <div className="food-item-text">
          <h3>{name}</h3>
          <img src={assets.rating_starts} alt="Rating" />
        </div>
        <p>{description}</p>
        <p>${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
