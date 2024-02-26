const mongoose = require('mongoose');


const revenueSchema = new mongoose.Schema({
    totalRevenue: {
        type: Number,
        default: 0
    }
});

const channelScema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    profilePic:{
        type: String
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    watchHour:{
        type:Number
    },
    monetized: {
        type: Boolean,
        default: false
    },
    revenue: {
        type: revenueSchema,
        default: function () {
            return this.monetized ? {} : undefined;
        }
    }
},{timestamps:true});

const Channel = mongoose.model('Channel', channelScema);

export default Channel;