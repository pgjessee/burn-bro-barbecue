import React from 'react';
import { useHistory } from 'react-router-dom';

const EntreeBox = ({ entree }) => {
    // const history = useHistory();


    return (
        <>
        <div className='entrees__entree-box'>
            <h2>{entree.entree_name}</h2>
            <h2><strong>${entree.entree_price}</strong></h2>
            <input type="number"/>
            <h2>$<span className="entree-order-total">0</span></h2>
        </div>
        <div>
            <button>Add to Cart</button>
            <button>Remove from Cart</button>
        </div>
        </>
    )
};


export default EntreeBox;
