import React from 'react'
import './ContactUs.css'
import Button from '../../components/Button/Button'
const ContactUs = () => {
    return (
        <div className='cnt-cnt-out'>
            <section className="hero-section text-white">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="hero-content-animated">
                            <h1 className="display-4 hero-main-heading mb-5">
                            Get In Touch With,<br />
                                <span className="hero-accent-text">Eden Click Events</span>
                            </h1>

                            <p className="lead mb-5">
                            Ready to bring your event vision to life? Let's start planning something extraordinary together. Our team is here to make your special day unforgettable.
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
                                <Button
                                    styles={{
                                        "height": "5rem",
                                        "fontSize": "20px",
                                        "padding": "0 2rem",
                                        "border": "2px solid white",
                                        "borderRadius": "5px"
                                    }}
                                    // onClickFunction={}
                                >
                                    <i class="bi bi-calendar-plus-fill"></i> Book Your Event
                                </Button>

                                <Button
                                    // onClickFunction={handleViewProductBtn}
                                    styles={{
                                        "height": "5rem",
                                        "fontSize": "20px",
                                        "padding": "0 2rem",
                                        "background": "transparent",
                                        "borderRadius": "5px",
                                        "border": "2px solid #d4af37"
                                    }}
                                >
                                    <i class="bi bi-calendar-event-fill"></i> View Events
                                </Button>
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

export default ContactUs
