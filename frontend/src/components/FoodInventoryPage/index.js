import React, { useState, useEffect } from 'react';

import { fetch } from '../../store/csrf';

const DisplayFoodInventory = () => {
    const [allIngredients, setAllIngredients] = useState([]);
    const [foodLog, setFoodLog] = useState([]);

    useEffect(() => {
        (async() => {
            let res;

            res = await fetch('/api/ingredients')
            console.log(res)
        })()
    }, [])

    return (
        <div className="inventory-container">
            <div className="ingredients-container">
                <table>
                    <thead>
                        <tr>
                            <th>Ingredeint ID</th>
                            <th>Ingredient Name</th>
                            <th>Inventory Stock</th>
                            <th>Unit of Measurement</th>
                        </tr>
                    </thead>
                </table>
                <div></div>
                <table>
                    <thead>
                        <tr>
                            <th>Log ID</th>
                            <th>Employee Email</th>
                            <th>Ingredient Name</th>
                            <th>Inventory Delta</th>
                            <th>Unit of Measurement</th>
                            <th>Beginning Balance</th>
                            <th>Ending Balance</th>
                        </tr>
                    </thead>
                </table>
            </div>
        </div>
    )
}


export default DisplayFoodInventory;
