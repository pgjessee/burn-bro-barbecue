import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import './SplashPage.css'

function SplashPage() {

    return (
        <div className="splash-navigation-container">
            <div>
                <NavLink to="/menu"><button className="splash-navigation-button">View Our Menu</button></NavLink>
            </div>
            <div className="splash-button-container">
                <NavLink to="/login"><button className="splash-navigation-button">Log In</button></NavLink>
            </div>
            <div className="splash-button-container">
                <NavLink to="/signup"><button className="splash-navigation-button">Sign Up</button></NavLink>
            </div>
        </div>
    )
}

export default SplashPage;
