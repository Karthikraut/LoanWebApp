const express = require('express');
const router = express.Router();
const {createLoan, updateLoan, getAllUsers, getUserById} = require("../../controllers/loanController");

router.use('/create',createLoan);
router.use('/update',updateLoan);

module.exports =router;