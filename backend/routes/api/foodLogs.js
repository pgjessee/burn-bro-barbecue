const express = require('express');
const asyncHandler = require('express-async-handler');

const { Food_Log, Ingredient, Measurement, Employee } = require('../../db/models')

const router = express.Router();

router.get('/', asyncHandler(async(req, res) => {
    const foodLogs = await Food_Log.findAll({
        include: [Ingredient, Measurement, Employee],
        order: [["createdAt", "DESC"]]
    })

    return res.json({ foodLogs })
}))

router.post('/', asyncHandler(async(req, res) => {

}))


module.exports = router;

