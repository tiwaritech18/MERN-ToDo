const express = require("express");
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const {errorHandler} = require('./middleware/errorMiddleware')

// Load enviroment variables
dotenv.config();

const app = express();

//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//database connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

mongoose.connection.once('open', () => {
    console.log('mongoDB database connection established successfully')
})

//routes
app.use('/api/task', require('./routes/api'));

//start server
const PORT = process.env.PORT || 5000;

// Error handling middleware (should be the last middleware)
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})