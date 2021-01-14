import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './OrderForm.css'

import EntreeBox from './entreesBox';

const ListEntrees = () => {
    const [allEntrees, setAllEntrees] = useState([])

    useEffect(() => {
        (async () => {
            const res = await fetch('/api/entrees/');
            const { entrees } = await res.json();
            setAllEntrees(entrees)
        })()
    }, [])

    return (
        <>
        <div className='new-order-header'><h1>Place a New Order</h1></div>
        <div className='entrees-container'>
            {allEntrees.map(entree => {
                return <EntreeBox key={entree.id} entree={entree}/>
            })}
        </div>
        <div className="new-order__checkout">
            <NavLink to="/new-order/checkout"><button className="navigation-button">Proceed to Checkout</button></NavLink>
        </div>
        </>
    )
}

export default ListEntrees;
