const express = require('express');
const connect = require('./config/database-config');
const UserRepository = require('./repository/user-repository');
const ChannelRepository = require('./repository/channel-repository');
const subsribeRepository = require("./repository/subscribe-repository");
const VideoRepository = require('./repository/video-repository');
const LikeService = require('./services/like-service');
const app = express();

app.listen(3000 , async ()=> {
    console.log("Server listening on Port 3000");
    connect();
    console.log("MongoDB connected");
    // const channelrepo = new ChannelRepository();
    // const  channel = await channelrepo.get("65e81a98a9be89ba81c27ca6")
    // const video = new VideoRepository();
    // const res = await video.create({
    //     title:"Hamba Hamba",
    //     description:"Didi",
    //     video:'s3.google.com',
    //     author: "65e81a98a9be89ba81c27ca6"
    // })

    // channel.videos.push(res);
    // await channel.save();

    const like = new LikeService();
    await like.toggleLike("65e8ded2af0bc475349fef61" , 'Video' , "65e819cb7655fa2a9f9272a7");
});

// const test = async() =>
// {
// //     // const user= new UserRepository();
// // const channel = new ChannelRepository();
// // var newi =  await channel.get("65e81a98a9be89ba81c27ca6");
// // // channel.create({
// // //     name: "MrBeast",
// // //     user:"65e819cb7655fa2a9f9272a7"
// // // })
// // const subs = new subsribeRepository();
// // const neww = await subs.create({
// //     channel:"65e81a98a9be89ba81c27ca6",
// //     user:"65e819cb7655fa2a9f9272a7"
// // })
// // newi.subscribers.push(neww)
// // await newi.save()
// // }
// test()