const express = require('express');
const verify = require('../../helper/verify');
const UserModel = require("../../model/UserModel/UserModel")
const router = express.Router();

router.patch("/", verify, async (req, res) => {
    try {
        const decoded = req.decoded;
        const email = decoded.email;
        const data = req.body;

        if (!data || !data.email) {
            return res.status(400).json({ message: 'Invalid data provided' });
        }

        const response = await UserModel.findOne({ email: email });

        if (!response) {
            return res.status(404).json({ message: 'No user details found' });
        }

        const userId = response._id;
        console.log("userId:", userId);

        const updateUser = await UserModel.findByIdAndUpdate(userId, data);

        if (!updateUser) {
            return res.status(404).json({ message: 'No user found for the provided ID' });
        }
        res.json(updateUser);
    } catch (err) {
        console.error("Error:", err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

module.exports = router;
