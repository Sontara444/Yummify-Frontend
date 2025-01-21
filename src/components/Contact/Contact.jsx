import React, { useState } from "react";
import "./Contact.css"; // Import the CSS file
import { assets } from "../../assets/assets";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    contactNumber: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // Add your form submission logic here
  };

  return (
    <div className="contact-container">
      <header className="contact-header">We Would love to hear from you</header>

      <div className="contact-info">
        <div className="contact-card">
          <div className="contact-card-icon">
            <img src={assets.address_icon} alt="" />
          </div>
          <h3>Address</h3>
          <p>Booth No. 10, Sector 110, New Delhi, 110061</p>
        </div>
        <div className="contact-card">
          <div className="contact-card-icon">
            <img src={assets.email_icon} alt="" />
          </div>
          <h3>Email for Customer Support</h3>
          <p>support@yummify.in</p>
        </div>
        <div className="contact-card">
          <div className="contact-card-icon">
            <img src={assets.email_icon} alt="" />
          </div>
          <h3>Email for Franchise Enquiry</h3>
          <p>info@yummify.in</p>
        </div>
        <div className="contact-card">
          <div className="contact-card-icon">
            <img src={assets.phone_icon} alt="" />
          </div>
          <h3>Phone</h3>
          <p>+91-8882534230</p>
        </div>
      </div>

      <h2 className="contact-us-header">Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="contact-wrapper">
          {/* First Row for Name */}
          <div className="form-group-row">
            <div className="form-group">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="input"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="input"
              />
            </div>
          </div>

          {/* Second Row for Contact Number and Email */}
          <div className="form-group-row">
            <div className="form-group">
              <input
                type="text"
                name="contactNumber"
                placeholder="Contact Number"
                value={formData.contactNumber}
                onChange={handleChange}
                required
                className="input"
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className="input"
              />
            </div>
          </div>

          {/* Third Row for Message */}
          <div className="form-group">
            <textarea
              name="message"
              rows="8"
              placeholder="Write your message..."
              value={formData.message}
              onChange={handleChange}
              required
              className="textarea"
            />
          </div>

          <div className="form-group">
            <button type="submit" className="submit-btn">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
