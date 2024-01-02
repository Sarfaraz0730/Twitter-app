const express = require('express')
const signin = require("./User-routes/signin")
const login = require("./User-routes/login")
const profile =require("./User-routes/profile")
const home= require("./Home-route/home")
const editProfile= require("./User-routes/editProfile")
const error = require("./Home-route/error")

const router = express.Router()


router.use("/signin", signin)
router.use("/login",login)
router.use("/profile", profile)
router.use("/",home);
router.use("/editProfile",editProfile)
router.use("*",error)

module.exports = router