const express = require('express');
const asyncHandler = require('express-async-handler');

const { setTokenCookie } = require('../../utils/auth.js');
const { User, Employee } = require('../../db/models');
const { restoreUser } = require('../../utils/auth.js');
const { requireAuth } = require('../../utils/auth.js');

const sessionRouter = require('./session');
const usersRouter = require('./users');
const entreesRouter = require('./entrees');
const employeesRouter = require('./employees');
const ingredientsRouter = require('./ingredients');
const reviewsRouter = require('./reviews');
const ordersRouter = require('./orders');
const foodLogsRouter = require('./foodLogs')


const router = express.Router();

router.use("/session",sessionRouter);
router.use("/users", usersRouter);
router.use('/entrees', entreesRouter);
router.use('/employees', employeesRouter);
router.use('/ingredients', ingredientsRouter);
router.use('/reviews', reviewsRouter);
router.use('/orders', ordersRouter);
router.use('/food-logs', foodLogsRouter);

router.post('/test', (req, res) => {
    res.json({ requestBody: req.body });
});



router.get('/set-token-cookie', asyncHandler(async(req, res) => {
    const user = await User.findOne({
        where: {
            email: "peter@aa.io"
        },
    })
    setTokenCookie(res, user);
    return res.json({ user });
}));



router.get(
    '/restore-user',
    restoreUser,
    (req, res) => {
      return res.json(req.user);
    }
);

// router.get(
//     '/csrf/restore',
//     restoreUser,
//     (req, res) => {
//       return res.json(req.user);
//     }
// );

router.get(
    '/require-auth',
    requireAuth,
    (req, res) => {
      return res.json(req.user);
    }
);


// router.post('/test', function(req, res) {
//     res.json({ requestBody: req.body });
// });


module.exports = router;
