const express = require('express');
const asyncHandler = require('express-async-handler');

const { Ingredient, Food_Log, Measurement } = require('../../db/models')

const router = express.Router();


router.get('/', asyncHandler(async(req, res) => {
    const ingredients = await Ingredient.findAll({
        include: Measurement,
        order: [["id", "ASC"]]
    });
    const ingredientsJSon = res.json({ ingredients })
    return ingredientsJSon
}));

router.get('/:id(\\d+)', asyncHandler(async(req, res, next) => {
    const ingredientId = parseInt(req.params.id, 10);
    const ingredient = await Ingredient.findByPk(ingredientId)
    return res.json({ ingredient });
}))

router.put('/:id(\\d+)', asyncHandler(async(req, res, next) => {
    const { food_delta } = req.body;
    const ingredientId = parseInt(req.params.id, 10);
    const ingredient = await Ingredient.findByPk(ingredientId);

    await ingredient.update({ food_in_stock: food_delta})
    return res.json({ ingredient });
}));


router.post('/food-log', asyncHandler(async(req, res, next) => {
    const {
        ingredient_id,
        employee_id,
        food_log_delta,
        measurement_id,
        beginning_balance,
        ending_balance
    } = req.body;

    const foodLog = await Food_Log.create({
        ingredient_id,
        employee_id,
        food_log_delta,
        measurement_id,
        beginning_balance,
        ending_balance
    })

    return res.json({ foodLog });

}))

module.exports = router;
