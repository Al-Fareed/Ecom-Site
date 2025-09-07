import React from 'react';
import './Footer.css';   // external css
import Button from './Button/Button';
import { Link } from 'react-router-dom';

const Footer = () => {
    const handleFreeConsultationBtn = () =>{
        alert("Oh you want free consultation!!!")
    }
  return (
    <footer className="footer">
      <div className="footer-top">
        {/* Left Section */}
        <div className="footer-section">
          <h3 className="footer-title">EDEN CLICK EVENTS</h3>
          <p>
            We turn your event dreams into reality with stress-free planning, creative design, 
            and flawless execution. Your perfect event is our passion.
          </p>
          <div className="social-icons">
            {/* <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
            <a href="#"><i className="fab fa-pinterest"></i></a> */}
          </div>
        </div>

        <div className="footer-section">
          <h4 className="footer-subtitle">COMPANY</h4>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/events">Events</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="footer-subtitle">GET IN TOUCH</h4>
          <p>📍 No.412 11, 1st Floor, 12th Main, 6th Block, Rajajinagar - 560010, Bangalore</p>
          <p>📞 +91 8147125819</p>
          <p>✉️ edenclicks@gmail.com</p>
          {/* <button className="consult-btn">Free Consultation</button> */}
          <Button text="Free Consultation" onClickFunction={handleFreeConsultationBtn} />
          <p className="intl-offices"><strong>International Offices:</strong></p>
          <ul>
            <li>📍 Dubai, UAE</li>
            <li>📍 Colombo, Sri Lanka</li>
            <li>📍 Kathmandu, Nepal</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Eden Click Events © 2025, All Rights Reserved</p>
        <p><strong>Merchant Name:</strong> Mourise Dsouza</p>
        <div className="footer-links">
          <Link to={"/privacy-policy"} onClick={() => window.scrollTo(0, 0)} >Privacy Policy</Link>
          <Link to={"/terms"} onClick={() => window.scrollTo(0, 0)} >Terms of Service</Link>
          {/* <a href="#">Terms of Service</a> */}
          <Link to={"/refund-policy"} onClick={() => window.scrollTo(0, 0)} >Refund Policy</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
