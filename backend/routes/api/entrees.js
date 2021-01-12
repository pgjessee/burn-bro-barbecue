const express = require('express');
const asyncHandler = require('express-async-handler');


const { Entree } = require('../../db/models');

const router = express.Router();


router.get('/', asyncHandler(async (req, res) => {
    const entrees = await Entree.findAll();
    const entreesJson = res.json({entrees});
    return entreesJson
}))


module.exports = router;
