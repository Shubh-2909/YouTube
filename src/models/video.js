const mongoose = require('mongoose');

const videoScema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    video: {
        type: String,
        required: true
    },
    views:{
        type:Number,
        default:0
    },
    author: {
        type: mongoose.Types.ObjectId,
        ref: 'Channel'
    },
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Comment',
        }
    ],
    likes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Like',
        }
    ]
});

const Video = mongoose.model('Video', videoScema);

module.exports = Video;