const express = require('express');
const verify = require('../../helper/verify');
const PostTweetModel = require('../../model/TweetModel/PostTweetModel');
const router = express.Router()

router.patch("/:id", verify, async (req, res, next) => {
    console.log("param", req.params.id)

    const decoded = req.decoded;
    const userId = decoded._id;
    const data = req.body
    const postId = req.params.id;
    const editDescription = data.description;
    console.log("editDescription", editDescription)
    if (!userId) {
        return res.status(401).send("You cannot edit the tweet because you are not Authorised")
    }
    if (!postId) {
        return res.status(401).send("Post id required to edit the post")
    }
    try {
        const postDetails = await PostTweetModel.findOne({ _id: postId })
        console.log("postDetails", postDetails.userId)


        if (!postDetails) {
            return res.status(404).send("No tweet details found, so you cannnot edit the tweet")
        }
        // var a = postDetails.userId
        // var b = userId
        // console.log("check", a == b)
        // if (a !== b) {
        //     return res.status(404).json({ message: "The user who has posted the tweet and the user who is trying to edit the post is not same, due to that you cannot edit the post" })
        // }

        const editPost = await PostTweetModel.findOneAndUpdate({ _id: postId }, { descirption: editDescription })
        if (!editPost) {
            return res.status(404).send("Could not update this tweet")
        }

        return res.status(200).send("tweet is updated successfully")
    } catch (err) {
        return res.status(500).send("internal error")
    }

})
module.exports = router