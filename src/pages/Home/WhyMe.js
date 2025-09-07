import React from 'react';

const WhyMe = () => {
  return (
    <section className="whyme-section">
      <div className="why-me-container">
        {/* Section Header */}
        <div className="text-center mb-5">
          <h2 className="whyme-heading">WHY CLIENTS CHOOSE US</h2>
          <p className="whyme-subtitle">
            Because we treat every event like it's our own special celebration
          </p>
        </div>

        {/* Cards Grid */}
        <div className="card-wrapper">
          <div className="card-container">
            <div className="whyme-card">
              <i className="bi bi-clock-history whyme-icon"></i>
              <h4 className="whyme-title">We Handle Everything</h4>
              <p className="whyme-text">
                From the first phone call to the final cleanup – you relax while we work our magic. 
                It's like having a trusted friend take care of all the overwhelming details.
              </p>
            </div>
          </div>

          <div className="card-container">
            <div className="whyme-card">
              <i className="bi bi-palette whyme-icon"></i>
              <h4 className="whyme-title">Your Vision, Our Creativity</h4>
              <p className="whyme-text">
                We listen to your dreams and add our creative touch to bring them to life. 
                Every event reflects your unique style – because one-size-fits-all celebrations simply aren't our approach.
              </p>
            </div>
          </div>

          <div className="card-container">
            <div className="whyme-card">
              <i className="bi bi-shield-check whyme-icon gold"></i>
              <h4 className="whyme-title">Peace of Mind Guarantee</h4>
              <p className="whyme-text">
                Sleep well knowing experienced hands are managing every detail. 
                We've handled the unexpected so many times, we're practically fortune tellers when it comes to event planning!
              </p>
            </div>
          </div>

          <div className="card-container">
            <div className="whyme-card">
              <i className="bi bi-wallet2 whyme-icon"></i>
              <h4 className="whyme-title">Honest Pricing, Real Value</h4>
              <p className="whyme-text">
                No hidden surprises or last-minute charges. 
                We believe in transparent conversations about budget from day one, 
                because trust is the foundation of great partnerships.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyMe;
