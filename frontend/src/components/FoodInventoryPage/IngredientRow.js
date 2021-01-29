import React from 'react';


const IngredientRow = ({ ingredient }) => {

    return (
        <tr>
            <td className="ingredient-balance-id">{ingredient.id}</td>
            <td className="ingredient-balance-name">{ingredient.ingredient_name}</td>
            <td className="ingredient-balance-stock">{ingredient.food_in_stock}</td>
            <td className="ingredient-balance-measurement">{ingredient.Measurement.unit_name}</td>
        </tr>
    )
};

export default IngredientRow;
