const express = require("express");
const multer  = require('multer')
const verify = require("../../helper/verify");
const PostTweetModel = require("../../model/TweetModel/PostTweetModel");
const UserModel = require("../../model/UserModel/UserModel");
const router = express.Router()


const storage = multer.diskStorage({
    destination:function(req,file,cb){
     return  cb(null, "../../uploads")
    },
    filename:function(req,file,cb){
     return cb(null,`${Date.now()}-${file.originalname}`)
    }
})

const upload = multer({storage})

router.post("/",verify,upload.single("file") ,async(req,res,next)=>{
    const decoded = req.decoded;
    const decodedEmail = decoded.email;
    console.log("file : ", req.file)
    const tweet = req.body;
    try{
    if(!tweet){
        return res.status(400).send("Please write something in the tweet")
    }

    if(decodedEmail){
      const user = await UserModel.findOne({email:decodedEmail});
      if(!user){
        return res.status(400).send("user detials not found due that you can not tweet")
      }
      tweet.userId = user._id;

    }
    
 
    const postTweet = await PostTweetModel.create(tweet)

    res.status(200).send(postTweet);
   }catch(err){
    return err.message
   }
})

module.exports =router