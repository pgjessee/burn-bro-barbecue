import React, { useState, useEffect } from 'react';
import { useSelector} from 'react-redux';
import { NavLink, Redirect } from 'react-router-dom';

import * as sessionActions from '../../store/session';
import { fetch } from '../../store/csrf';
import OrderLineItem from './OrderLineItem'



const CheckoutItems = ({ user }) => {
    const [lineItems, setLineItems] = useState([]);
    console.log(user)
    useEffect(() => {
        (async () => {
            let orderLineItems = [];

            for (let i = 0; i < localStorage.length; i++) {
                let entreeKey = localStorage.key(i);
                let res = await fetch(`/api/entrees/${entreeKey}`);
                let { entree } = res.data;
                console.log(entree);
                orderLineItems.push(entree)
            }
            setLineItems(orderLineItems)
        })()

    }, [])

    const submitOrder = async () => {

        let orderTotal = 0;
        let entreeKey, lineItemQuantity

        for (let i = 0; i < localStorage.length; i++) {
            entreeKey = localStorage.key(i);
            let res = await fetch(`/api/entrees/${entreeKey}`);
            let { entree } = res.data;
            lineItemQuantity = localStorage.getItem(entreeKey);
            orderTotal += (parseInt(lineItemQuantity, 10) * entree.entree_price);
        };

        console.log(orderTotal)

        await fetch('/api/orders', {
            method: "POST",
            body: JSON.stringify({
                user_id: user.id,
                order_total: orderTotal
            })
        })

        let res = await fetch(`/api/orders/user-new-order/${user.id}`)
        let { order } = res.data;

        for (let i = 0; i < localStorage.length; i++) {
            let entreeKey = localStorage.key(i);
            lineItemQuantity = localStorage.getItem(entreeKey);
            let res = await fetch(`/api/entrees/${entreeKey}`);
            let { entree } = res.data;

            await fetch('/api/orders/order-entrees', {
                method: "POST",
                body: JSON.stringify({
                    order_id: order.id,
                    entree_id: entree.id,
                    quantity: parseInt(lineItemQuantity,10)
                })
            })
        }

        localStorage.clear();
        <Redirect exact to="/" />
    };

    return (
        <div>
            <div className="checkout-page-header"><h1>Checkout</h1></div>
            <div className='checkout-container'>
                {lineItems.map(lineItem => {
                    return <OrderLineItem key={lineItem.id} lineItem={lineItem}/>
                })}
            </div>
            <div className="submit-new-order">
                <button type="submit" onClick={submitOrder}>Submit Order</button>
            </div>
        </div>
    )
};


export default CheckoutItems;






