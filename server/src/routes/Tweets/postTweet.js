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

const upload = multer({ storage });


router.post("/",verify, upload.single("file"), async (req, res) => {
    const decoded = req.decoded;
    const tweet = req.body;
    const file = req.file;
    const userId = decoded._id;
    console.log("tweet: ",tweet)

    console.log("the user who is doing tweet is userId: ", userId);
    console.log("file : ", file);

    if (!tweet) {
        return res.status(401).send("Please tweet something");
    }

    if (!userId) {
        return res.status(401).send("You cannot tweet because you are not authorized to tweet from someone else _id");
    }

    tweet.image = req.file && req.file.filename ? req.file.filename : "No file uploaded";
    tweet.userId = userId;
    tweet.descirption=req.body.descirption
    
 
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



/*const express = require("express");
const multer  = require('multer')
const path = require('path');

const PostTweetModel = require("../../model/TweetModel/PostTweetModel");
const UserModel = require("../../model/UserModel/UserModel");
const verify = require("../../helper/verify");

const router = express.Router()


const storage = multer.diskStorage({
    destination:function(req,file,cb){
      cb(null, path.join(__dirname, "uploads"));
    },
    filename:function(req,file,cb){
     return cb(null,`${Date.now()}-${file.originalname}`)
    }
})

const upload = multer({storage})


router.post("/",verify,upload.single("file") ,async(req,res,next)=>{
 
  const decoded = req.decoded;
  const tweet = req.body
  const file = req.file;
  const userId=decoded._id
  
  console.log("the user who is doing tweet is userId: ",userId);
 
  console.log("file : ", file);
  if(!tweet){
    return res.status(401).send("Please tweet something")
  }
  if(!userId){
    return res.status(401).send("You cannot tweet because you are not athorised to tweet  from someone else _id")
  }

  tweet.image = req.file.filename;
  tweet.userId=userId
  console.log("hi1")
  try{
    const tweetPosted = await PostTweetModel.create(tweet)
    console.log("hi2")
    console.log("tweetPosted:",tweetPosted)
    return res.status(200).send(`Your tweet is successfuly uploaded ${tweet}`)
  }catch(err){
    return res.status(500).send("Something went wrong from server side")
  }

})

module.exports =router
*/



   
  //   const decoded = req.decoded;
  //   const decodedEmail = decoded.email;
  //   console.log("file : ", req.file)
  //   const tweet = req.body;

  //   try{
  //   if(!tweet){
  //       return res.status(400).send("Please write something in the tweet")
  //   }

  //   if(decodedEmail){
  //     const user = await UserModel.findOne({email:decodedEmail});
  //     if(!user){
  //       return res.status(400).send("user detials not found due that you can not tweet")
  //     }
  //     tweet.userId = user._id;
  //     tweet.image=req.file.filename;


  //   }
  //    console.log("tweet : ",tweet)
 
  //   const postTweet = await PostTweetModel.create(tweet)

  //   res.status(200).send(postTweet);
  //  }catch(err){
  //   return res.status(500).send("Internal error");
  //  }