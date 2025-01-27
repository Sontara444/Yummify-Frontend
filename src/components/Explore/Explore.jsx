import React from "react";
import "./Explore.css"; // Add your styles in this file
import { menu_list } from "../../assets/assets";

const Explore = ({ category, setCategory }) => {
 

  return (
    <div className="explore-container">
      <div className="explore-content">
        <h1 className="explore-title">What are you craving for?</h1>
        <p className="explore-text">
          Explore delicious recipes and fresh flavors, crafted with care to
          bring joy and nourishment to every meal.
        </p>

        <div className="explore-food-container">
          {menu_list.map((item, index) => (
            <div onClick={()=> setCategory(prev=>prev===item.menu_name? "All": item.menu_name)} className="explore-food-gallery" key={index}>
              <img 
                className={category === item.menu_name? "active_img": ""}
                src={item.menu_image}
                alt="dishes"
              />

              <p className="explore-food-title">{item.menu_name}</p>
            </div>
          ))}
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Explore;
