const express = require('express')
const signin = require("./User-routes/signin")
const login = require("./User-routes/login")
const router = express.Router()
router.use("/signin", signin)
router.use("/login",login)

module.exports = router