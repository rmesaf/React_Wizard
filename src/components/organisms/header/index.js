// DEPENDENCIES
import React from 'react';
// COMPONENTS
import Brand from '../../molecules/brand';
// ASSETS  
import styles from './header.scss';

const Header = () => {
    return (
        <nav className="navbar">
            <div className="container">
                <div className="navbar-header">
                    <Brand />
                </div>
            </div>
        </nav>
    );
};

export default Header;