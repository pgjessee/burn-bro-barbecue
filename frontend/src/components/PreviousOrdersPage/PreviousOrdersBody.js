import React from 'react'


const PreviousOrderTableBody = ({ orderEntree }) => {

    return (
        <tr>
            <td className="previous-order-entree">{orderEntree.Entree.entree_name}</td>
            <td className="previous-order-entree-price">${orderEntree.Entree.entree_price}</td>
            <td className="previous-orders-multiplier">X</td>
            <td className="previous-entree-quantity">{orderEntree.quantity}</td>
            <td className="previous-entree-subtotal">${orderEntree.quantity * orderEntree.Entree.entree_price}</td>
        </tr>
    )
}

export default PreviousOrderTableBody;
