import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import OrderLineItem from './OrderLineItem'

const submitOrder = async () => {
    
};

const CheckoutItems = () => {
    const [lineItems, setLineItems] = useState([]);

    useEffect(() => {
        (async () => {
            let orderLineItems = [];

            for (let i = 0; i < localStorage.length; i++) {
                let entreeKey = localStorage.key(i);
                let res = await fetch(`/api/entrees/${entreeKey}`);
                let { entree } = await res.json();
                console.log(entree);
                orderLineItems.push(entree)
            }
            setLineItems(orderLineItems)
        })()

    }, [])

    return (
        <div>
            <div className="checkout-page-header"><h1>Checkout</h1></div>
            <div className='checkout-container'>
                {lineItems.map(lineItem => {
                    console.log(lineItem)
                    console.log("ANYTHING")
                    return <OrderLineItem key={lineItem.id} lineItem={lineItem}/>
                })}
            </div>
            <div className="submit-new-order">
                <button type="submit" >Submit Order</button>
            </div>
        </div>
    )
};


export default CheckoutItems;






