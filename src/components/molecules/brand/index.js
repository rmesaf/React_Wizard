// DEPENDENCIES
import React from 'react';

// ASSETS  
const Logo = require('../../../assets/images/logo.png');

const Brand = () => {
    return (
        <a className="navbar-brand" href="#">
            <img className="brand-logo" src={Logo} ></img>
            <p className="brand-logo-text">React SandBox</p>
        </a>      
    );
};

export default Brand;