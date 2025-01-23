import React from "react";
import "./Menu.css"; // Add your styles in this file
import { food_list, menu_list } from "../../assets/assets";

const Menu = () => {
  return (
    <div className="menu-list-container">
        <h1 className="menu-header">What are you craving for?</h1>
        <p className="menu-text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi veniam id totam hic mollitia aliquam cupiditate ex neque error laborum?
        </p>

      <div className="menu-food-container">
        {menu_list.map((item, index) => (
          <div className="menu-food-gallery" key={index}>
              <img src={item.menu_image} alt="dishes" />
              <p className="menu-food-title">{item.menu_name}</p>
          </div>
        ))}
      </div>
      <div className="menu-top-dishes">
        {
          food_list.map((item, index)=>(
            <div className="menu-top-dishes-items" key={index}>
              <img src={item.image} alt="" />
              <div className="menu-top-text">
                
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p>{item.price}</p>
              </div>

            </div>
          ))
        }

      </div>
        
    </div>
  );
};

export default Menu;
