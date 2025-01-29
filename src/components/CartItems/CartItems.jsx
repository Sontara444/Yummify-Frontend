import React, { useContext } from "react";
import "./CartItems.css";
import { AppContext } from "../../context/AppContext";
import { assets } from "../../assets/assets";
import { useNavigate } from "react-router-dom";

const CartItems = () => {
  const { food_list, cartItems, removeFromCart, getTotalCartAmount} =
    useContext(AppContext);

    const navigate = useNavigate()
  return (
    <div className="cart-items-container">
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div key={index}>
                <div className="cartitems-format cartitems-format-main">
                  <img src={item.image} alt="" className="carticon-product-icon" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <button className="cartitems-quantity">
                    {cartItems[item._id]}

                  </button>
                  <p>${item.price * cartItems[item._id]}</p>
                  <img onClick={()=> removeFromCart(item._id)}
                  className="cartitem-remove-icon" src={assets.cross_icon} alt="" />
                </div>
                <hr />
              </div>
            );
          }
          return null;
        })}
        <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Totals</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shipping Fees</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3>Total</h3>
              <h3>${getTotalCartAmount()}</h3>
            </div>
          </div>
          <button onClick={()=> navigate('/order')}>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartitems-promocode">
          <p>If you have a promo code , Enter it here</p>
          <div className="cartitems-promobox">
            <input type="text" placeholder="promo code" />
            <button>Submit</button>
          </div>
        </div>
      </div>

     
    </div>
  );
};

export default CartItems;
