import React from 'react';


const FoodLog = ({ foodLog }) => {
    return (
        <tr>
            <td className="food-log-employee">{foodLog.Employee.first_name}</td>
            <td className="food-log-ingredient">{foodLog.Ingredient.ingredient_name}</td>
            <td className="food-log-delta">{foodLog.food_log_delta}</td>
            <td className="food-log-measurement">{foodLog.Measurement.unit_name}</td>
            <td className="food-log-beginning-balance">{foodLog.beginning_balance}</td>
            <td className="food-log-ending-balance">{foodLog.ending_balance}</td>
            <td>{foodLog.createdAt}</td>
        </tr>
    )
}


export default FoodLog;
