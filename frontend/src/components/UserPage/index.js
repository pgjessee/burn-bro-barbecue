import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux'
import * as sessionActions from '../../store/session';

import './UserPage.css'

function UserPage({ user }) {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [reviews, setReviews] = useState([]);
    const [orders, setOrders] = useState([]);
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        (async () => {
            let res = await fetch(`/api/users/${sessionUser.id}`);
            res = await res.json();
            const { userData } = res;
            setReviews(userData.Reviews);
            setOrders(userData.Orders);
            setErrors([]);
        })()
    }, [])

    const logout = () => {
        dispatch(sessionActions.logout());
    };

    const handleUserReview = () => {
        if (orders.length === 0) {
            setErrors(["Place an order to submit your first reveiw and tell us how we are doing!"])
        } else if (orders.length === reviews.length) {
            setErrors(["Only one review per order is allowed to get the best feedback from our valued customers"])
        }
    };

    return (
        <div className="user-navigation-container">
            <h1 className="hello-user-header">Hello, {user.first_name}</h1>
            <div className="user-page-errors-container">
                <ul>

                </ul>
            </div>
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
