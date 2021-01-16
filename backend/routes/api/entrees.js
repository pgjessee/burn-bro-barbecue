const express = require('express');
const asyncHandler = require('express-async-handler');


const { Entree, Entree_Ingredient } = require('../../db/models');

const router = express.Router();


router.get('/', asyncHandler(async (req, res) => {
    const entrees = await Entree.findAll();
    const entreesJson = res.json({entrees});
    return entreesJson
}))

router.get('/:id(\\d+)', asyncHandler(async (req, res, next) => {
    const entreeId = parseInt(req.params.id, 10);
    const entree = await Entree.findByPk(entreeId);

    return res.json({ entree })
}))


module.exports = router;
