import React from 'react';
import logo from '../../assets/Header/logo2.png';
import './Header.css';

const Header = () => {
    return (

            <div className="header">
                <div className="navbar">
                    <div className="image">
                        <img src={logo} alt="" />
                    </div>
                    <div className="links">
                        <a href="">Accueil</a>
                        <a href="">À propos</a>
                        <a href="">Contact</a>
                    </div>
                </div>
            </div>


    );
}

export default Header;
