import React, { useState } from 'react';
import EntreeBox from '../OrderFormPage/entreesBox';

const MenuEntreeBox = ({ entree }) => {


    return (
        <div className='meu__entree-box'>
            <h2>{entree.entree_name}</h2>
            <h2><strong>${entree.entree_price}</strong></h2>
        </div>
    )
};

export default MenuEntreeBox;
