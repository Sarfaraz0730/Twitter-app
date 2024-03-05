const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    username: { type: String, required: false },
    name:{ type: String, required: false },
    email: { type: String, required: false },
    password: { type: String, required: false },
    dob: { type: String, required: false },
    mobileNumber: { type: Number, required: false },
    gender: { type: String, default: "Male" },
    followers: { type: Array, default: [] },
    following: { type: Array, default: [] },
    location: { type: String, default: "New Delhi India" },
    createdAt: { type: Date, default: Date.now },
    dateOfJoining: { type: Date, default: Date.now }
});

module.exports = mongoose.model("User", userSchema);
