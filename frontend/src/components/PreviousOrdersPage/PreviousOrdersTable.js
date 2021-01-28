import React, { useState, useEffect } from 'react';

import PreviousOrderTableBody from './PreviousOrdersBody'

const PreviousOrderTables = ({ previousOrder }) => {
    const [ordersData, setOrdersData] = useState([])

    let visitDate = previousOrder.createdAt
    visitDate = `${visitDate.slice(5, 10)}-${visitDate.slice(0,4)}`
    // setOrdersData(previousOrder.Order_Entrees)
    useEffect(() => {
        (async () => {

            let orderEntrees = previousOrder.Order_Entrees;


            setOrdersData(orderEntrees)

        })()
    }, [])

    return (
        <table>
            <thead>
                <tr><th>Order ID</th></tr>
                <tr><td className="previous-order-id">{previousOrder.id}</td></tr>
                <tr>
                    <th>Entrée Name</th>
                    <th>Price</th>
                    <th>X</th>
                    <th>Quantity</th>
                    <th>Entrée Total</th>
                </tr>
            </thead>
            <tbody>
                {ordersData.map(orderEntree => {
                    return <PreviousOrderTableBody key={orderEntree.id} orderEntree={orderEntree}/>
                })}
            </tbody>
            <tfoot>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td className="previous-order-footer">Order Total: ${previousOrder.order_total}</td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td className="previous-order-footer">Date Visited: {visitDate}</td>
                </tr>
            </tfoot>
        </table>
    )

}

export default PreviousOrderTables;
