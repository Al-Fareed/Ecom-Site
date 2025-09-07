import React from 'react'
import { useLocation } from 'react-router-dom';
import data from '../../utils/data.json'
import './Checkout.css'
const Checkout = () => {
    const location = useLocation();
  const { productId } = location.state || {};
const itemData = data.find((item)=> item.id === productId )
console.log(itemData);
const tax = 0.18*itemData.amount;
  return (
    <div className='checkout-container'>
        <div className='checkout-header' >
            <div className='circle'></div>
            <h1>Complete Your Order</h1>
            <p>Please provide your details to confirm your order service</p>
        </div>
      <div className="row">
        {/* Left Side (Form) */}
        <div className="col-75" >
          <div className="left-container">
            <form action="/action_page.php">
              <div className="row">
                <div className="col-50">
                  <h3>Billing Details</h3>
                  <label htmlFor="fname">
                    <i className="fa fa-user"></i> Full Name
                  </label>
                  <input type="text" id="fname" name="firstname" placeholder="John M. Doe" />

                  <label htmlFor="email">
                    <i className="fa fa-envelope"></i> Email
                  </label>
                  <input type="text" id="email" name="email" placeholder="john@example.com" />

                  <label htmlFor="adr">
                    <i className="fa fa-address-card-o"></i> Address
                  </label>
                  <input type="text" id="adr" name="address" placeholder="542 W. 15th Street" />

                  <label htmlFor="city">
                    <i className="fa fa-institution"></i> City
                  </label>
                  <input type="text" id="city" name="city" placeholder="New York" />

                  <div className="row">
                    <div className="col-50">
                      <label htmlFor="state">State</label>
                      <input type="text" id="state" name="state" placeholder="NY" />
                    </div>
                    <div className="col-50">
                      <label htmlFor="zip">Zip</label>
                      <input type="text" id="zip" name="zip" placeholder="10001" />
                    </div>
                  </div>
                </div>

                
              </div>

              <label>
                <input type="checkbox" defaultChecked name="sameadr" /> Shipping address same as billing
              </label>
              <input type="submit" value="Continue to checkout" className="btn" />
            </form>
          </div>
        </div>

        {/* Right Side (Cart) */}
        <div className="col-25">
          <div className="right-container">
            <h2>
              Order Summary
            </h2>
            <p className='cont-xuv'>
              <span>{itemData.title}</span> <span className="price">{itemData.amount}</span>
            </p>
            <p className='cont-xuv'>
              <span>GST - 18%</span> <span className="price">{tax}</span>
            </p>
            <hr />
            <p className='cont-xuv'>
              <span >Total</span>
              <span className="price" style={{ color: "black" }}>
                <b>{tax+itemData.amount}</b>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout
