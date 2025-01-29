import React, { useContext } from 'react'
import "./PlaceOrder.css"
import { AppContext } from '../../context/AppContext'

const PlaceOrder = () => {

    const {getTotalCartAmount} = useContext(AppContext)

  return (
    <form className='place-order'>
        <div className="place-order-left">
            <p className="title">Delivery Information</p>
            <div className="multi-fields">
                <input type="text"placeholder='first Name'/>
                <input type="text"placeholder='Last Name'/>
            </div>
            <input type="email" placeholder='Email address'/>
            <input type="text" placeholder='Street'/>
            <div className="multi-fields">
                <input type="text"placeholder='City'/>
                <input type="text"placeholder='State'/>
            </div>
            <div className="multi-fields">
                <input type="text"placeholder='Zip code'/>
                <input type="text"placeholder='Country'/>
            </div>
            <input type="text" placeholder='Phone' />
        </div>
        <div className="place-order-right">
        <div className="place-order-total">
          <h1>Cart Totals</h1>
          <div>
            <div className="place-order-total-item">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="place-order-total-item">
              <p>Shipping Fees</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="place-order-total-item">
              <h3>Total</h3>
              <h3>${getTotalCartAmount()}</h3>
            </div>
          </div>
          <button >PROCEED TO PAYMENT</button>
        </div>
        </div>
    </form>
  )
}

export default PlaceOrder   