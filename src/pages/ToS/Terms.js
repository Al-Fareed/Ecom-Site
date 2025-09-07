import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Terms.css";

const Terms = () => {
  return (
    <div className="tos-cnt">
    <section className="section-spacing">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10 col-xl-8">
            {/* Header */}
            <div className="text-center mb-5">
              <div className="header-icon d-inline-flex align-items-center justify-content-center bg-primary bg-opacity-10 rounded-circle mb-3">
                <i className="bi bi-file-text text-primary"></i>
              </div>
              <h1 className="h2 luxury-heading text-dark mb-2">Terms &amp; Conditions</h1>
              <p className="text-muted mb-0">
                Please read these terms carefully before using our services
              </p>
            </div>

            {/* Terms Content Card */}
            <div className="card border-0 shadow-sm terms-card">
              <div className="card-body p-4 p-lg-5">
                <div className="terms-content">
                  {/* Introduction */}
                  <div className="mb-5">
                    <p className="text-muted mb-4">
                      Before using this website, please take the time to carefully read these
                      terms and conditions. By using or accessing this website, you accept these
                      terms and conditions as binding on you. If you disagree with any of these
                      terms and conditions, you shouldn't use this website.
                    </p>
                  </div>

                  {/* Intellectual Property */}
                  <div className="mb-5">
                    <div className="d-flex justify-content-start">
                      <div className="icon-circle bg-primary bg-opacity-10 me-3">
                        <i className="bi bi-shield-check text-primary"></i>
                      </div>
                      <h3 className="h5 mb-0 luxury-heading text-dark" style={{textAlign:"left"}}>Intellectual Property</h3>
                    </div>
                    <p className="text-muted mb-0">
                      The material, pictures, logos, photos, and software that make up this website
                      are all the property of our business and are all covered by copyright laws.
                    </p>
                  </div>

                  {/* Website Usage */}
                  <div className="mb-5">
                    <div className="d-flex align-items-center mb-3">
                      <div className="icon-circle bg-success bg-opacity-10 me-3">
                        <i className="bi bi-globe text-success"></i>
                      </div>
                      <h3 className="h5 mb-0 luxury-heading text-dark">Website Usage</h3>
                    </div>
                    <p className="text-muted mb-0">
                      By accessing and using this website, you agree to comply with all applicable
                      laws and regulations. Unauthorized and illegal use of this website is strictly
                      prohibited. You are not permitted to engage in activities that may harm,
                      disable, or interfere with the proper functioning of the website or hinder
                      others from using it.
                    </p>
                  </div>

                  {/* Product Descriptions */}
                  <div className="mb-5">
                    <div className="d-flex align-items-center mb-3">
                      <div className="icon-circle bg-info bg-opacity-10 me-3">
                        <i className="bi bi-info-circle text-info"></i>
                      </div>
                      <h3 className="h5 mb-0 luxury-heading text-dark">Product Descriptions</h3>
                    </div>
                    <p className="text-muted mb-0">
                      We make every effort to provide accurate and current information on our
                      website. However, we cannot guarantee the accuracy, completeness, or timeliness
                      of the materials displayed. The information on the website may be modified or
                      updated without prior notice.
                    </p>
                  </div>

                  {/* Orders and Payment */}
                  <div className="mb-5">
                    <div className="d-flex align-items-center mb-3">
                      <div className="icon-circle bg-warning bg-opacity-10 me-3">
                        <i className="bi bi-credit-card text-warning"></i>
                      </div>
                      <h3 className="h5 mb-0 luxury-heading text-dark">Orders and Payment</h3>
                    </div>
                    <p className="text-muted mb-0">
                      We reserve the right to accept or decline any order placed through our
                      website. We may reject or cancel an order at our discretion, without providing
                      a reason, at any time. Payment for all orders must be made through the approved
                      payment methods available on our website.
                    </p>
                  </div>

                  {/* Returns and Refunds */}
                  <div className="mb-5">
                    <div className="d-flex align-items-center mb-3">
                      <div className="icon-circle bg-danger bg-opacity-10 me-3">
                        <i className="bi bi-arrow-return-left text-danger"></i>
                      </div>
                      <h3 className="h5 mb-0 luxury-heading text-dark">Returns and Refunds</h3>
                    </div>
                    <p className="text-muted mb-0">
                      Our return policy, states that there wont be any return or refund on any
                      product or services ordered or booked.
                    </p>
                  </div>

                  {/* Limitation of Liability */}
                  <div className="mb-5">
                    <div className="d-flex align-items-center mb-3">
                      <div className="icon-circle bg-secondary bg-opacity-10 me-3">
                        <i className="bi bi-exclamation-triangle text-secondary"></i>
                      </div>
                      <h3 className="h5 mb-0 luxury-heading text-dark">Limitation of Liability</h3>
                    </div>
                    <p className="text-muted mb-0">
                      We shall not be held liable for any damages arising from the use of our
                      website or the products offered, including but not limited to direct,
                      indirect, incidental, punitive, or consequential damages.
                    </p>
                  </div>

                  {/* Indemnification */}
                  <div className="mb-5">
                    <div className="d-flex align-items-center mb-3">
                      <div className="icon-circle bg-dark bg-opacity-10 me-3">
                        <i className="bi bi-person-check text-dark"></i>
                      </div>
                      <h3 className="h5 mb-0 luxury-heading text-dark">Indemnification</h3>
                    </div>
                    <p className="text-muted mb-0">
                      By using our website, you agree to indemnify and defend our company, its
                      officers, directors, employees, and agents from any claims, damages, expenses,
                      or losses resulting from your use of the website or any violation of these
                      terms and conditions.
                    </p>
                  </div>

                  {/* Changes to Terms */}
                  <div className="mb-5">
                    <div className="d-flex align-items-center mb-3">
                      <div className="icon-circle bg-primary bg-opacity-10 me-3">
                        <i className="bi bi-arrow-clockwise text-primary"></i>
                      </div>
                      <h3 className="h5 mb-0 luxury-heading text-dark">
                        Changes to Terms and Conditions
                      </h3>
                    </div>
                    <p className="text-muted mb-0">
                      We reserve the right to modify these terms and conditions without prior notice.
                      By continuing to use our website, you accept any amendments made. For any
                      questions or concerns regarding our terms and conditions, please contact us.
                    </p>
                  </div>

                  {/* Footer Notice */}
                  <div className="mt-5 pt-4 border-top">
                    <div className="bg-light rounded-3 p-4">
                      <div className="d-flex align-items-start">
                        <div className="icon-circle bg-info bg-opacity-10 me-3 flex-shrink-0">
                          <i className="bi bi-info-circle text-info"></i>
                        </div>
                        <div>
                          <h6 className="fw-semibold mb-2 text-dark">Important Notice</h6>
                          <p className="text-muted small mb-0">
                            Before using this website, please take the time to carefully read these
                            terms and conditions. By using or accessing this website, you accept
                            these terms and conditions as binding on you. If you disagree with any of
                            these terms and conditions, you shouldn't use this website.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div className="mt-4">
                    <div className="text-center">
                      <p className="text-muted mb-3">
                        For any questions or concerns regarding our terms and conditions, please
                        contact us.
                      </p>
                      <div className="d-flex justify-content-center gap-3">
                        <a
                          href="/contact"
                          className="btn btn-success px-4 py-2 contact-btn"
                        >
                          <i className="bi bi-envelope me-2"></i>Contact Us
                        </a>
                        <a
                          href="/checkout"
                          className="btn btn-outline-warning px-4 py-2"
                        >
                          <i className="bi bi-arrow-left me-2"></i>Back to Checkout
                        </a>
                      </div>
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
  );
};

export default Terms;
