const express = require('express');
const verify = require('../../helper/verify');
const PostTweetModel = require('../../model/TweetModel/PostTweetModel');
const router = express.Router()

router.get("/",verify, async(req,res,next)=>{
   try{
    const getAllData = await PostTweetModel.find()
    return res.status(200).send(getAllData)
   }catch(err){
    return res.status(500).send("internal server error")
   }
})
module.exports = router