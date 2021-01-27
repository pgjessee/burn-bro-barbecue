import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import PreviousOrderTables from './PreviousOrdersTable'


const ListPreviousOrders = ({ user }) => {
    const [prevOrders, setAllPreviousOrders] = useState([]);

    useEffect(() => {
        (async () => {
            const res = await fetch(`/api/orders/user/${user.id}`)
            const { orders } = await res.json();

            let start = orders[0];
            start = start.Order_Entrees.length;


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
        <div className="previous-orders-container">
            <div className="home-button">
                <NavLink to="/"><button className="navigation-button">Return Home</button></NavLink>
            </div>
            <div>
                <h1>Your Previous Orders</h1>
            </div>
            <div className="user-previous-orders">
                {prevOrders.map(previousOrder => {
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
