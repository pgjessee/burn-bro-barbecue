const express = require('express');
const asyncHandler = require('express-async-handler');
const { Order } = require('../../db/models')


const router = express.Router()


router.post('/', asyncHandler(async(req, res, next) => {
    const { user_id, order_total } = req.body;

    const newOrder = await Order.create({
        user_id,
        order_total
    });

    return res.json({ newOrder });

}))


module.exports = router;
