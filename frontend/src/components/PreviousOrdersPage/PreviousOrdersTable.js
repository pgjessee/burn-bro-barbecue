import React, { useState, useEffect } from 'react';

import PreviousOrderTableBody from './PreviousOrdersBody'

const PreviousOrderTables = ({ previousOrder }) => {
    const [ordersData, setOrdersData] = useState([])
    // setOrdersData(previousOrder.Order_Entrees)
    useEffect(() => {
        (async () => {
            setOrdersData(previousOrder.Order_Entrees)
            console.log(ordersData)
        })()
    }, [])

    return (
        <table>
            <thead>
                <tr>
                    <th>Order ID</th>
                    <th>Entrée Name</th>
                    <th>Price</th>
                    <th>X</th>
                    <th>Quantity</th>
                    <th>Entrée Total</th>
                </tr>
            </thead>
            <tbody>
                {ordersData.map(orderEntree => {
                    return <PreviousOrderTableBody key={orderEntree.order_id} orderEntree={orderEntree}/>
                })}
            </tbody>
            <tfoot>
                <tr><td>Order Total: ${previousOrder.order_total}</td></tr>
                <tr><td>Date Visited: {previousOrder.createdAt}</td></tr>
            </tfoot>
        </table>
    )

}

export default PreviousOrderTables;
