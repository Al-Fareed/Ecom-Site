import React from 'react'
import data from '../../utils/data.json'
import './Products.css'
import Button from '../../components/Button/Button'
import { useNavigate } from 'react-router-dom'
const Products = () => {
  const navigate = useNavigate();
  const handleOrderNowBtn = (item) => {
    navigate('/checkout', { state: { productId: item } });
  }
  return (
    <div className='product-container'>
      <section className="celebration-section">
        <div className="container">
          <div className="text-center">
            <h1 className="celebration-heading">
              Every Celebration Has a Story
            </h1>
            <p className="celebration-text">
              Whether you're planning an intimate family dinner or the wedding of the century,
              we're here to bring your unique story to life. Browse through our services and
              imagine the possibilities.
            </p>
          </div>
        </div>
      </section>
      <div className='dox' >
        <p className='side-heading'>Products</p>
        <div className='products-wrapper'>
          {data && data.map((item, key) => (
            <div key={key} className='cards' >
              <div className='product-image'>
                <img src={item.src} alt='products' />
              </div>
              <div className='details-container'>
                <div><b>{item.title}</b></div>
                <div>{item.description}</div>
                <div className='card-footer' >
                  <span><b>₹{item.amount}</b></span>
                  <div className='buttons-container'>
                    <Button text="Book Now" onClickFunction={() => handleOrderNowBtn(item.id)} width={"100%"} height={"3rem"} />
                    <Button text="Contact Us" width={"100%"} height={"3rem"} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Products;

