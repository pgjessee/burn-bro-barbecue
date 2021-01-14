const express = require('express');
const asyncHandler = require('express-async-handler');

const { Review, User } = require('../../db/models')

const router = express.Router();


router.get('/', asyncHandler(async(req, res) => {

    const reviews = await Review.findAll({
        include: User
    });
    const reviewsJson = res.json({reviews});
    return reviewsJson;
}))

module.exports = router;
