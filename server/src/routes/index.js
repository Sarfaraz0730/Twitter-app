const express = require('express')
const signin = require("./User-routes/signin")
const login = require("./User-routes/login")
const profile =require("./User-routes/profile")
const home= require("./Home-route/home")
const router = express.Router()


router.use("/signin", signin)
router.use("/login",login)
router.use("/profile", profile)
router.use("/",home)

module.exports = router