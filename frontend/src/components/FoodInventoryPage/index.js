import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import IngredientRow from './IngredientRow';
import FoodLog from './FoodLog'
import { fetch } from '../../store/csrf';

import './FoodInventoryPage.css'

const DisplayFoodInventory = () => {
    const [allIngredients, setAllIngredients] = useState([]);
    const [foodInventoryLogs, setFoodInventoryLogs] = useState([]);

    useEffect(() => {
        (async() => {
            let res;

            res = await fetch('/api/ingredients')
            const { ingredients } = res.data;
            setAllIngredients(ingredients);

            res = await fetch('/api/food-logs')
            const { foodLogs } = res.data;

            let foodLog;
            let y = 0;
            for (let i = foodLogs.length; i >= 1; i--) {
                foodLog = foodLogs[y];
                foodLog["id"] = i;
                y += 1
            };
            console.log(foodLogs)

            setFoodInventoryLogs(foodLogs);

        })()
    }, [])

    return (
        <div className="inventory-container">
            <div className="home-button">
                <NavLink to="/"><button className="navigation-button">Return Home</button></NavLink>
            </div>
            <div className="ingredients-balance-header"><h1>Ingredients Balance</h1></div>
            <div className="ingredients-container">
                <table className="food-inventory-balance">
                    <thead className="food-log-theads">
                        <tr>
                            <th>Ingredient ID</th>
                            <th>Ingredient Name</th>
                            <th>Inventory Stock</th>
                            <th>Unit of Measurement</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allIngredients.map(ingredient => {
                            return <IngredientRow key={ingredient.id} ingredient={ingredient} />
                        })}
                    </tbody>
                </table>
                {/* <div></div> */}
                <div className="food-log-header"><h1>Food Log</h1></div>
                <table className="food-log-table">
                    <thead className="food-log-theads">
                        <tr>
                            <th>Employee Name</th>
                            <th>Ingredient Name</th>
                            <th>Inventory Delta</th>
                            <th>Unit of Measurement</th>
                            <th>Beginning Balance</th>
                            <th>Ending Balance</th>
                            <th>Created At</th>
                        </tr>
                    </thead>
                    <tbody>
                        {foodInventoryLogs.map(foodLog => {
                            return <FoodLog key={foodLog.id} foodLog={foodLog}/>
                        })}
                    </tbody>
                </table>
                <div className="home-button">
                    <NavLink to="/"><button className="navigation-button">Return Home</button></NavLink>
                </div>
            </div>
        </div>
    )
}


export default DisplayFoodInventory;
