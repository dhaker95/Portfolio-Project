import React from 'react';
import './Footer.css';
import FacebookIcon from '../../assets/Footer/facebook.png'; // Update the import paths
import TwitterIcon from '../../assets/Footer/twitter.png';   // Update the import paths
import InstagramIcon from '../../assets/Footer/ig.png';      // Update the import paths
import LinkedInIcon from '../../assets/Footer/linkedin.png'; // Update the import paths

export default function Footer() {
  const iconStyle = { width: '64px', height: '64px' }; // Define the style here

  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h3>La Maison de la Jouvence</h3>
            <p>Our primary concern is customer satisfaction.</p>
          </div>
          <div className="col-md-3">
            <h3>Contact Us</h3>
            <p>
              123 Main Street
              <br />
              Your City, Country
              <br />
              Email: info@lamaison.com
              <br />
              Phone: +264-81386-7303
            </p>
          </div>
          <div className="col-md-3">
            <h3>Follow Us</h3>
            <div className="social-links">
              <div className="row">
                <div className="col-4">
                  <a href="#/">
                    <img src={FacebookIcon} alt="Facebook" style={iconStyle} /> {/* Apply the style here */}
                  </a>
                </div>
                <div className="col-4">
                  <a href="#/">
                    <img src={TwitterIcon} alt="Twitter" style={iconStyle} /> {/* Apply the style here */}
                  </a>
                </div>
                <div className="col-4">
                  <a href="#/">
                    <img src={InstagramIcon} alt="Instagram" style={iconStyle} /> {/* Apply the style here */}
                  </a>
                </div>
              </div>
              <div className="row">
                <div className="col-4">
                  <a href="#/">
                    <img src={LinkedInIcon} alt="LinkedIn" style={iconStyle} /> {/* Apply the style here */}
                  </a>
                </div>
                {/* Add more social media icons here */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
