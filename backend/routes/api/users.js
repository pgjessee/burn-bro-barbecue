const express = require('express')
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { handleValidationErrors } = require('../../utils/validation');
const { User, Review, Order } = require('../../db/models')

const router = express.Router();

const validateSignup = [
    check('first_name')
        .exists({ checkFalsy: true})
        .notEmpty()
        .withMessage("Please provide your first name."),
    check('first_name')
        .exists({ checkFalsy: true })
        .not()
        .isEmail()
        .withMessage('First name cannot be an email.'),
    check('first_name')
        .isLength({ max: 50})
        .withMessage("Your first name cannot be more than 50 characters long"),
    check('email')
        .exists({ checkFalsy: true})
        .isEmail()
        .withMessage('Please provide a valid email.'),
    check('email')
        .custom((value) => {
            if (value.slice(value.indexOf('@')) === '@burnbro.com') {
                throw new Error('Nice try! You cannot have a Burn Bro email!')
            }
            return true
        }),
    check('zip')
        .exists({ checkFalsy: true})
        .withMessage('Please provide a zip code'),
    check('zip')
        .isLength({ min:5, max:5})
        .withMessage('Zip code must be five digits in length')
        .custom((value) => {
            const reg = /^[\d-]+$/
            if (!value.match(reg)) {
                throw new Error('Zip code must only contain numbers')
            }
            return true;
        }),
    check('password')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a password.'),
    handleValidationErrors
];



router.post('', validateSignup, asyncHandler(async (req, res) => {

    const { first_name, email, zip, password } = req.body;

    const user = await User.signup({ first_name, email, zip, password });

    setTokenCookie(res, user);

    return res.json({ user })

}));


router.get('/:id(\\d+)', asyncHandler(async (req, res, next) => {
    const userId = parseInt(req.params.id, 10);

    const userData = await User.findByPk(userId, {
        include: [Review, Order]
    });

    return res.json({ userData })
}));

module.exports = router;



