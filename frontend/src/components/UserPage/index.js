import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import * as sessionActions from '../../store/session';


function UserPage({ user }) {
    const dispatch = useDispatch();

    const logout = () => {
        dispatch(sessionActions.logout());
    };

    return (
        <div className="navigation-container">
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
                <NavLink to="/"><button className="navigation-button" onClick={logout}>Log Out</button></NavLink>
            </div>
        </div>
    )
}


export default UserPage;