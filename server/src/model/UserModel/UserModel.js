const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    username: { type: String, required: true },
    name:{ type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    dob: { type: Date, required: false },
    mobileNumber: { type: Number, required: false },
    gender: { type: String, default: "Male" },
    followers: { type: Array, default: [] },
    following: { type: Array, default: [] },
    location: { type: String, default: "New Delhi India" },
    createdAt: { type: Date, default: Date.now },
    dateOfJoining: { type: Date, default: Date.now }
});

module.exports = mongoose.model("User", userSchema);
