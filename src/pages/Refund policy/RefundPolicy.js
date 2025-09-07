import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import './RefundPolicy.css'
const RefundPolicy = () => {
    return (
        <div className='ref-pol-cnt'>
            <section
      className="section-spacing"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
      }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10 col-xl-8">
            {/* Header */}
            <div className="text-center mb-5">
              <div
                className="d-inline-flex align-items-center justify-content-center bg-warning bg-opacity-10 rounded-circle mb-3"
                style={{ width: "80px", height: "80px" }}
              >
                <i className="bi bi-arrow-repeat text-warning" style={{ fontSize: "2.5rem" }}></i>
              </div>
              <h1 className="h2 luxury-heading text-dark mb-2">Refund Policy</h1>
              <p className="text-muted mb-0">
                Understanding your rights and options regarding event bookings
              </p>
            </div>

            {/* Refund Content Card */}
            <div className="card border-0 shadow">
              <div className="card-body p-4 p-lg-5">
                <div className="refund-content">
                  {/* Intro */}
                  <div className="mb-5">
                    <h3 className="h4 luxury-heading text-dark mb-3">
                      Refund Policy for Event Bookings
                    </h3>
                    <p className="text-muted mb-0">
                      Thank you for choosing Eden Clicks Events. We strive to provide our customers with
                      the best experience possible. Please read our refund policy carefully to understand
                      your rights and options regarding event bookings.
                    </p>
                  </div>

                  {/* 1. General Policy */}
                  <div className="mb-5">
                    <div className="d-flex align-items-center mb-3">
                      <div className="bg-primary bg-opacity-10 rounded-circle me-3 d-flex align-items-center justify-content-center"
                        style={{ width: "40px", height: "40px" }}>
                        <i className="bi bi-file-earmark-text text-primary"></i>
                      </div>
                      <h3 className="h5 mb-0 luxury-heading text-dark">1. General Policy</h3>
                    </div>
                    <p className="text-muted mb-0">
                      All ticket purchases are final. However, we understand that unforeseen circumstances
                      can arise. Therefore, we offer the following refund options based on the type of
                      event and timing of your request.
                    </p>
                  </div>

                  {/* 2. Refund Eligibility */}
                  <div className="mb-5">
                    <div className="d-flex align-items-center mb-3">
                      <div className="bg-success bg-opacity-10 rounded-circle me-3 d-flex align-items-center justify-content-center"
                        style={{ width: "40px", height: "40px" }}>
                        <i className="bi bi-check-circle text-success"></i>
                      </div>
                      <h3 className="h5 mb-0 luxury-heading text-dark">2. Refund Eligibility</h3>
                    </div>
                    <div className="text-muted">
                      <p className="mb-2">– <strong>Full Refunds:</strong> Cancel at least 5 days prior.</p>
                      <p className="mb-2">– <strong>Partial Refunds:</strong> Cancel 3 days prior for 60% refund.</p>
                      <p className="mb-0">– <strong>No Refunds:</strong> Less than 2 days = no refund.</p>
                    </div>
                  </div>

                  {/* 3. Event Cancellation */}
                  <div className="mb-5">
                    <div className="d-flex align-items-center mb-3">
                      <div className="bg-danger bg-opacity-10 rounded-circle me-3 d-flex align-items-center justify-content-center"
                        style={{ width: "40px", height: "40px" }}>
                        <i className="bi bi-calendar-x text-danger"></i>
                      </div>
                      <h3 className="h5 mb-0 luxury-heading text-dark">3. Event Cancellation</h3>
                    </div>
                    <p className="text-muted mb-0">
                      If an event is canceled by the organizer, you will be notified via email and
                      receive a full refund including processing fees.
                    </p>
                  </div>

                  {/* 4. Transfer of Tickets */}
                  <div className="mb-5">
                    <div className="d-flex align-items-center mb-3">
                      <div className="bg-info bg-opacity-10 rounded-circle me-3 d-flex align-items-center justify-content-center"
                        style={{ width: "40px", height: "40px" }}>
                        <i className="bi bi-arrow-left-right text-info"></i>
                      </div>
                      <h3 className="h5 mb-0 luxury-heading text-dark">4. Transfer of Tickets</h3>
                    </div>
                    <p className="text-muted mb-0">
                      If you are unable to attend, you may transfer your ticket. Contact{" "}
                      <a href="mailto:edenclicks@gmail.com" className="text-primary">edenclicks@gmail.com</a>.
                    </p>
                  </div>

                  {/* 5. Requesting a Refund */}
                  <div className="mb-5">
                    <div className="d-flex align-items-center mb-3">
                      <div className="bg-warning bg-opacity-10 rounded-circle me-3 d-flex align-items-center justify-content-center"
                        style={{ width: "40px", height: "40px" }}>
                        <i className="bi bi-clipboard-check text-warning"></i>
                      </div>
                      <h3 className="h5 mb-0 luxury-heading text-dark">5. Requesting a Refund</h3>
                    </div>
                    <div className="text-muted">
                      <p className="mb-3">Steps:</p>
                      <p className="mb-2">1. Contact <a href="mailto:edenclicks@gmail.com" className="text-primary">edenclicks@gmail.com</a></p>
                      <p className="mb-2">2. Provide booking reference and reason.</p>
                      <p className="mb-2">3. Refunds processed within 7 business days.</p>
                      <p className="mb-0">4. Amount credited within 10-15 working days.</p>
                    </div>
                  </div>

                  {/* 6. Changes to Policy */}
                  <div className="mb-5">
                    <div className="d-flex align-items-center mb-3">
                      <div className="bg-secondary bg-opacity-10 rounded-circle me-3 d-flex align-items-center justify-content-center"
                        style={{ width: "40px", height: "40px" }}>
                        <i className="bi bi-arrow-clockwise text-secondary"></i>
                      </div>
                      <h3 className="h5 mb-0 luxury-heading text-dark">6. Changes to This Policy</h3>
                    </div>
                    <p className="text-muted mb-0">
                      We may update this policy at any time. Changes will be posted with a new effective date.
                    </p>
                  </div>

                  {/* 7. Contact Us */}
                  <div className="mb-5">
                    <div className="d-flex align-items-center mb-3">
                      <div className="bg-dark bg-opacity-10 rounded-circle me-3 d-flex align-items-center justify-content-center"
                        style={{ width: "40px", height: "40px" }}>
                        <i className="bi bi-envelope text-dark"></i>
                      </div>
                      <h3 className="h5 mb-0 luxury-heading text-dark">7. Contact Us</h3>
                    </div>
                    <p className="text-muted mb-0">
                      Questions? Email <a href="mailto:edenclicks@gmail.com" className="text-primary">edenclicks@gmail.com</a>.
                    </p>
                  </div>

                  {/* Footer Notice */}
                  <div className="mt-5 pt-4 border-top">
                    <div className="bg-light rounded-3 p-4">
                      <div className="d-flex align-items-start">
                        <div className="bg-warning bg-opacity-10 rounded-circle me-3 d-flex align-items-center justify-content-center flex-shrink-0"
                          style={{ width: "40px", height: "40px" }}>
                          <i className="bi bi-info-circle text-warning"></i>
                        </div>
                        <div>
                          <h6 className="fw-semibold mb-2 text-dark">Important Notice</h6>
                          <p className="text-muted small mb-0">
                            Please read our refund policy carefully. All ticket purchases are final,
                            but we offer refund options based on timing and circumstances.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div className="mt-4 text-center">
                    <p className="text-muted mb-3">
                      For any questions or concerns, please contact us.
                    </p>
                    <div className="d-flex justify-content-center gap-3">
                      <a
                        href="/contact"
                        className="btn btn-success px-4 py-2"
                        style={{
                          backgroundColor: "#28a745",
                          borderColor: "#28a745",
                          borderRadius: "8px",
                        }}
                      >
                        <i className="bi bi-envelope me-2"></i>Contact Us
                      </a>
                      {/* Uncomment if you want Back button */}
                      {/* <a href="/checkout" className="btn btn-outline-warning px-4 py-2" style={{ borderColor: "#ffc107", color: "#ffc107", borderRadius: "8px" }}>
                        <i className="bi bi-arrow-left me-2"></i>Back to Checkout
                      </a> */}
                    </div>
                  </div>
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

export default RefundPolicy
