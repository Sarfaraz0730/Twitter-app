const express = require('express');
const PostTweetModel = require('../../model/TweetModel/PostTweetModel');
const verify = require('../../helper/verify');
const router = express.Router()

router.delete("/:id", verify, async (req, res, next) => {
    const userId = req.decoded._id
    console.log("params", req.params)
    const postId = req.params.id
    if (!postId) {
        return res.status(404).send("post id is required to delete this post")
    }
    try {
        const postDetails = await PostTweetModel.findOne({ _id: postId })
        if (!postDetails) {
            return res.status(404).send("postDetails not found by id,may be post already deleted")
        }
        // const tweeterId = postDetails.userId;
        // var isAuthUser = (tweeterId == userId)
        // console.log("check", isAuthUser)
        // if (isAuthUser) {
        // }
        // return res.status(404).json({ message: "The user who has posted the tweet and the user who is trying to delete the post is not same, due to that you cannot delete the post" })
        await PostTweetModel.findByIdAndDelete({ _id: postId })
        return res.status(200).send("Post deleted Successfully")



    } catch (err) {
        return res.status(500).send("internal server error")
    }
})
module.exports = router