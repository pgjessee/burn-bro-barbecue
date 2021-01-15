import React, {useState, useEffect } from 'react';


const OrderLineItem = ({ lineItem }) => {


    return (
        <>
        <div className="line-items__item-box">
            <h2>{lineItem.entree_name}</h2>
            <h2><strong>${lineItem.entree_price}</strong></h2>
            <button>Remove Item(s)</button>
        </div>
        </>
    )
};

export default OrderLineItem;
