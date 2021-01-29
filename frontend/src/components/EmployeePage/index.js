import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import * as sessionActions from '../../store/session'

function EmployeePage({ user }) {
    const dispatch = useDispatch();

    const logout = () => {
        dispatch(sessionActions.logout());
    };

    return (
        <div className="employee-navigation-container">
            <div>
                <NavLink to="/food-inventory"><button className="navigation-button">Food Inventory</button></NavLink>
            </div>
            <div>
                <NavLink to="/manage-food-inventory"><button className="navigation-button">Manage Food Inventory</button></NavLink>
            </div>
            <div>
                <NavLink to="/employees"><button className="navigation-button">Manage Employees</button></NavLink>
            </div>
            <div>
                <NavLink to="/"><button className="navigation-button" onClick={logout}>Log Out</button></NavLink>
            </div>
        </div>
    )
}

export default EmployeePage;
