const express = require('express');
const asyncHandler = require('express-async-handler');

const { Review } = require('../../db/models')

const router = express.Router();


router.get('/', asyncHandler(async(req, res) => {

    const reviews = await Review.findAll();
    const reviewsJson = res.json({reviews});
    return reviewsJson;
}))

module.exports = router;
