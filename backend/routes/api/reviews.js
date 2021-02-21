const express = require('express');
const asyncHandler = require('express-async-handler');

const { Review, User } = require('../../db/models')

const router = express.Router();


router.get('/', asyncHandler(async(req, res) => {

    const reviews = await Review.findAll({
        include: User,
        order: [["createdAt", "DESC"]]
    });
    const reviewsJson = res.json({reviews});
    return reviewsJson;
}));

router.post('/', asyncHandler(async(req, res, next) => {
    const { review, user_id } = req.body;

    const newReview = await Review.create({
        review,
        user_id
    });

    return res.json({ newReview })

}));

router.delete('/:reviewId', asyncHandler(async (req, res, next) => {
    const review_id = parseInt(req.params.reviewId, 10);

    const review = await Review.findByPk(review_id);

    review.destroy();

}));


module.exports = router;
