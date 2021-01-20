import React, {useState, useEffect } from 'react';


const OrderLineItem = ({ lineItem }) => {


    return (
        <tr>
            <td>{lineItem.entree_name}</td>
            <td>${lineItem.entree_price}</td>
            <td>{lineItem.lineItemQuantity}</td>
            <td>${lineItem.lineItemQuantity * lineItem.entree_price}</td>
            <td><button>Delete</button></td>
        </tr>
    )
};

export default OrderLineItem;
