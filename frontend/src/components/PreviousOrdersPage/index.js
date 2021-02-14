import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import PreviousOrderTables from './PreviousOrdersTable'

import './PreviousOrdersPage.css'

const ListPreviousOrders = ({ user }) => {
    const [prevOrders, setAllPreviousOrders] = useState([]);

    useEffect(() => {
        (async () => {
            const res = await fetch(`/api/orders/user/${user.id}`)
            const { orders } = await res.json();

            let incrementer = 1;
            let order, orderEntrees, entree;
            for (let i = 0; i < orders.length; i++) {
                order = orders[i]
                orderEntrees = order.Order_Entrees;

                for (let i = 0; i < orderEntrees.length; i++) {
                    entree = orderEntrees[i];
                    entree["id"] = incrementer;
                    incrementer += 1;
                }
            }

            setAllPreviousOrders(orders)

        })()
    }, [])

    return (
        <>
        <div className="nav-bar">
            <div className="previous-order-nav-container">
                <NavLink to="/new-order" className="place-order-nav">Place a New Order</NavLink>
            </div>
            <div className="nav-header">Your Previous Orders</div>
            <div className="nav-image-container">
                <NavLink to="/"><img className="nav-logo" src="/logos/burnbro-logo.png"/></NavLink>
            </div>
        </div>
        <div className="previous-orders-container">
            <div className="user-previous-orders">
                {prevOrders.map(previousOrder => {
                    return <PreviousOrderTables key={previousOrder.id} previousOrder={previousOrder}/>
                })}
            </div>
            <div id="previous-orders-footer-return" className="home-button">
                <NavLink to="/"><button className="navigation-button">Return Home</button></NavLink>
            </div>
        </div>
        </>
    )

};


export default ListPreviousOrders;
