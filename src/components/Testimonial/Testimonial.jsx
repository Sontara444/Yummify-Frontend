import React from "react";
import "./Testimonial.css";
import { assets } from "../../assets/assets";

const Testimonial = () => {
  return (
    <div>
      <section id="testimonials">
        <h2 className="testimonial-title">What our customers say</h2>
        <div className="testimonial-container container">
          <div className="testimonial-box">
            <div className="star-rating">
              <img src={assets.rating_starts} alt="" />
            </div>
            <p className="testimonial-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              quaerat et pariatur enim amet vel?
            </p>
            <div className="customer-detail">
              <div className="customer-photo">
                <img src={assets.male_photo1} alt="" />
              </div>
              <p className="customer-name">john Doe</p>
            </div>
          </div>

          <div className="testimonial-box">
            <div className="star-rating">
              <img src={assets.rating_starts} alt="" />
            </div>
            <p className="testimonial-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              quaerat et pariatur enim amet vel?
            </p>
            <div className="customer-detail">
              <div className="customer-photo">
                <img src={assets.male_photo2} alt="" />
              </div>
              <p className="customer-name">Jay Doe</p>
            </div>
          </div>

          <div className="testimonial-box">
            <div className="star-rating">
              <img src={assets.rating_starts} alt="" />
            </div>
            <p className="testimonial-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              quaerat et pariatur enim amet vel?
            </p>
            <div className="customer-detail">
              <div className="customer-photo">
                <img src={assets.male_photo3} alt="" />
              </div>
              <p className="customer-name">Jolly Doe</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
