import React, { useContext } from "react";
import "./FoodItem.css";
import { assets } from "../../assets/assets";
import { AppContext } from "../../context/AppContext.jsx";

const FoodItem = ({ id, name, price, description, image }) => {
  const {cartItems, addToCart, removeFromCart} = useContext(AppContext)
  // console.log(cartItems)

  return (
    <div className="food-item-container">
      <div className="food-img-container">
      <img src={image} alt={name} className="food-item-image" />
      {!cartItems[id] ? (
        <img
          className="add"
          onClick={()=>addToCart(id)}
          src={assets.add_icon_white}
          alt=""
        />
      ) : (
        <div className="food-item-counter">
          <img
            onClick={()=>removeFromCart(id)}
            src={assets.remove_icon_red}
            alt=""
          />
          <p>{cartItems[id]}</p>
          <img
            onClick={()=>addToCart(id)}
            src={assets.add_icon_green}
            alt=""
          />
        </div>
      )}
      <div className="food-item-card">
        <div className="food-item-text">
          <h3>{name}</h3>
          <img src={assets.rating_starts} alt="Rating" />
        </div>
        <p>{description}</p>
        <p>${price}</p>
      </div>
    </div>
    </div>
  );
};

export default FoodItem;
