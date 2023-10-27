// Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-links">
                    <a href="/" className="footer-link">Home</a>
                    <a href="/about" className="footer-link">About us</a>
                    <a href="/contact" className="footer-link">Contact</a>
                </div>
                <p>&copy; 2023 Your Retirement Home</p>
            </div>
        </footer>
    );
}

export default Footer;
