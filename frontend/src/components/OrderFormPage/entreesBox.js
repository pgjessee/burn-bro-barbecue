import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const EntreeBox = ({ entree }) => {
    const [amount, setAmount ] = useState(0)
    // const history = useHistory();

    const addToCartHandler = () => {
        // const cart = localStorage.getItem()
        if (localStorage.getItem(entree.id)) {
            let item = localStorage.getItem(entree.id)
            localStorage.setItem(entree.id, parseInt(amount, 10) + parseInt(item, 10))

        } else {
            localStorage.setItem(entree.id, parseInt(amount, 10))
        }
        setAmount(0)
    }

    const removeFromCartHandler = () => {
        localStorage.removeItem(entree.id);
        setAmount(0);
    };

    return (

        <div className='entree-line-container'>
            <div className='entrees-entree-box'>
                <h2>{entree.entree_name}</h2>
                <h2><strong>Price ${entree.entree_price}</strong></h2>
                <h2><strong>X</strong></h2>
                <input
                className="order-quantity-input"
                min={0}
                value={amount}
                onChange={(e) => setAmount(e.target.value < 0 ? 0 : e.target.value)}
                type="number"/>
                <h2><strong>=</strong></h2>
                <h2>$<span className="entree-order-total">{amount * entree.entree_price}</span></h2>
            </div>
            <div className="new-order-button-container">
                <button className="add-to-cart" onClick={addToCartHandler}>Add to Cart</button>
                <button className="remove-from-cart" onClick={removeFromCartHandler}>Remove from Cart</button>
            </div>
        </div>

    )
};


export default EntreeBox;


