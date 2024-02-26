const express = require('express');
const connect = require('./config/database-config');
const app = express();

app.listen(3000 , ()=> {
    console.log("Server listening on Port 3000");
    connect();
    console.log("MongoDB connected");
});