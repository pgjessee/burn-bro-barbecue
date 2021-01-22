import React from 'react';


const FoodLog = ({ foodLog }) => {
    return (
        <tr>
            <td>{foodLog.Employee.first_name}</td>
            <td>{foodLog.Ingredient.ingredient_name}</td>
            <td>{foodLog.food_log_delta}</td>
            <td>{foodLog.Measurement.unit_name}</td>
            <td>{foodLog.beginning_balance}</td>
            <td>{foodLog.ending_balance}</td>
            <td>{foodLog.createdAt}</td>
        </tr>
    )
}


export default FoodLog;
