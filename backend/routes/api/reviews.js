const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');

const { Review, User } = require('../../db/models')
const { handleValidationErrors } = require('../../utils/validation')
const router = express.Router();


const validateReviewSubmit = [
    check('review')
        .exists({ checkFalsy: true })
        .notEmpty()
        .withMessage("Please leave a review before submitting."),
    check('review')
        .isLength({ max: 500})
        .withMessage("A review cannot be more than 500 characters in length."),
    handleValidationErrors
]

router.get('/', asyncHandler(async(req, res) => {

    const reviews = await Review.findAll({
        include: User,
        order: [["createdAt", "DESC"]]
    });
    const reviewsJson = res.json({reviews});
    return reviewsJson;
}));

router.post('/', validateReviewSubmit, asyncHandler(async(req, res, next) => {
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
