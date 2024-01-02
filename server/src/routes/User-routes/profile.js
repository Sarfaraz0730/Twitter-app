const express = require("express");
const router = express.Router();
const verify = require('../../helper/verify');


router.get("/", verify,(req,res,next)=>{
   const decoded = req.decoded
   

    if(!decoded){
        return res.status(401).json({  "message": "User not found",   
        "details": "The requested user profile does not exist."});
    }
    
        res.send(decoded)
    
})
module.exports = router;