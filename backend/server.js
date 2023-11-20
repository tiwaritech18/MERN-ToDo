const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config()
const PORT = process.env.PORT || 5000;
const URI = process.env.MONGO_URI    
const User = require('./models/Task')
//middleware
app.use(express.json());

//connect to mongodb
mongoose.connect(URI).then(() => {
    console.log("connected sucessfully");
    app.listen(PORT, () => {
        console.log(`running successfully on port ${PORT}`)
    })
}).catch((error) => {
    console.error(`error ${error}`)
})

module.exports = app