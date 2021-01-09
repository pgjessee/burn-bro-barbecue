const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');

const { setTokenCookie, restoreUser } = require('../../utils/auth');
const { handleValidationErrors } = require('../../utils/validation')
const { User, Employee } = require('../../db/models');


const router = express.Router();

const validateLogin = [
    check('credential')
        .exists({ checkFalsy: true})
        .notEmpty()
        .withMessage('Please provide your user email'),
    check('password')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a password.'),
    handleValidationErrors
];

router.get('/', restoreUser, (req, res) => {
    const { user } = req;
    if (user) {
        return res.json({
            user: user.toSafeObject()
        });
    } else return res.json({});
});

// The user of an application can either be a customer (user) or an employee

router.post('/', validateLogin, asyncHandler(async(req, res, next) => {
    const { credential, password } = req.body;

    let employeeEmail = "@burnbro.com"
    let emailIndex = credential.indexOf('@');
    let emailChecker = credential.slice(emailIndex);


    let user;
    // The user will now be assigned whether it is an employee or customer (user)

    if (emailChecker === employeeEmail) {
        user = await Employee.login({credential, password})
        if (!user.is_active) user = null;
    } else {
        user = await User.login({credential, password});
    };



    if (!user) {
        const err = new Error("Login failed");
        err.status = 401;
        err.title = "Login failed";
        err.errors = ['The provided credentials were invalid.'];
        return next(err);
    };

    setTokenCookie(res, user);

    return res.json({ user });

}));


router.delete('/', (_req, res) => {
    res.clearCookie('token');
    return res.json({ message: 'success' });
});

module.exports = router;
