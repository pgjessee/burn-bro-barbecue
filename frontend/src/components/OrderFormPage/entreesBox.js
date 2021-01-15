import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const EntreeBox = ({ entree }) => {
    const [amount, setAmount ] = useState(0)
    // const history = useHistory();

    const addToCartHandler = () => {
        // const cart = localStorage.getItem()
        localStorage.setItem(entree.entree_name, amount)
    }

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
            <button>Remove from Cart</button>
        </div>
        </>
    )
};


export default EntreeBox;

