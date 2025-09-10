import React from 'react'
import data from '../../utils/data.json'
import './Events.css'
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
                    <Button 
                    styles={{
                      "borderRadius":"4px"
                    }}
                    onClickFunction={() => handleOrderNowBtn(item.id)}
                    >
                    Book Now
                    </Button>
                    <Button 

                    styles={{
                      "backgroundColor":"white",
                      "border":"2px solid #d4af37",
                      "color":"black",
                      "borderRadius":"4px"
                    }} >
                    Contact Us
                    </Button>
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

