import React from 'react'


const PreviousOrderTableBody = ({ orderEntree }) => {

    return (
        <tr>
            <td>{orderEntree.order_id}</td>
            <td>{orderEntree.Entree.entree_name}</td>
            <td>{orderEntree.Entree.entree_price}</td>
            <td>{orderEntree.quantity * orderEntree.Entree.entree_price}</td>
        </tr>
    )
}

export default PreviousOrderTableBody;
