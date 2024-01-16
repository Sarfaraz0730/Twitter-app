const express = require('express');
const PostTweetModel = require('../../model/TweetModel/PostTweetModel');
const router = express.Router()

router.delete("/:id",async(req,res,next)=>{
    console.log("params", req.params)
    const postId = req.params.id
    if(!postId){
        return res.status(404).send("post id is required to delete this post")
    }
    try{
        const postDetails = await PostTweetModel.findOne({_id:postId})
    if(!postDetails){
        return res.status(404).send("postDetails not found by id,may be post already deleted")
    }
    await PostTweetModel.findByIdAndDelete({_id:postId})
     return res.status(200).send("Post deleted Successfully")
    }catch(err){
     return res.status(500).send("internal server error")
    }
})
module.exports = router