
const express = require('express');
const mongoose = require('mongoose')
const verify =require("../../helper/verify");
const PostTweetModel = require('../../model/TweetModel/PostTweetModel');
const router = express.Router()



router.post("/", verify,async(req,res,next)=>{
    const body =req.body
    const decoded = req.decoded
    const postTweetId =new mongoose.Types.ObjectId(body.postTweetId);
    const userId = new mongoose.Types.ObjectId(decoded._id);
    const text = body.text
    console.log("postTweetId",postTweetId)

    if(!postTweetId){
        return res.status(404).json({message:"postId/tweetId is required to reTweet"})
    }
    const postDetails = await PostTweetModel.findOne({_id:postTweetId})
    if(!postDetails){
        return res.status(404).json({message:"tweet details not found"})
    }
    const reTweetDetails = {
        userId: userId,
        text: text,
        postTweetId: postTweetId
    };

    
    postDetails.reTweets.push(reTweetDetails);
    const updateTweet = await postDetails.save();
   
    if (!updateTweet) {
        return res.status(404).json({ message: "Could not do reTweet due to some reason" });
    }

    res.status(200).send("ReTweet successful");
})

module.exports= router