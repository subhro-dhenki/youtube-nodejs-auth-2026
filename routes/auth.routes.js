const express = require("express")
const {registeruser,loginUser,changePassword} = require("../controllers/auth.controller")
const router = express.Router()
const authMiddleware = require('../middleware/auth.middleware')


// all routes are related to authentication & authorization
router.post("/register",registeruser)
router.post("/login",loginUser)
router.post("/change-password",authMiddleware,changePassword)


module.exports = router