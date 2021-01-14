const express = require('express');
const asyncHandler = require('express-async-handler');

const { Employee } = require('../../db/models');

const router = express.Router();


router.get('/', asyncHandler(async (req, res) => {
    const employees = await Employee.findAll();
    const employeesJson = await res.json({employees});
    return employeesJson;
}))

module.exports = router;
