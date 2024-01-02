const express = require("express");
const router = express.Router();
const UserModel = require("../../model/UserModel/UserModel");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken")
const verify = require("../../helper/verify")




const SECRET_KEY="helloMyNameisSarfarazIamTheWorldBestDeveloper"
router.post("/", async (req, res) => {
    const data = req.body;
    const { email, password } = data;

    if (!email) {
        return res.send("Please enter your email");
    }

    if (!password) {
        return res.send("Please enter your password");
    }

    try {
        const userExist = await UserModel.findOne({ email });
       
        const userObectj ={
            username:userExist.username,
            name:userExist.name,
            email:userExist.email,
            password:userExist.password,
            mobileNumber:userExist.mobileNumber,
            dob:userExist.dob,
            followers:userExist.followers,
            following:userExist.following,
            location:userExist.location,
            dateOfJoining:userExist.dateOfJoining,
            
        }

        if (userExist) {
            const result = await bcrypt.compare(password, userExist.password);
   
            if (result) {
               
              var token=  jwt.sign(userObectj,SECRET_KEY)
               console.log("token:",token)
                return res.send(token);
            } else {
               
                return res.send("Invalid password");
            }
        } else {
       
            return res.send("Invalid user");
        }
    } catch (err) {
        console.log(err);
        res.status(500).send("Internal Server Error");
    }
});

module.exports = router;
