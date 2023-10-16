// Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-links">
                    <a href="/" className="footer-link">Accueil</a>
                    <a href="/about" className="footer-link">À Propos</a>
                    <a href="/contact" className="footer-link">Contact</a>
                </div>
                <p>&copy; 2023 Votre Maison de Retraite</p>
            </div>
        </footer>
    );
}

export default Footer;
