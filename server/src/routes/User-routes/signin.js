const express = require('express');
const router = express.Router();
const UserModel = require('../../model/UserModel/UserModel');
const bcrypt = require('bcrypt');

router.post("/", async (req, res) => {
    const data = req.body;
    console.log("data", data)

    // if (!data.username || !data.name || !data.email || !data.password) {
    //     return res.status(400).send("All fields are required");
    // }

    try {
        // Check if the user already exists
        const existingUser = await UserModel.findOne({ username: data.username });
        if (existingUser) {
            return res.status(400).send("Username already exists");
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(data.password, 10);

        // Create a new user with the hashed password and other data
        const newUser = await UserModel.create({
            ...data,
            password: hashedPassword,
        });

        res.status(201).send({message:"Registration Successful", newUser:newUser});
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
});





module.exports = router;
