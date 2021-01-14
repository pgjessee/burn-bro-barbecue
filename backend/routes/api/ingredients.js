const express = require('express');
const asyncHandler = require('express-async-handler');

const { Ingredient } = require('../../db/models')

const router = express.Router();


router.get('/', asyncHandler(async(req, res) => {

    const ingredients = await Ingredient.findAll();
    const ingredientsJSon = res.json({ ingredients })
    return ingredientsJSon
}));



module.exports = router;
