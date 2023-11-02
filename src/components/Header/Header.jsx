import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import logo from '../../assets/Header/logo2.png';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <div className="navbar">
                <Link to="/" className="image"> 
                    <img src={logo} alt="" width="200" height="75" />
                </Link>
                <div className="menu">
                    <Link to="/">Home</Link> 
                    <Link to="/about">About us</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/housing">Housing</Link>
                </div>
                <button className="explore-button">Explore</button>
            </div>
        </div>
    );
}

export default Header;
