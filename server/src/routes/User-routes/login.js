const express = require("express");
const router = express.Router();
const UserModel = require("../../model/UserModel/UserModel");
const bcrypt = require('bcrypt');

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

        if (userExist) {
            const result = await bcrypt.compare(password, userExist.password);

            if (result) {
               
                return res.send("Valid user");
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
