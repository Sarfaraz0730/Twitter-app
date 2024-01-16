const express = require("express");
const multer = require('multer');
const path = require('path');

const PostTweetModel = require("../../model/TweetModel/PostTweetModel");
const UserModel = require("../../model/UserModel/UserModel");
const verify = require("../../helper/verify");


const router = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, "uploads"));
    },
    filename: function (req, file, cb) {
        return cb(null, `${Date.now()}-${file.originalname}`);
    }
});

const upload = multer({ storage }).fields([{ name: 'file', maxCount: 1 }]);

router.post("/", verify, upload, async (req, res) => {
    const decoded = req.decoded;
    const tweet = {};
    const userId = decoded._id;
    console.log("req.file", req.files)
    const hashtags = req.body.hashtags;
    console.log("hashtags", hashtags)

    if (req.body.descirption) {
        tweet.descirption = req.body.descirption;
    }

    if (req.files && req.files['file']) {
        tweet.image = req.files['file'][0].filename;
    }

    tweet.userId = userId;
    tweet.hashtags = hashtags

    try {
        const tweetPosted = await PostTweetModel.create(tweet);

        console.log("tweetPosted:", tweetPosted);

        const tweetString = JSON.stringify(tweet);

        return res.status(200).send(`Your tweet is successfully uploaded: ${tweetString}`);
    } catch (err) {
        console.error("Error creating tweet:", err);
        return res.status(500).send("Something went wrong from the server side");
    }
});

module.exports = router;