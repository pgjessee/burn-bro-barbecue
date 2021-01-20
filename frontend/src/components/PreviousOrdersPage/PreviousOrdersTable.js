import React, { useState } from 'react';

import PreviousOrderTableBody from './PreviousOrdersBody'

const PreviousOrderTables = ({ previousOrder }) => {
    const [ordersData, setOrdersData] = useState([])
    setOrdersData(previousOrder.Order_Entrees)

    return (
        <table>
            <thead>
                <tr>
                    <th>Order ID</th>
                    <th>Entrée Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Entrée Total</th>
                </tr>
            </thead>
            <tbody>
                {/* {ordersData.map(orderEntree => {
                    return <PreviousOrderTableBody key={orderEntree.order_id} orderEntree={orderEntree}/>
                })} */}
            </tbody>
        </table>
    )

}

export default PreviousOrderTables;
