import React from 'react';


const IngredientRow = ({ ingredient }) => {

    return (
        <tr>
            <td>{ingredient.id}</td>
            <td>{ingredient.ingredient_name}</td>
            <td>{ingredient.food_in_stock}</td>
            <td>{ingredient.Measurement.unit_name}</td>
        </tr>
    )
};

export default IngredientRow;
