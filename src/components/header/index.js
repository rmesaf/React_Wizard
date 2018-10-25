import React from 'react';

// ASSETS  
const Logo = require('../../assets/images/logo.png');
import styles from './header.scss';

const Header = () => {
    return (
        <nav className="navbar">
            <div className="container">
                <div className="navbar-header">
                    <a className="navbar-brand" href="#">
                        <img className="brand-logo" src={Logo} ></img>
                        <p className="brand-logo-text">React SandBox</p>
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Header;