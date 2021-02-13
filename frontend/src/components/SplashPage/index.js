import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink} from 'react-router-dom';

import * as sessionActions from '../../store/session';
import './SplashPage.css'

function SplashPage() {
    const dispatch = useDispatch();

    const handleDemoLogin = (e) => {
        let credential = "demo@aa.io";
        let password = "123";
        e.preventDefault();
        return dispatch(sessionActions.login({credential, password}))
    };

    return (
        <div className="splash-navigation-container">
            <div>
                <NavLink to="/menu"><button className="splash-navigation-button">View Our Menu</button></NavLink>
            </div>
            <div className="splash-button-container">
                <button onClick={handleDemoLogin} className="splash-navigation-button">Login as Demo User</button>
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
