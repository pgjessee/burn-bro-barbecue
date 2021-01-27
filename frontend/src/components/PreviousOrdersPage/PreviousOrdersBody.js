import React from 'react'


const PreviousOrderTableBody = ({ orderEntree }) => {

    return (
        <tr>
            <td>{orderEntree.Entree.entree_name}</td>
            <td>${orderEntree.Entree.entree_price}</td>
            <td>X</td>
            <td>{orderEntree.quantity}</td>
            <td>${orderEntree.quantity * orderEntree.Entree.entree_price}</td>
        </tr>
    )
}

export default PreviousOrderTableBody;
