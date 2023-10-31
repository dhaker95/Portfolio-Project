import React from 'react';
import './Footer.css';
import FacebookIcon from '../../assets/Footer/facebook.png';
import TwitterIcon from '../../assets/Footer/twitter.png';
import InstagramIcon from '../../assets/Footer/ig.png';
import LinkedInIcon from '../../assets/Footer/linkedin.png';

export default function Footer() {
  const iconStyle = { width: '64px', height: '64px' };

  return (
    <footer className="footer">
      <div className="container footer-list">
        <div className="row">
          <div className="col-md-3">
            <h3>La Maison de la Jouvence</h3>
            <p>
              123 Main Street
              <br />
              Hammamet, Tunisia
              <br />
              Email: info@lamaison.com
              <br />
              Phone: +264-81386-7303
            </p>
          </div>
          <div className="col-md-3">
            <h3>Follow Us</h3>
            <div className="social-links d-flex justify-content-between">
              <a href="#/">
                <img src={FacebookIcon} alt="Facebook" style={iconStyle} />
              </a>
              <a href="#/">
                <img src={TwitterIcon} alt="Twitter" style={iconStyle} />
              </a>
              <a href="#/">
                <img src={InstagramIcon} alt="Instagram" style={iconStyle} />
              </a>
              <a href="#/">
                <img src={LinkedInIcon} alt="LinkedIn" style={iconStyle} />
              </a>
            </div>
          </div>
          
        </div>
      </div>
    </footer>
  );
}
