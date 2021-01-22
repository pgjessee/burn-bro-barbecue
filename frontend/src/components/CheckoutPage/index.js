import React, { useState, useEffect } from 'react';
import { useSelector} from 'react-redux';
import { NavLink, Redirect } from 'react-router-dom';

import * as sessionActions from '../../store/session';
import { fetch } from '../../store/csrf';
import OrderLineItem from './OrderLineItem'


const CheckoutItems = ({ user }) => {
    const [lineItems, setLineItems] = useState([]);
    const [ordersTotal, setOrdersTotal] = useState((0));

    useEffect(() => {
        (async () => {

            let orderTotal = 0;
            let orderLineItems = [];
            for (let i = 0; i < localStorage.length; i++) {
                let entreeKey = localStorage.key(i);
                let res = await fetch(`/api/entrees/${entreeKey}`);
                let { entree } = res.data;
                let lineItemQuantity = parseInt(localStorage.getItem(entreeKey), 10);
                console.log(lineItemQuantity)
                entree["lineItemQuantity"] = lineItemQuantity
                orderTotal += (entree.entree_price * lineItemQuantity)
                console.log(entree)
                orderLineItems.push(entree)
            }
            setOrdersTotal(orderTotal)
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



        await fetch('/api/orders', {
            method: "POST",
            body: JSON.stringify({
                user_id: user.id,
                order_total: orderTotal
            })
        })

        let res = await fetch(`/api/orders/user-new-order/${user.id}`)
        let { order } = res.data;

        let foodDecrementer;
        for (let i = 0; i < localStorage.length; i++) {
            let entreeKey = localStorage.key(i);
            lineItemQuantity = localStorage.getItem(entreeKey);
            let res = await fetch(`/api/entrees/${entreeKey}`);
            let { entree } = res.data;

            foodDecrementer = entree.Entree_Ingredients;


            await fetch('/api/orders/order-entrees', {
                method: "POST",
                body: JSON.stringify({
                    order_id: order.id,
                    entree_id: entree.id,
                    quantity: parseInt(lineItemQuantity,10)
                })
            })

            let entreeIngredient, ingredientId, foodDelta, endBalance;
            for (let i = 0; i < foodDecrementer.length; i++) {

                entreeIngredient = foodDecrementer[i];
                ingredientId = entreeIngredient.ingredient_id;

                // let res = await fetch(`/api/ingredients/${ingredientId}`)
                let res = await fetch(`/api/ingredients/${ingredientId}`);

                let { ingredient } = res.data;


                foodDelta = -(entreeIngredient.quantity * lineItemQuantity)

                await fetch('/api/ingredients/food-log', {
                    method: "POST",
                    body: JSON.stringify({
                        ingredient_id: entreeIngredient.ingredient_id,
                        employee_id: 1,
                        food_log_delta: foodDelta,
                        measurement_id: entreeIngredient.measurement_id,
                        beginning_balance: ingredient.food_in_stock,
                        ending_balance: (ingredient.food_in_stock + foodDelta)
                    })
                })

                await fetch(`/api/ingredients/${ingredientId}`, {
                    method: "PUT",
                    body: JSON.stringify({
                        food_delta: (ingredient.food_in_stock + foodDelta)
                    })
                })
            }

        }

        localStorage.clear();
         return <Redirect exact to="/" />
    };

    return (
        <div className="checkout-page">
        <div className="checkout-page-header"><h1>Checkout</h1></div>
            <div className='checkout-container'>
                <table>
                    <thead>
                        <tr>
                            <th>Entrée</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Entrée Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {lineItems.map(lineItem => {
                            return <OrderLineItem key={lineItem.id} lineItem={lineItem}/>
                        })}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td>
                                Order Total: ${ordersTotal}
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
            <div className="submit-new-order">
                <button type="submit" onClick={submitOrder}>Submit Order</button>
            </div>
            <div className="home-button">
                <NavLink to="/"><button className="navigation-button">Return Home</button></NavLink>
            </div>
        </div>
    )
};


export default CheckoutItems;






