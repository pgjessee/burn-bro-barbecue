import React, { useState, useEffect } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './OrderForm.css'

import EntreeBox from './entreesBox';

const ListEntrees = () => {
    const sessionUser = useSelector(state => state.session.user);
    const history = useHistory();
    const [allEntrees, setAllEntrees] = useState([])

    if (!sessionUser) history.push("/")

    useEffect(() => {
        (async () => {
            const res = await fetch('/api/entrees/');
            const { entrees } = await res.json();
            setAllEntrees(entrees)
        })()
    }, [])

    return (
        <div className="new-order-page-container">
            <div className='new-order-header'><h1>Place a New Order</h1></div>
            <div className='entrees-container'>
                {allEntrees.map(entree => {
                    return <EntreeBox key={entree.id} entree={entree}/>
                })}
            </div>
            <div className="new-order__checkout">
                <NavLink to="/new-order/checkout"><button className="order-navigation-button">Proceed to Checkout</button></NavLink>
            </div>
            <div className="return-home-button">
                <NavLink exact to="/"><button className="order-navigation-button">Return Home</button></NavLink>
            </div>
        </div>
    )
}

export default ListEntrees;
