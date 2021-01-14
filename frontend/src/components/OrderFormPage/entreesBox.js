import React from 'react';
import { useHistory } from 'react-router-dom';

const EntreeBox = ({ entree }) => {
    const history = useHistory();


    return (
        <div className='entrees__entree-box'>
            <h2>{entree.entree_name}</h2>
            <h2><strong>${entree.entree_price}</strong></h2>
        </div>
    )
};


export default EntreeBox;
