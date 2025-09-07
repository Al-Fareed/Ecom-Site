import React from "react";
import "./About.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const About = () => {
  const services = [
    {
      icon: "💼",
      title: "Corporate Celebrations",
      description:
        "When your company achieves something amazing, it deserves a celebration that matches that excitement. We turn business milestones into moments everyone will remember and talk about long after they leave.",
    },
    {
      icon: "💙",
      title: "Wedding Dreams",
      description:
        "From the nervous excitement of the engagement to the happy tears during the ceremony – we understand that every Indian wedding is a festival of emotions. We're here to make sure yours is absolutely perfect.",
    },
    {
      icon: "🎈",
      title: "Life's Sweet Moments",
      description:
        "Birthday surprises that make hearts skip a beat, anniversary celebrations that honor love stories, and family gatherings where three generations laugh together – these are the moments we live for.",
    },
    {
      icon: "🎯",
      title: "Complete Peace of Mind",
      description:
        "While you're getting ready or greeting guests, we're making sure the flowers are fresh, the sound is perfect, and every single detail is exactly as you dreamed. That's our promise to you.",
    },
  ];
  return (
    <div className="abt-cnt">
      <section className="about-section">
      <div className="container about-container">
        {/* Left side - Text */}
        <div className="about-text">
          <p className="about-subtitle">ABOUT US</p>
          <h2 className="about-title">Welcome to Eden Clicks Events</h2>
          <p className="about-description">
            You know that feeling when you walk into a beautifully organized event and everything
            just feels perfect? The decorations, the atmosphere, the seamless flow, the genuine
            connections happening all around? That’s exactly what we aim to create at every single
            gathering. We're not just event planners – we're memory makers, stress-busters, and the
            people who genuinely care about making your special occasion as wonderful as you've
            always imagined it to be.
          </p>

          {/* Stats */}
          <div className="about-stats">
            <div className="stat-item">
              <div className="stat-icon">
                <i className="bi bi-trophy"></i>
              </div>
              <div>
                <h3>8+</h3>
                <p>Years Creating Magic</p>
              </div>
            </div>

            <div className="stat-item">
              <div className="stat-icon">
                <i className="bi bi-star-fill"></i>
              </div>
              <div>
                <h3>500+</h3>
                <p>Happy Clients</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Image */}
        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1521336575822-6da63fb45455"
            alt="Eden Clicks Event"
          />
        </div>
      </div>
    </section>
    <section className="what-we-love">
      <h2 className="section-title">What We Love Doing</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="icon-circle">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
    </div>
  );
};

export default About;
