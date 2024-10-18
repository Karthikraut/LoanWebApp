const express = require("express");
const app = express();
const dotenv = require('dotenv');
const connectDB = require('./connection/index');
// const apiRoutes = require('./routes/index')

dotenv.config();
const PORT = process.env.PORT

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use('/user',apiRoutes)

app.listen(PORT ,()=>{
    console.log(`Hello ${process.env.PORT}`);

    connectDB();

    console.log(`Server has started AT ${PORT}`);
})