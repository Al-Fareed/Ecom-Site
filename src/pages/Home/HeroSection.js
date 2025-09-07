import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/Button/Button'

const HeroSection = () => {
    const navigate = useNavigate();
    const handleViewProductBtn = () =>{
        navigate('/product')
    }
  return (
    <div>
      <section className="hero-section text-white">
      <div className="container">
        <div className="row align-items-center">
          <div className="hero-content-animated">
            <h1 className="display-4 hero-main-heading mb-5">
              Stress-Free Events,<br />
              <span className="hero-accent-text">Priceless Memories</span>
            </h1>

            <p className="lead mb-5">
              We've been there – the late-night planning sessions, the endless
              vendor calls, the stress of getting everything perfect. That's
              exactly why we started Eden Click Events. We take that burden off
              your shoulders, so you can focus on what truly matters –
              celebrating your precious moments with the people who matter most.
            </p>

            {/* Value Propositions */}
            <div className="mb-5">
              <div className="d-flex align-items-center mb-3">
                <i className="fas fa-check-circle text-gold me-3"></i>
                <span className="text-white-75">
                  No more sleepless nights worrying about arrangements
                </span>
              </div>
              <div className="d-flex align-items-center">
                <i className="fas fa-check-circle text-gold me-3"></i>
                <span className="text-white-75">
                  Personal attention to every detail, treating each event with
                  care
                </span>
              </div>
            </div>

            {/* Buttons */}
            <div className="d-flex flex-wrap mb-5 button-group">
             <Button width="10rem" height="3rem"  text={"View Products"} onClickFunction={handleViewProductBtn} />
            </div>

            {/* Stats */}
            <div className="hero-stats">
              <div className="grid-container">
                <div className="col-4">
                  <div className="h4 fw-bold mb-1">500+</div>
                  <small>Happy Clients</small>
                </div>
                <div className="col-4">
                  <div className="h4 fw-bold mb-1">50+</div>
                  <small>Trusted Partners</small>
                </div>
                <div className="col-4">
                  <div className="h4 fw-bold mb-1">98%</div>
                  <small>Satisfied Customers</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default HeroSection
