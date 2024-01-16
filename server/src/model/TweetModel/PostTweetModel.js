const mongoose = require('mongoose');
const { Schema } = mongoose;

const postTweetSchema = new mongoose.Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    descirption:{type:String,requred:true},
    likes:{type:Array, defualt:[]},
    image:{type:String,required:false},
    hashtags:{type:String,required:false},

     reTweet:{
        postTweetId:{type:String,required:false},
        userId:{type: Schema.Types.ObjectId, ref: 'User',required:false} 
    },
   

})
module.exports = mongoose.model("postTweet", postTweetSchema);
