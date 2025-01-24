import React from 'react'
import "./Explore.css"; // Add your styles in this file
import {  menu_list } from "../../assets/assets";

const Explore = () => {
  return (
    <div>
        <div className="explore-container">
              <h1 className="explore-title">What are you craving for?</h1>
              <p className="explore-text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi veniam
                id totam hic mollitia aliquam cupiditate ex neque error laborum?
              </p>
        
              <div className="explore-food-container">
                {menu_list.map((item, index) => (
                  <div className="explore-food-gallery" key={index}>
                    <img src={item.menu_image} alt="dishes" />
                    
                    <p className="explore-food-title">{item.menu_name}</p>
                  </div>
                ))}
              </div>
              
            </div>
    </div>
  )
}

export default Explore