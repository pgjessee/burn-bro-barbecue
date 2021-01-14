import React, { useState, useEffect } from 'react';

import './OrderForm.css'

import EntreeBox from './entreesBox';

const ListEntrees = () => {
    const [allEntrees, setAllEntrees] = useState([])

    useEffect(() => {
        (async () => {
            const res = await fetch('/api/entrees/');
            const { entrees } = await res.json();
            console.log(entrees)
            setAllEntrees(entrees)
        })()
    }, [])

    return (
        <>
        <div className='new-order-header'><h1>Place a New Order</h1></div>
        <div className='entrees_container'>
            {allEntrees.map(entree => {
                return <EntreeBox key={entree.id} entree={entree}/>
            })}
        </div>
        </>
    )
}

export default ListEntrees;
