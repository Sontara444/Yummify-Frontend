import React, { useContext } from "react";
import "./Menu.css"; // Add your styles in this file
import { AppContext } from "../../context/AppContext.jsx";
import FoodItem from "../FoodItem/FoodItem.jsx";

const Menu = ({ category }) => {
  const { food_list } = useContext(AppContext);
  return (
    <div className="menu-list-container">
      <div className="menu-top-dishes">
        <h1 className="menu-top-header">Top dishes near you?</h1>
        <div className="menu-top-dishes-container">
          {food_list.map((item, index) => (
            <FoodItem
              key={index}
              id={item.id}
              name={item.name}
              price={item.price}
              description={item.description}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
