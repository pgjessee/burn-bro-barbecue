import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import * as sessionActions from '../../store/session';

import './UserPage.css'

function UserPage({ user }) {
    const dispatch = useDispatch();

    const logout = () => {
        dispatch(sessionActions.logout());
    };

    return (
        <div className="user-navigation-container">
            <h1 className="hello-user-header">Hello, {user.first_name}</h1>
            <div>
                <NavLink to="/new-order"><button className="navigation-button">Place an Order</button></NavLink>
            </div>
            <div>
                <NavLink to="/menu"><button className="navigation-button">View Our Menu</button></NavLink>
            </div>
            <div>
                <NavLink to="/reviews"><button className="navigation-button">Read Our Reviews</button></NavLink>
            </div>
            <div>
                <NavLink to="/write-review"><button className="navigation-button">Write a Review</button></NavLink>
            </div>
            <div>
                <NavLink to="/previous-orders"><button className="navigation-button">View Previous Orders</button></NavLink>
            </div>
            <div>
                <NavLink to="/"><button className="navigation-button" onClick={logout}>Log Out</button></NavLink>
            </div>
        </div>
    )
}


export default UserPage;
