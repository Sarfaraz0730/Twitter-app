const express = require('express')
const signin = require("./User-routes/signin")
const login = require("./User-routes/login")
const profile =require("./User-routes/profile")
const home= require("./Home-route/home")
const editProfile= require("./User-routes/editProfile")
const error = require("./Home-route/error")
const postTweet = require("./Tweets/postTweet")
const like = require("./User-routes/like")
const retweet = require("./Tweets/reTweet")
const getAllTweet = require("./Tweets/getAllTweets")
const editTweet = require('./Tweets/editTweet')
const deleteTweet = require("./Tweets/deleteTweet")
const addFollower = require("./User-routes/addFollower")

const router = express.Router()
router.use("/signup", signin)
router.use("/login",login)
router.use("/profile", profile)
router.use("/",home);
router.use("/editProfile",editProfile)
router.use("/postTweet",postTweet)
router.use("/like", like)
router.use("/retweet",retweet)
router.use("/getalltweets",getAllTweet)
router.use("/edittweet",editTweet)
router.use("/deletetweet",deleteTweet)
router.use("/addFollower",addFollower)






router.use("*",error)

module.exports = router