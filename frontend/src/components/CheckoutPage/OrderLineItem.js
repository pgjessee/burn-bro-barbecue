import React, {useState, useEffect } from 'react';


const OrderLineItem = ({ lineItem }) => {


    return (
        <tr>
            <td className="checkout-entree-line-item">{lineItem.entree_name}</td>
            <td className="checkout-entree-line-item-price">${lineItem.entree_price}</td>
            <td className="checkout-entree-line-item-multiplier">X</td>
            <td className="checkout-entree-line-item-quantity">{lineItem.lineItemQuantity}</td>
            <td className="checkout-entree-line-item-subtotal">${lineItem.lineItemQuantity * lineItem.entree_price}</td>
            <td className="checkout-line-item-delete-container"><button className="delete-checkout-line-item">Delete</button></td>
        </tr>
    )
};

export default OrderLineItem;
