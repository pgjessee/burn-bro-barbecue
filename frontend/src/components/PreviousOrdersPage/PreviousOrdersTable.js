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
        <div className="user-previous-order-table">
        <table className="previous-orders-tables">
            <thead>
                <tr><th className="previous-headers">Order ID</th></tr>
                <tr><td className="previous-order-id">{previousOrder.id}</td></tr>
                <tr>
                    <th className="previous-headers">Entrée Name</th>
                    <th className="previous-headers">Price</th>
                    <th className="previous-headers">X</th>
                    <th className="previous-headers">Quantity</th>
                    <th className="previous-headers">Entrée Total</th>
                </tr>
            </thead>
            <tbody>
                {ordersData.map(orderEntree => {
                    return <PreviousOrderTableBody key={orderEntree.id} orderEntree={orderEntree}/>
                })}
            </tbody>
            <tfoot className="previous-footers">
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td className="previous-order-totals">Order Total: ${previousOrder.order_total}</td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td className="previous-order-dates">Date Visited: {visitDate}</td>
                </tr>
            </tfoot>
        </table>
        </div>
    )

}

export default PreviousOrderTables;
