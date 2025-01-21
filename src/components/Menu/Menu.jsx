import React from 'react';
import './Menu.css'; // Add your styles in this file
import { menu_list } from '../../assets/assets';

const Menu = () => {
  return (
    <div className="menu-list-container">
      <p className='menu-list-title'>What are you craving for?</p>
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
  );
};

export default Menu;
