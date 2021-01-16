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
        <>
        <div className='entrees__entree-box'>
            <h2>{entree.entree_name}</h2>
            <h2><strong>${entree.entree_price}</strong></h2>
            <input
            min={0}
            value={amount}
            onChange={(e) => setAmount(e.target.value < 0 ? 0 : e.target.value)}
            type="number"/>
            <h2>$<span className="entree-order-total">{amount * entree.entree_price}</span></h2>
        </div>
        <div>
            <button onClick={addToCartHandler}>Add to Cart</button>
            <button onClick={removeFromCartHandler}>Remove from Cart</button>
        </div>
        </>
    )
};


export default EntreeBox;


