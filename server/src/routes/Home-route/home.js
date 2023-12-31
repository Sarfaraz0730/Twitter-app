const express = require('express');
const verify = require('../../helper/verify');
const router = express.Router();

router.get("/",async(req,res)=>{
    res.send("Home page")
})

module.exports= router