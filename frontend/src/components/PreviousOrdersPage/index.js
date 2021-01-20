import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import PreviousOrderTables from './PreviousOrdersTable'


const ListPreviousOrders = ({ user }) => {
    const [previousOrders, setAllPreviousOrders] = useState([]);

    useEffect(() => {
        (async () => {
            const res = await fetch(`/api/orders/user/${user.id}`)
            const { orders } = await res.json();
            setAllPreviousOrders(orders)
        })()
    }, [])

    return (
        <div className="previous-orders-container">
            <div className="home-button">
                <NavLink to="/"><button className="navigation-button">Return Home</button></NavLink>
            </div>
            <div>
                <h1>Your Previous Orders</h1>
            </div>
            <div className="user-previous-orders">
                {previousOrders.map(previousOrder => {
                    return <PreviousOrderTables key={previousOrder.id} previousOrder={previousOrder}/>
                })}
            </div>
            <div className="home-button">
                <NavLink to="/"><button className="navigation-button">Return Home</button></NavLink>
            </div>
        </div>
    )

}


export default ListPreviousOrders;
