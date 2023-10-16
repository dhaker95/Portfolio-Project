import React from 'react';
import logo from '../../assets/Header/logo2.png';
import './Header.css';

const Header = () => {
    return (

            <div className="header">
                <div className="navbar">
                    <a className="image" href='/'>
                        <img src={logo} alt="" />
                    </a>
                    <div className="links">
                        <a href="/">Accueil</a>
                        <a href="about">À propos</a>
                        <a href="contact">Contact</a>
                    </div>
                </div>
            </div>


    );
}

export default Header;
