const express = require('express');
const asyncHandler = require('express-async-handler');
const { Order, Order_Entree, Entree } = require('../../db/models')


const router = express.Router()

router.get('/:id(\\d+)', asyncHandler(async (req, res) => {
    const userId = parseInt(req.params.id, 10);
    const orders = await Order.findAll({
        where: {
            user_id: userId
        },
        include: [Order_Entree, Entree]
    });

    return res.json({ orders })
}));

router.get('/user/:id(\\d+)', asyncHandler(async (req, res) => {
    const userId = parseInt(req.params.id, 10);
    const orders = await Order.findAll({
        where: {
            user_id: userId
        },
        include: {
            model: Order_Entree,
            include: Entree
        }
    });

    return res.json({ orders })
}));


router.get('/user-new-order/:id(\\d+)', asyncHandler(async(req, res) => {
    const userId = parseInt(req.params.id, 10);
    const order = await Order.findOne({
        where: {
            user_id: userId
        },
        order: [["createdAt", "DESC"]]
    })

    return res.json({ order });

}));

router.post('/', asyncHandler(async(req, res, next) => {
    const { user_id, order_total } = req.body;

    const newOrder = await Order.create({
        user_id,
        order_total
    });

    return res.json({ newOrder });

}));

router.post('/', asyncHandler(async(req, res, next) => {
    const { user_id, order_total } = req.body;

    const newOrder = await Order.create({
        user_id,
        order_total
    });

    return res.json({ newOrder });

}));

router.post('/order-entrees', asyncHandler(async(req, res) => {
    const { order_id, entree_id, quantity} = req.body;

    newOrderEntree = await Order_Entree.create({
        order_id,
        entree_id,
        quantity
    });

    return res.json({ newOrderEntree })

}));


module.exports = router;
