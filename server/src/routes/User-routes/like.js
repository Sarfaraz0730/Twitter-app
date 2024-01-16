const express = require('express');
const mongoose = require('mongoose');
const verify = require('../../helper/verify');
const PostTweetModel = require('../../model/TweetModel/PostTweetModel');
const router = express.Router();

router.post("/", verify, async (req, res, next) => {
    const decoded = req.decoded;
    const username = decoded.username;
    const userId = new mongoose.Types.ObjectId(decoded._id);
    const post_id = req.body.post_id;

    console.log("postId", post_id);
    console.log("username, userid", username, userId);

    if (!username) {
        return res.status(401).json({ message: "Username is not verified, due to that, he cannot like/unlike the post" });
    }

    try {
        const postDetails = await PostTweetModel.findOne({ _id: post_id });

        if (!postDetails) {
            return res.status(404).json({ message: "There is no post available, so you cannot like/unlike the post" });
        }

        const hasLiked = postDetails.likes.includes(userId);

        if (!hasLiked) {

            postDetails.likes.push(userId);
            const liked = postDetails.likes;
            const saveLike = await PostTweetModel.findOneAndUpdate({ _id: post_id }, { likes: liked });

            if (!saveLike) {
                return res.status(404).json({ message: "Likes array is not updated" });
            }

            res.status(200).send("Post is liked");
        } else {

            const userIndex = postDetails.likes.indexOf(userId);

            if (userIndex !== -1) {
                postDetails.likes.splice(userIndex, 1);
                const saveLike = await PostTweetModel.findOneAndUpdate({ _id: post_id }, { likes: postDetails.likes });

                if (!saveLike) {
                    return res.status(404).json({ message: "Likes array is not updated" });
                }

                res.status(200).send("Post is unliked");
            } else {

                res.status(200).send("Post is unliked");
            }
        }
    } catch (err) {
        return res.status(500).json({ message: "Some internal error" });
    }
});

module.exports = router;
