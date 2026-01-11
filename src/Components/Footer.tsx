
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaLinkedin, FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'

export const Footer = () => {
  return (
    <div>
      <footer className="main-footer bg-section dark-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-12">
              <div className="about-footer">
                <div className="footer-logo">
                  <img src="images/logo.png" alt="Stafital Logo"/>
                </div>
                <div className="about-footer-content">
                  <p>Leading healthcare staffing specialists delivering exceptional recruitment services. Your trusted partner for quality healthcare professionals.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-5">
              <div className="footer-links">
                <h3>quick links</h3>
                <ul>
                  <li><a href="index.html">Home</a></li>
                  <li><a href="about.html">About us</a></li>
                  <li><a href="services.html">Our Services</a></li>
                  <li><a href="pricing.html">Pricing Plans</a></li>
                  <li><a href="contact.html">Contact us</a></li>
                  <li><a href="nurs24.html">NURS24.com</a></li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-7">
              <div className="footer-links">
                <h3>contact us</h3>
              
                <div className="footer-contact-item">
                  <div className="icon-box">
                    <FaMapMarkerAlt />
                  </div>
                  <div className="footer-contact-content">
                    <p>BHIVE Workspace - No.112, AKR Tech Park, "A" and "B" Block, 7th Mile Hosur Rd, Bengaluru, Karnataka 560068</p>
                  </div>
                </div>
               
                <div className="footer-contact-item">
                  <div className="icon-box">
                    <FaEnvelope />
                  </div>
                  <div className="footer-contact-content">
                    <p><a href="mailto:info@stafital.com">info@stafital.com</a></p>
                    <p><a href="mailto:support@nurs24.com">support@nurs24.com</a></p>
                  </div>
                </div>
               
                <div className="footer-contact-item">
                  <div className="icon-box">
                    <FaPhone />
                  </div>
                  <div className="footer-contact-content">
                    <p><a href="tel:+911234567890">+91 123 456 7890</a></p>
                    <p><a href="tel:+911234567891">+91 123 456 7891 (NURS24)</a></p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-12">
              <div className="footer-links footer-newsletter-form">
                <h3>Get Updates</h3>
                <p>Sign up for staffing alerts, latest healthcare insights, and recruitment updates</p>
                <form id="newslettersForm" action="#" method="POST">
                  <div className="form-group">
                    <input type="email" name="mail" className="form-control" id="mail" placeholder="Enter your email" required/>
                    <button type="submit" className="btn-default">subscribe</button>
                  </div>
                </form>
              </div>
            </div>

            <div className="col-lg-12">
              <div className="footer-copyright">
                <div className="footer-copyright-text">
                  <p>Copyright © 2025 Stafital - A Unit of Kaaman Techno Global Services Pvt Ltd. All Rights Reserved.</p>
                  <p className="small-text">STAFITAL | NURS24.com | Healthcare Staffing Solutions</p>
                </div>
               
                <div className="footer-social-links">
                  <ul>
                    <li><a href="https://linkedin.com/company/stafital" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a></li>
                    <li><a href="https://facebook.com/stafital" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a></li>
                    <li><a href="https://instagram.com/stafital" target="_blank" rel="noopener noreferrer"><FaInstagram /></a></li>
                    <li><a href="https://twitter.com/stafital" target="_blank" rel="noopener noreferrer"><FaTwitter /></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}