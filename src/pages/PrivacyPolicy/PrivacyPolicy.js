import React from "react";
import "./PrivacyPolicy.css";

const PrivacyPolicy = () => {
  return (
    <div className="prv-pol-cnt" >
        <section className="section-spacing privacy-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10 col-xl-8">
            {/* Header */}
            <div className="text-center mb-5">
              <div className="icon-circle bg-info bg-opacity-10 mb-3">
                <i className="bi bi-shield-lock text-info"></i>
              </div>
              <h1 className="h2 luxury-heading text-dark mb-2">
                Privacy Policy
              </h1>
              <p className="text-muted mb-0">
                How we collect, use, and protect your personal information
              </p>
            </div>

            {/* Privacy Content Card */}
            <div className="card border-0 shadow-sm privacy-card">
              <div className="card-body p-4 p-lg-5">
                <div className="privacy-content">
                  {/* Who we are */}
                  <div className="mb-5">
                    <div className="d-flex align-items-center mb-3">
                      <div className="circle-icon bg-primary bg-opacity-10 me-3">
                        <i className="bi bi-building text-primary"></i>
                      </div>
                      <h3 className="h5 mb-0 luxury-heading text-dark">
                        Who we are
                      </h3>
                    </div>
                    <p className="text-muted mb-0">
                      Our website address is:{" "}
                      <a href="https://edenclicks.com" className="text-primary">
                        https://edenclicks.com
                      </a>
                      .
                    </p>
                  </div>

                  {/* Comments */}
                  <div className="mb-5">
                    <div className="d-flex align-items-center mb-3">
                      <div className="circle-icon bg-success bg-opacity-10 me-3">
                        <i className="bi bi-chat-dots text-success"></i>
                      </div>
                      <h3 className="h5 mb-0 luxury-heading text-dark">
                        Comments
                      </h3>
                    </div>
                    <div className="text-muted">
                      <p className="mb-3">
                        When visitors leave comments on the site we collect the
                        data shown in the comments form, and also the visitor's
                        IP address and browser user agent string to help spam
                        detection.
                      </p>
                    </div>
                  </div>

                  {/* Media */}
                  <div className="mb-5">
                    <div className="d-flex align-items-center mb-3">
                      <div className="circle-icon bg-warning bg-opacity-10 me-3">
                        <i className="bi bi-image text-warning"></i>
                      </div>
                      <h3 className="h5 mb-0 luxury-heading text-dark">
                        Media
                      </h3>
                    </div>
                    <p className="text-muted mb-0">
                      If you upload images to the website, you should avoid
                      uploading images with embedded location data (EXIF GPS)
                      included. Visitors to the website can download and extract
                      any location data from images on the website.
                    </p>
                  </div>

                  {/* Cookies */}
                  <div className="mb-5">
                    <div className="d-flex align-items-center mb-3">
                      <div className="circle-icon bg-info bg-opacity-10 me-3">
                        <i className="bi bi-cookie text-info"></i>
                      </div>
                      <h3 className="h5 mb-0 luxury-heading text-dark">
                        Cookies
                      </h3>
                    </div>
                    <div className="text-muted">
                      <p className="mb-3">
                        If you leave a comment on our site you may opt-in to
                        saving your name, email address and website in cookies.
                        These are for your convenience so that you do not have
                        to fill in your details again when you leave another
                        comment. These cookies will last for one year.
                      </p>
                      <p className="mb-3">
                        If you visit our login page, we will set a temporary
                        cookie to determine if your browser accepts cookies.
                        This cookie contains no personal data and is discarded
                        when you close your browser.
                      </p>
                      <p className="mb-3">
                        When you log in, we will also set up several cookies to
                        save your login information and your screen display
                        choices. Login cookies last for two days, and screen
                        options cookies last for a year. If you select "Remember
                        Me", your login will persist for two weeks. If you log
                        out of your account, the login cookies will be removed.
                      </p>
                      <p className="mb-0">
                        If you edit or publish an article, an additional cookie
                        will be saved in your browser. This cookie includes no
                        personal data and simply indicates the post ID of the
                        article you just edited. It expires after 1 day.
                      </p>
                    </div>
                  </div>

                  {/* Embedded content */}
                  <div className="mb-5">
                    <div className="d-flex align-items-center mb-3">
                      <div className="circle-icon bg-danger bg-opacity-10 me-3">
                        <i className="bi bi-link-45deg text-danger"></i>
                      </div>
                      <h3 className="h5 mb-0 luxury-heading text-dark">
                        Embedded content from other websites
                      </h3>
                    </div>
                    <div className="text-muted">
                      <p className="mb-3">
                        Articles on this site may include embedded content (e.g.
                        videos, images, articles, etc.). Embedded content from
                        other websites behaves in the exact same way as if the
                        visitor has visited the other website.
                      </p>
                      <p className="mb-0">
                        These websites may collect data about you, use cookies,
                        embed additional third-party tracking, and monitor your
                        interaction with that embedded content, including
                        tracking your interaction with the embedded content if
                        you have an account and are logged in to that website.
                      </p>
                    </div>
                  </div>

                  {/* Who we share your data with */}
                  <div className="mb-5">
                    <div className="d-flex align-items-center mb-3">
                      <div className="circle-icon bg-secondary bg-opacity-10 me-3">
                        <i className="bi bi-share text-secondary"></i>
                      </div>
                      <h3 className="h5 mb-0 luxury-heading text-dark">
                        Who we share your data with
                      </h3>
                    </div>
                    <p className="text-muted mb-0">
                      If you request a password reset, your IP address will be
                      included in the reset email.
                    </p>
                  </div>

                  {/* How long we retain your data */}
                  <div className="mb-5">
                    <div className="d-flex align-items-center mb-3">
                      <div className="circle-icon bg-dark bg-opacity-10 me-3">
                        <i className="bi bi-clock-history text-dark"></i>
                      </div>
                      <h3 className="h5 mb-0 luxury-heading text-dark">
                        How long we retain your data
                      </h3>
                    </div>
                    <div className="text-muted">
                      <p className="mb-3">
                        If you leave a comment, the comment and its metadata are
                        retained indefinitely. This is so we can recognize and
                        approve any follow-up comments automatically instead of
                        holding them in a moderation queue.
                      </p>
                      <p className="mb-0">
                        For users that register on our website (if any), we also
                        store the personal information they provide in their
                        user profile. All users can see, edit, or delete their
                        personal information at any time (except they cannot
                        change their username). Website administrators can also
                        see and edit that information.
                      </p>
                    </div>
                  </div>

                  {/* What rights you have */}
                  <div className="mb-5">
                    <div className="d-flex align-items-center mb-3">
                      <div className="circle-icon bg-success bg-opacity-10 me-3">
                        <i className="bi bi-person-check text-success"></i>
                      </div>
                      <h3 className="h5 mb-0 luxury-heading text-dark">
                        What rights you have over your data
                      </h3>
                    </div>
                    <p className="text-muted mb-0">
                      If you have an account on this site, or have left
                      comments, you can request to receive an exported file of
                      the personal data we hold about you, including any data
                      you have provided to us. You can also request that we
                      erase any personal data we hold about you. This does not
                      include any data we are obliged to keep for
                      administrative, legal, or security purposes.
                    </p>
                  </div>

                  {/* Where your data is sent */}
                  <div className="mb-5">
                    <div className="d-flex align-items-center mb-3">
                      <div className="circle-icon bg-primary bg-opacity-10 me-3">
                        <i className="bi bi-geo-alt text-primary"></i>
                      </div>
                      <h3 className="h5 mb-0 luxury-heading text-dark">
                        Where your data is sent
                      </h3>
                    </div>
                    <p className="text-muted mb-0">
                      Visitor comments may be checked through an automated spam
                      detection service.
                    </p>
                  </div>

                  {/* Footer Notice */}
                  <div className="mt-5 pt-4 border-top">
                    <div className="bg-light rounded-3 p-4">
                      <div className="d-flex align-items-start">
                        <div className="circle-icon bg-info bg-opacity-10 me-3 flex-shrink-0">
                          <i className="bi bi-shield-check text-info"></i>
                        </div>
                        <div>
                          <h6 className="fw-semibold mb-2 text-dark">
                            Your Privacy Matters
                          </h6>
                          <p className="text-muted small mb-0">
                            We are committed to protecting your privacy and
                            handling your personal data responsibly. This
                            privacy policy explains how we collect, use, and
                            protect your information when you use our website
                            and services.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div className="mt-4">
                    <div className="text-center">
                      <p className="text-muted mb-3">
                        For any questions or concerns regarding our privacy
                        policy, please contact us.
                      </p>
                      <div className="d-flex justify-content-center gap-3">
                        <a
                          href="/contact"
                          className="btn btn-success contact-btn"
                        >
                          <i className="bi bi-envelope me-2"></i>Contact Us
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

export default PrivacyPolicy;
