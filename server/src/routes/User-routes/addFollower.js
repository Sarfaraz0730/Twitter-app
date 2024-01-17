const express = require('express');
const mongoose = require("mongoose")
const verify = require('../../helper/verify');
const UserModel = require('../../model/UserModel/UserModel');
const router = express.Router();

router.post("/", verify, async (req, res, next) => {
    const decoded = req.decoded;
    const userId = new mongoose.Types.ObjectId(req.decoded._id);
    const friendId = new mongoose.Types.ObjectId(req.body.friendId);

    console.log("decoded", decoded)
    console.log("friendId", friendId)
    if (!friendId) {
        return res.status(404).send("to add a follower thier id required")

    }

    try {
        const friendIdDetails = await UserModel.findOne({ _id: friendId })
        if (!friendIdDetails) {
            return res.status(400).json({ error: "Invalid friendId" });
        }
        const myDetailsList = await UserModel.findOne({ _id: userId })
        if (!myDetailsList) {
            return res.status(404).json({ message: `${decoded.username} details not found` })
        }
        var isFriend = myDetailsList.following.includes(friendId)
        if (!isFriend) {
            myDetailsList.following.push(friendId);
            friendIdDetails.followers.push(userId)
            await myDetailsList.save();
            await friendIdDetails.save()
            return res.status(200).send(`You have started following ${friendIdDetails.name}`)
        } else {
            return res.status(200).send(`You are already following this ${friendIdDetails.name}`)
        }

    } catch (err) {
        return res.status(500).json({ message: "internal server error" })
    }
})
module.exports = router