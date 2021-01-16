import React from 'react';
import { NavLink } from 'react-router-dom';

import './SplashPage.css'

function SplashPage() {

    return (
        <div className="splash-navigation-container">
            <div>
                <NavLink to="/menu"><button className="navigation-button">View Our Menu</button></NavLink>
            </div>
            <div>
                <NavLink to="/login"><button className="navigation-button">Log In</button></NavLink>
            </div>
            <div>
                <NavLink to="/signup"><button className="navigation-button">Sign Up</button></NavLink>
            </div>
        </div>
    )
}

export default SplashPage;
