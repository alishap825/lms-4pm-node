const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        required: true,
        unique: true,
        type: String,
        trim: true,
        lowercase: true
    },
    password: {
        required: true,
        type: String,
        trim: true,
    },
    fullName: {
        type: String
    }
})

module.exports = mongoose.model('user', userSchema);