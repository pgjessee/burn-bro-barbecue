const express = require('express');
const asyncHandler = require('express-async-handler');

const { setTokenCookie } = require('../../utils/auth.js');
const { User } = require('../../db/models');
const { restoreUser } = require('../../utils/auth.js');
const { requireAuth } = require('../../utils/auth.js');

const sessionRouter = require('./session');
const usersRouter = require('./users');


const router = express.Router();

router.use("/session",sessionRouter);
router.use("/users", usersRouter);



module.exports = router;

// router.get('/set-token-cookie', asyncHandler(async(req, res) => {
//     const user = await User.findOne({
//         where: {
//             email: "peter@aa.io"
//         },
//     })
//     setTokenCookie(res, user);
//     return res.json({ user });
// }));

// router.get(
//     '/restore-user',
//     restoreUser,
//     (req, res) => {
//       return res.json(req.user);
//     }
// );

// router.get(
//     '/require-auth',
//     requireAuth,
//     (req, res) => {
//       return res.json(req.user);
//     }
// );

// router.post('/test', (req, res) => {
//     res.json({ requestBody: req.body });
// });







