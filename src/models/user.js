const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    profilePic:{
        type:String,
    },
    premium:{
        type:Boolean,
        required: true,
        default: 0,
    }
}, {timestamps: true});

const User = mongoose.model('User', userSchema);

export default User;