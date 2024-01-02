
const express = require('express');
const verify = require('../../helper/verify');
const UserModel = require("../../model/UserModel/UserModel")
const router = express.Router();

router.patch("/",verify, async(req,res)=>{
    const decoded = req.decoded;
    const email =decoded.email;
    const data = req.body;

   const updatedEmail = data.email;
    try{
       const response = await UserModel.findOne({email:email})
       const userId = response._id;
     
       if(!response){
        res.send("No details found")
       }else{
        const updateUser = await UserModel.findByIdAndUpdate(userId,data);
        res.send(updateUser)
       }
       
    }catch(err){

        res.status(401).send("No user found with this email id")
    }
})
module.exports = router;