const express = require('express');
const router = express.Router();
const {create, signIn, isAuthenticated} = require("../controllers/userController");

router.use('/createUser', create);

router.use('/signIn',signIn);

router.use('/isAuth',isAuthenticated);

module.exports = router;