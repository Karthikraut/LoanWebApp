const express = require('express');
const router = express.Router();
const {create, signIn, isAuthenticated} = require("../controllers/userController");
const adminRoutes = require("../routes/admin/index")
const loanRoutes =require("../routes/loan");
router.use('/createUser', create);

router.use('/signIn',signIn);

router.use('/isAuth',isAuthenticated);

router.use('/admin',adminRoutes);

router.use('/loan',loanRoutes);
module.exports = router;